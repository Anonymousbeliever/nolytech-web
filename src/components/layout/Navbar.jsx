import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, ChevronDown, Equal, Mail, MapPin, Phone, X } from 'lucide-react'
import { services } from '../../data/services.jsx'
import { solutions } from '../../data/solutions.jsx'

const navItems = [
  {
    label: 'Services',
    to: '/services',
    allLabel: 'View all services',
    columns: 2,
    menu: services.map(service => ({ label: service.title, to: `/services#${service.id}` })),
  },
  {
    label: 'Solutions',
    to: '/solutions',
    allLabel: 'View all solutions',
    columns: 1,
    menu: solutions
      .filter(solution => solution.featured)
      .map(solution => ({ label: solution.title, to: `/solutions#${solution.id}` })),
  },
  { label: 'About us', to: '/about' },
  { label: 'Team', to: '/team' },
]

const mobileLinks = [...navItems, { label: 'Contact', to: '/contact' }]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 8)
  // The menu remembers the page it was opened on, so any navigation closes it
  const [menuOpenedOn, setMenuOpenedOn] = useState(null)
  const menuOpen = menuOpenedOn === pathname
  const closeMenu = () => setMenuOpenedOn(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = event => event.key === 'Escape' && setMenuOpenedOn(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className={`nx-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-menu-open' : ''}`}>
      {/* Utility bar — collapses away once the page scrolls */}
      <div className="nx-utility">
        <div className="nx-utility-inner">
          <p className="nx-motto">
            <span className="nx-motto-dot" aria-hidden="true" />
            Experts in every byte
          </p>
          <div className="nx-utility-links">
            <a href="https://maps.app.goo.gl/cGBiNYZKsoZZ1zJ66" target="_blank" rel="noreferrer" className="nx-utility-location">
              <MapPin size={14} strokeWidth={1.8} aria-hidden="true" />
              Nyali, Mombasa
            </a>
            <a href="mailto:info@nolytech.co.ke" className="nx-utility-email">
              <Mail size={14} strokeWidth={1.8} aria-hidden="true" />
              info@nolytech.co.ke
            </a>
            <a href="tel:+254795112229">
              <Phone size={14} strokeWidth={1.8} aria-hidden="true" />
              +254 795 112 229
            </a>
          </div>
        </div>
      </div>

      <div className="nx-navbar">
        <nav className="nx-nav" aria-label="Main">
          <Link to="/" className="nx-brand" aria-label="Nolytech home" onClick={closeMenu}>
            <img src="/images/logo.png" alt="Nolytech Limited" className="nx-brand-logo" width="1135" height="960" />
          </Link>

          <ul className="nx-links">
            {navItems.map(item => (
              <li key={item.to} className="nx-item">
                <NavLink to={item.to} className={({ isActive }) => `nx-link${isActive ? ' is-active' : ''}`}>
                  {item.label}
                  {item.menu && <ChevronDown className="nx-link-chevron" size={12} strokeWidth={2.2} aria-hidden="true" />}
                </NavLink>

                {item.menu && (
                  <div className="nx-dropdown">
                    <div className={`nx-dropdown-panel${item.columns === 2 ? ' is-wide' : ''}`}>
                      <ul className="nx-dropdown-list">
                        {item.menu.map(entry => (
                          <li key={entry.to}>
                            <Link to={entry.to} className="nx-dropdown-link">{entry.label}</Link>
                          </li>
                        ))}
                      </ul>
                      <Link to={item.to} className="nx-dropdown-all">
                        {item.allLabel}
                        <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="nx-actions">
            <NavLink to="/contact" className={({ isActive }) => `nx-link nx-contact${isActive ? ' is-active' : ''}`}>
              Contact
            </NavLink>
            <Link to="/contact" className="nx-cta">
              Start a project
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="nx-menu-btn"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="nx-mobile-menu"
              onClick={() => setMenuOpenedOn(menuOpen ? null : pathname)}
            >
              {menuOpen
                ? <X size={18} strokeWidth={2} aria-hidden="true" />
                : <Equal size={18} strokeWidth={2} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu — drops below the bar on narrow screens */}
      <div id="nx-mobile-menu" className={`nx-mobile-panel${menuOpen ? ' is-open' : ''}`} inert={!menuOpen} data-lenis-prevent>
        <ul className="nx-mobile-list">
          {mobileLinks.map(item => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => `nx-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
                <ArrowRight size={16} aria-hidden="true" />
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="nx-mobile-cta" onClick={closeMenu}>
          Start a project
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </header>
  )
}
