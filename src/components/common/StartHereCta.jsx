import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone } from 'lucide-react'

export default function StartHereCta() {
  const [isOn, setIsOn] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setIsOn(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className={`ct-section${isOn ? ' is-on' : ''}`} aria-labelledby="ct-title">
      <div className="ct-panel">
        <svg className="ct-ring" aria-hidden="true" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="120" stroke="rgba(255,255,255,0.14)" />
          <circle cx="300" cy="300" r="190" stroke="rgba(255,255,255,0.11)" />
          <circle cx="300" cy="300" r="260" stroke="rgba(255,255,255,0.08)" />
          <circle cx="300" cy="300" r="298" stroke="rgba(255,255,255,0.05)" />
        </svg>

        <div className="ct-content">
          <div className="ct-copy">
            <span className="ct-kicker ct-r" style={{ '--d': '.25s' }}>Start here</span>
            <h2 id="ct-title" className="ct-title ct-r" style={{ '--d': '.35s' }}>
              Tell us what you’re trying to build, fix or <em>improve.</em>
            </h2>
            <p className="ct-lead ct-r" style={{ '--d': '.45s' }}>
              We’ll be honest about the right approach, the likely scope and how Nolytech can help.
            </p>
          </div>

          <div className="ct-side">
            <div className="ct-actions ct-r" style={{ '--d': '.55s' }}>
              <Link to="/contact" className="ct-btn ct-btn-primary">
                Get in touch
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </Link>
              <Link to="/services" className="ct-btn ct-btn-ghost">View services</Link>
            </div>

            <div className="ct-contacts ct-r" style={{ '--d': '.65s' }}>
              <a href="mailto:info@nolytech.co.ke" className="ct-contact">
                <span className="ct-contact-icon" aria-hidden="true"><Mail size={16} strokeWidth={1.8} /></span>
                <span className="ct-contact-text">info@nolytech.co.ke</span>
              </a>
              <a href="tel:+254795112229" className="ct-contact">
                <span className="ct-contact-icon" aria-hidden="true"><Phone size={16} strokeWidth={1.8} /></span>
                <span className="ct-contact-text">+254 795 112 229</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
