import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Navbar from './Navbar'
import Footer from './Footer'
import { registerLenis } from './smoothScroll.jsx'

// Fallback anchor offset when a target has no scroll-margin-top (fixed nav height + breathing room)
const ANCHOR_OFFSET = 96

export default function Layout() {
  const { pathname, hash } = useLocation()
  const prevPathname = useRef(null)
  const lenisRef = useRef(null)

  // Inertial smooth scrolling for the whole site (Lenis disables itself under reduced motion)
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 0.9,
      autoRaf: true,
      anchors: { offset: -ANCHOR_OFFSET },
    })
    lenisRef.current = lenis
    registerLenis(lenis)
    return () => {
      lenis.destroy()
      lenisRef.current = null
      registerLenis(null)
    }
  }, [])

  useEffect(() => {
    const isSamePage = prevPathname.current === pathname
    prevPathname.current = pathname
    const lenis = lenisRef.current

    const scrollToTop = () => {
      if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
      else window.scrollTo({ top: 0, behavior: 'instant' })
    }

    if (!hash) {
      // New page always starts at the top without animated scrolling
      scrollToTop()
      return
    }

    // Double rAF ensures React has committed and painted before we measure
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById(hash.slice(1))
        if (!el) {
          scrollToTop()
          return
        }

        // In-page anchors glide; arriving from another page lands instantly
        if (lenis) {
          const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || ANCHOR_OFFSET
          lenis.scrollTo(el, { offset: -margin, immediate: !isSamePage, force: true })
        } else {
          el.scrollIntoView({ behavior: isSamePage ? 'smooth' : 'instant', block: 'start' })
        }
      })
    })
  }, [pathname, hash])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
