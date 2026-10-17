import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUp } from 'lucide-react'
import { scrollToTop } from './smoothScroll.jsx'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Services', to: '/services' },
      { label: 'Solutions', to: '/solutions' },
      { label: 'Team', to: '/team' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Custom Software', to: '/services#custom-software' },
      { label: 'ERP & Enterprise Systems', to: '/services#erp-enterprise-systems' },
      { label: 'AI Automation', to: '/services#ai-automation-copilot' },
      { label: 'Websites & Client Portals', to: '/services#website-client-portals' },
      { label: 'Cloud & Infrastructure', to: '/services#cloud-server-infrastructure' },
    ],
  },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms-of-service' },
  { label: 'Delete Account', to: '/delete-account' },
]

export default function Footer() {
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
    <footer ref={ref} className={`ft-footer${isOn ? ' is-on' : ''}`}>
      <div className="ft-inner">
        <div className="ft-cta-row">
          <h2 className="ft-heading">
            Experts In <em>Every byte</em>
          </h2>
          <Link to="/contact" className="ft-cta">
            Talk to Nolytech
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>

        <div className="ft-grid">
          <div className="ft-brand">
            <Link to="/" className="ft-logo" aria-label="Nolytech home">
              <img src="/images/logo.png" alt="Nolytech Limited" width="1135" height="960" loading="lazy" />
            </Link>
            <p className="ft-tagline">
              Practical software, automation and infrastructure support for growing businesses and
              institutions in Kenya.
            </p>
          </div>

          {columns.map(column => (
            <div key={column.title} className="ft-col">
              <span className="ft-col-title">{column.title}</span>
              <ul className="ft-links">
                {column.links.map(link => (
                  <li key={link.to}>
                    <Link to={link.to} className="ft-l">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="ft-col">
            <span className="ft-col-title">Contact</span>
            <div className="ft-contacts">
              <a className="ft-l ft-contact" href="mailto:info@nolytech.co.ke">
                <span className="ft-contact-label">Email</span>
                <span className="ft-contact-value">info@nolytech.co.ke</span>
              </a>
              <a className="ft-l ft-contact" href="tel:+254795112229">
                <span className="ft-contact-label">Phone</span>
                <span className="ft-contact-value">+254 795 112 229</span>
              </a>
              <div className="ft-contact">
                <span className="ft-contact-label">Location</span>
                <span className="ft-contact-value">Mombasa, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ft-bottom">
          <span>&copy; {new Date().getFullYear()} Nolytech Limited. All rights reserved.</span>
          <nav aria-label="Legal" className="ft-legal">
            {legalLinks.map(link => (
              <Link key={link.to} to={link.to}>{link.label}</Link>
            ))}
            <button type="button" className="ft-top" aria-label="Back to top" onClick={scrollToTop}>
              <ArrowUp size={15} strokeWidth={2} aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>

      <div className="ft-word-wrap" aria-hidden="true">
        <span className="ft-word">nolytech</span>
      </div>
    </footer>
  )
}
