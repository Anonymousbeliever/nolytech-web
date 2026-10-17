import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Check, Plus, Search } from 'lucide-react'
import { services } from '../../data/services.jsx'

const serviceIds = new Set(services.map(service => service.id))

export default function ServicesDirectory() {
  const { hash } = useLocation()
  const hashId = serviceIds.has(hash.slice(1)) ? hash.slice(1) : null

  // Arriving on /services#<id> opens that entry; otherwise the visitor's own choice wins
  const [choice, setChoice] = useState({ hash, id: hashId ?? services[0].id })
  const openId = choice.hash === hash ? choice.id : hashId ?? choice.id
  const toggle = id => setChoice({ hash, id: openId === id ? null : id })

  const [query, setQuery] = useState('')
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
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const q = query.trim().toLowerCase()
  const rows = services
    .map((service, index) => ({ ...service, number: String(index + 1).padStart(2, '0') }))
    .filter(s => !q || `${s.title} ${s.category} ${s.description} ${s.outcomes[0]}`.toLowerCase().includes(q))

  return (
    <section
      ref={ref}
      id="service-directory"
      className={`sd-section${isOn ? ' is-on' : ''}`}
      aria-labelledby="sd-title"
    >
      <div className="sd-inner">
        <div className="sd-head">
          <div className="sd-head-copy">
            <span className="sd-pill sd-rv" style={{ '--d': '0s' }}>Service directory</span>
            <h2 id="sd-title" className="sd-title sd-rv" style={{ '--d': '.08s' }}>
              Choose the capability your organisation needs next
            </h2>
          </div>
          <p className="sd-lead sd-rv" style={{ '--d': '.16s' }}>
            A clear view of every service. Each entry shows the service, its category and a
            practical outcome. Open one for the full details.
          </p>
        </div>

        <div className="sd-table">
          <div className="sd-toolbar sd-rv" style={{ '--d': '.24s' }}>
            <label className="sd-search">
              <span className="sd-sr">Search services</span>
              <Search size={16} strokeWidth={2} className="sd-search-icon" aria-hidden="true" />
              <input
                type="text"
                className="sd-input"
                placeholder="Search the directory…"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </label>
            <span className="sd-count" aria-live="polite">
              {rows.length} {rows.length === 1 ? 'service' : 'services'}
            </span>
          </div>

          <span className="sd-line" aria-hidden="true" />
          <div className="sd-grid sd-thead sd-rv" style={{ '--d': '.35s' }} aria-hidden="true">
            <span>No.</span>
            <span>Service</span>
            <span className="sd-col-cat">Category</span>
            <span className="sd-col-out">Outcome</span>
            <span />
          </div>

          {rows.map((service, index) => {
            const isOpen = openId === service.id
            const panelId = `sd-panel-${service.id}`
            return (
              <div
                key={service.id}
                id={service.id}
                className={`sd-item sd-rv${isOpen ? ' is-open' : ''}`}
                style={{ '--d': `${(0.45 + index * 0.07).toFixed(2)}s` }}
              >
                <button
                  type="button"
                  className="sd-row sd-grid"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(service.id)}
                >
                  <span className="sd-num">{service.number}</span>
                  <span className="sd-name-wrap">
                    <span className="sd-mcat">{service.category}</span>
                    <span className="sd-name">{service.title}</span>
                  </span>
                  <span className="sd-col-cat sd-cat">{service.category}</span>
                  <span className="sd-col-out sd-out">{service.outcomes[0]}</span>
                  <span className="sd-toggle" aria-hidden="true">
                    <Plus size={14} strokeWidth={2.2} className="sd-toggle-icon" />
                  </span>
                </button>

                {isOpen && (
                  <div id={panelId} className="sd-detail">
                    <p className="sd-desc">{service.description}</p>
                    <div className="sd-detail-side">
                      <div className="sd-outcome">
                        <span className="sd-outcome-label">Outcome</span>
                        <span className="sd-outcome-text">
                          <Check size={16} strokeWidth={2.2} aria-hidden="true" />
                          {service.outcomes[0]}
                        </span>
                      </div>
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="sd-btn"
                      >
                        Inquire about this service
                        <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          {rows.length === 0 && <div className="sd-empty">No services match your search.</div>}
        </div>
      </div>
    </section>
  )
}
