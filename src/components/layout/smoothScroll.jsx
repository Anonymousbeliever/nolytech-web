// Shared handle on the site's Lenis instance so components outside Layout can scroll smoothly
let lenis = null

export function registerLenis(instance) {
  lenis = instance
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0)
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}
