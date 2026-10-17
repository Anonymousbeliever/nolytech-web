import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Cloud, CodeXml, Layers, MessageCircle, Network, Plus, Search, Smartphone, Sparkles } from 'lucide-react'

const AREAS = ['Build', 'Operate', 'Automate', 'Secure', 'Connect']

const services = [
  { id: 'custom-software', icon: CodeXml, area: 'Build', name: 'Custom Software Development', desc: 'Systems built around your workflows', incl: 'Web applications, internal tools, system integrations' },
  { id: 'erp-enterprise-systems', icon: Layers, area: 'Operate', name: 'ERP & Business Platforms', desc: 'One place to run the organisation', incl: 'Sales, purchasing, inventory, finance, HR and payroll' },
  { id: 'mobile-apps', icon: Smartphone, area: 'Build', name: 'Mobile Apps', desc: 'Apps for members, customers and staff', incl: 'Android and iOS apps connected to your systems' },
  { id: 'ai-automation-copilot', icon: Sparkles, area: 'Automate', name: 'AI Automation & Chatbots', desc: 'Less manual work, faster answers', incl: 'AI assistants, automated workflows, knowledge bases' },
  { id: 'chatbots-whatsapp', icon: MessageCircle, area: 'Automate', name: 'WhatsApp Integrations', desc: 'Reach people where they already are', incl: 'Notifications, chat support, WhatsApp-based services' },
  { id: 'cloud-server-infrastructure', icon: Cloud, area: 'Secure', name: 'Cloud & Data', desc: 'Reliable hosting and well-kept data', incl: 'Cloud hosting, data management, backups' },
  { id: 'networking-connectivity', icon: Network, area: 'Connect', name: 'Networks & Strategy', desc: 'Foundations for long-term decisions', incl: 'Connectivity, infrastructure planning, system audits, technology roadmaps' },
]

const easeInOutCubic = p => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2)
const easeOutCubic = p => 1 - Math.pow(1 - p, 3)
const clamp01 = value => Math.max(0, Math.min(1, value))

export default function HomeServices() {
  const [query, setQuery] = useState('')
  const [area, setArea] = useState('All')
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const tableRef = useRef(null)

  // Scroll-linked entrance: the table tilts up and grows, the heading rises out from behind it.
  // Styles are written straight to the DOM each frame so scrolling never re-renders React.
  useEffect(() => {
    const section = sectionRef.current
    const head = headRef.current
    const table = tableRef.current
    if (!section || !head || !table) return

    const apply = progress => {
      const e = easeInOutCubic(progress)
      const scale = 0.48 + 0.52 * e
      table.style.transform =
        `perspective(1600px) translateY(${Math.round((1 - e) * 240)}px) rotateX(${((1 - e) * 32).toFixed(2)}deg) scale(${scale.toFixed(3)})`

      const he = easeOutCubic(clamp01((progress - 0.35) / 0.65))
      head.style.transform = `translateY(${Math.round((1 - he) * 440)}px) scale(${(0.88 + 0.12 * he).toFixed(3)})`
      head.style.opacity = he.toFixed(3)
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      apply(1)
      return
    }

    let frame = null
    const measure = () => {
      frame = null
      const vh = window.innerHeight || 900
      const top = section.getBoundingClientRect().top
      apply(clamp01((vh * 0.95 - top) / (vh * 0.95)))
    }
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [])

  const q = query.trim().toLowerCase()
  const rows = services.filter(s =>
    (area === 'All' || s.area === area) &&
    (!q || `${s.name} ${s.desc} ${s.incl}`.toLowerCase().includes(q)),
  )

  return (
    <div className="sv-wrap">
      <section ref={sectionRef} className="sv-section" aria-labelledby="sv-title">
        <div ref={headRef} className="sv-head">
          <span className="sv-pill">What we do</span>
          <h2 id="sv-title" className="sv-title">One focused view of the work behind better operations</h2>
        </div>

        <div ref={tableRef} className="sv-table">
          <div className="sv-toolbar">
            <div className="sv-toolbar-top">
              <span className="sv-table-title">Services</span>
              <Link to="/contact" className="sv-start">
                <Plus size={15} strokeWidth={2} aria-hidden="true" />
                Start a project
              </Link>
            </div>
            <div className="sv-filters">
              <label className="sv-search">
                <span className="sv-sr">Search services</span>
                <Search size={16} strokeWidth={2} className="sv-search-icon" aria-hidden="true" />
                <input
                  type="text"
                  className="sv-input"
                  placeholder="Search services…"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
              </label>
              <label className="sv-filter">
                <span className="sv-sr">Filter by area</span>
                <select className="sv-select" value={area} onChange={e => setArea(e.target.value)}>
                  <option value="All">All areas</option>
                  {AREAS.map(name => <option key={name} value={name}>{name}</option>)}
                </select>
              </label>
            </div>
          </div>

          <div className="sv-body">
            <div className="sv-grid sv-thead">
              <span>Service</span>
              <span className="sv-col-area">Area</span>
              <span className="sv-col-incl">What’s included</span>
              <span className="sv-col-action" />
            </div>

            {rows.map(service => {
              const Icon = service.icon
              return (
                <div key={service.id} className="sv-grid sv-row">
                  <div className="sv-service">
                    <span className="sv-icon" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>
                    <div className="sv-service-text">
                      <span className="sv-name">{service.name}</span>
                      <span className="sv-desc">{service.desc}</span>
                    </div>
                  </div>
                  <div className="sv-col-area">
                    <span className={`sv-area is-${service.area.toLowerCase()}`}>
                      <span className="sv-area-dot" />
                      {service.area}
                    </span>
                  </div>
                  <span className="sv-col-incl sv-incl">{service.incl}</span>
                  <Link
                    to={`/services#${service.id}`}
                    className="sv-view"
                    aria-label={`View ${service.name}`}
                  >
                    View
                    <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              )
            })}

            {rows.length === 0 && <div className="sv-empty">No services match your search.</div>}
          </div>
        </div>
      </section>
    </div>
  )
}
