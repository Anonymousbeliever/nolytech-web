import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Test builds go here. nginx serves dist/, which only `npm run deploy` writes to.
    outDir: 'build',
  },
})
