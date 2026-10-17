// Publishes the site to nolytech.co.ke.
//
// nginx serves dist/ directly, so this script is the only thing that should write there.
// It builds into a temporary folder first and swaps it into place only if the build succeeds,
// keeping the previous live version in .dist-previous/ for `npm run rollback`.

import { build } from 'vite'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const LIVE = path.join(root, 'dist')
const NEXT = path.join(root, '.deploy-tmp')
const PREVIOUS = path.join(root, '.dist-previous')

const exists = target => fs.access(target).then(() => true, () => false)

async function swap(incoming, label) {
  // Two renames on the same disk: the live folder is missing for only a few microseconds
  const parked = path.join(root, '.dist-swap')
  await fs.rm(parked, { recursive: true, force: true })
  if (await exists(LIVE)) await fs.rename(LIVE, parked)
  await fs.rename(incoming, LIVE)
  await fs.rm(PREVIOUS, { recursive: true, force: true })
  if (await exists(parked)) await fs.rename(parked, PREVIOUS)
  console.log(`\n✅ ${label} — nolytech.co.ke is now serving the new files.`)
}

async function deploy() {
  console.log('Building a fresh copy (the live site is untouched until this succeeds)…\n')
  await fs.rm(NEXT, { recursive: true, force: true })
  try {
    await build({ root, build: { outDir: NEXT, emptyOutDir: true } })
  } catch (error) {
    await fs.rm(NEXT, { recursive: true, force: true })
    console.error('\n❌ Build failed — nothing was published. The live site is unchanged.')
    throw error
  }
  if (!(await exists(path.join(NEXT, 'index.html')))) {
    throw new Error('Build produced no index.html — nothing was published.')
  }
  await swap(NEXT, 'Deployed')
  console.log('   Undo with: npm run rollback')
}

async function rollback() {
  if (!(await exists(PREVIOUS))) {
    console.error('❌ No previous version to roll back to.')
    process.exit(1)
  }
  // The current live version becomes the "previous" one, so a second rollback re-applies it
  const restoring = path.join(root, '.dist-restore')
  await fs.rm(restoring, { recursive: true, force: true })
  await fs.rename(PREVIOUS, restoring)
  await swap(restoring, 'Rolled back to the previous deploy')
}

const run = process.argv.includes('--rollback') ? rollback : deploy
run().catch(error => {
  console.error(error.message ?? error)
  process.exit(1)
})
