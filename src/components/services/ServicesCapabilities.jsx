import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Cloud, CodeXml, Database, MessageCircleMore, MonitorSmartphone, Network, Server } from 'lucide-react'
import { services } from '../../data/services.jsx'

const byId = Object.fromEntries(services.map(service => [service.id, service]))

const capabilities = [
  {
    id: 'software-erp',
    tab: 'Software & ERP',
    icon: CodeXml,
    label: 'Software & ERP',
    title: 'Custom systems and enterprise workflows built around real operations',
    text: 'We build software, ERP-style platforms, and enterprise system improvements that bring teams, records, approvals, and reporting into structured digital workflows.',
    serviceIds: ['custom-software', 'erp-enterprise-systems'],
    visual: 'erp',
  },
  {
    id: 'ai-automation',
    tab: 'AI & Automation',
    icon: MessageCircleMore,
    label: 'AI & communication automation',
    title: 'AI, chatbots, and WhatsApp flows that reduce repetitive work',
    text: 'We help teams automate routine tasks, support users through chat, connect WhatsApp to business systems, and make everyday operations faster.',
    serviceIds: ['ai-automation-copilot', 'chatbots-whatsapp'],
    visual: 'chat',
  },
  {
    id: 'digital-platforms',
    tab: 'Digital Platforms',
    icon: MonitorSmartphone,
    label: 'Digital platforms',
    title: 'Websites, client portals, and mobile apps with a clear purpose',
    text: 'We create public-facing and internal digital platforms that are fast, usable, and ready to support customers, members, staff, and field teams.',
    serviceIds: ['website-client-portals', 'mobile-apps'],
    visual: 'portal',
  },
  {
    id: 'cloud-infrastructure',
    tab: 'Cloud & Infrastructure',
    icon: Cloud,
    label: 'Data, cloud & infrastructure',
    title: 'Reliable databases, cloud systems, servers, and hosting environments',
    text: 'We help organisations protect data, improve performance, manage cloud and server environments, monitor systems, and plan practical backups.',
    serviceIds: ['database-data-management', 'cloud-server-infrastructure'],
    visual: 'infra',
  },
  {
    id: 'networks-strategy',
    tab: 'Networks & Strategy',
    icon: Network,
    label: 'Connectivity & strategy',
    title: 'Stable connectivity and practical technology roadmaps for growth',
    text: 'We strengthen network foundations and guide technology decisions so organisations can invest in systems that fit their operations and future plans.',
    serviceIds: ['networking-connectivity', 'it-consultancy-digital-transformation'],
    visual: 'roadmap',
  },
]

export default function ServicesCapabilities() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])
  const current = capabilities[active]
  const CurrentIcon = current.icon
  const related = current.serviceIds.map(id => byId[id]).filter(Boolean)
  const inquireHref = `/contact?service=${encodeURIComponent(related[0]?.title ?? current.label)}`

  // Arrow keys move between tabs, as expected for a tablist
  const onTabKey = (event, index) => {
    const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
    if (!step) return
    event.preventDefault()
    const next = (index + step + capabilities.length) % capabilities.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section className="cp-section" aria-labelledby="cp-title">
      <div className="cp-inner">
        <div className="cp-head">
          <span className="cp-pill">Capabilities</span>
          <h2 id="cp-title" className="cp-title">Five ways we help organisations move with confidence</h2>
          <p className="cp-lead">
            Each category connects practical software, automation, infrastructure, and advisory work
            into services that can be shaped around your operations.
          </p>
        </div>

        <div className="cp-body">
          <div className="cp-tabs" role="tablist" aria-label="Capabilities">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              const selected = index === active
              return (
                <button
                  key={capability.id}
                  ref={el => { tabRefs.current[index] = el }}
                  type="button"
                  role="tab"
                  id={`cp-tab-${capability.id}`}
                  aria-selected={selected}
                  aria-controls="cp-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`cp-tab${selected ? ' is-selected' : ''}`}
                  onClick={() => setActive(index)}
                  onKeyDown={event => onTabKey(event, index)}
                >
                  <Icon size={20} strokeWidth={1.7} className="cp-tab-icon" aria-hidden="true" />
                  <span>{capability.tab}</span>
                </button>
              )
            })}
          </div>

          {/* Keyed by tab so the entrance animation replays on every switch */}
          <div
            key={current.id}
            id="cp-panel"
            role="tabpanel"
            aria-labelledby={`cp-tab-${current.id}`}
            className="cp-panel"
          >
            <div className="cp-copy">
              <div className="cp-copy-top">
                <span className="cp-label">
                  <CurrentIcon size={15} strokeWidth={2} aria-hidden="true" />
                  {current.label}
                </span>
                <h3 className="cp-panel-title">{current.title}</h3>
                <p className="cp-panel-text">{current.text}</p>
                <ul className="cp-services">
                  {related.map(service => (
                    <li key={service.id}>
                      <a href={`#${service.id}`} className="cp-service">
                        <span className="cp-service-dot" aria-hidden="true" />
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to={inquireHref} className="cp-link">
                Inquire about this service
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>

            <div className="cp-visual" aria-hidden="true">
              <Visual kind={current.visual} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Illustrative screens — sample data only */
function Visual({ kind }) {
  if (kind === 'erp') {
    return (
      <Window title="Business ERP" className="cp-window-erp">
        <div className="cp-ui-pad">
          <div className="cp-ui-figure-row">
            <div className="cp-ui-figure">
              <span className="cp-ui-muted">Total revenue</span>
              <span className="cp-ui-big">$250,000</span>
            </div>
            <span className="cp-ui-trend">+12.5%</span>
          </div>
          <svg viewBox="0 0 300 80" preserveAspectRatio="none" className="cp-ui-chart">
            <polyline
              className="cp-draw"
              points="0,66 25,58 50,62 75,44 100,50 125,34 150,46 175,28 200,38 225,20 250,28 275,12 300,8"
              fill="none"
              stroke="#5B3DF5"
              strokeWidth="2"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div>
            <Row label="Pending approvals" value="12" />
            <Row label="Open tasks" value="24" />
            <Row label="Purchase order PO-2026-0148" value="In progress" accent />
          </div>
        </div>
      </Window>
    )
  }

  if (kind === 'chat') {
    return (
      <Window title="NolyDesk AI Assistant" className="cp-window-chat">
        <div className="cp-ui-pad cp-ui-chat">
          <div className="cp-ui-bubble is-bot cp-m1">Hello! How can I help you today?</div>
          <div className="cp-ui-bubble is-user cp-m2">I need help with resetting my password.</div>
          <div className="cp-ui-bubble is-bot is-wide cp-m3">Sure! What email address is associated with your account?</div>
          <div className="cp-ui-chips cp-m4">
            <span>Track my ticket</span>
            <span>Talk to agent</span>
          </div>
        </div>
      </Window>
    )
  }

  if (kind === 'portal') {
    return (
      <div className="cp-portal">
        <Window title="Client portal">
          <div className="cp-ui-pad">
            <span className="cp-ui-welcome">Welcome back</span>
            <div className="cp-ui-tiles">
              <div className="cp-ui-tile">
                <span className="cp-ui-muted">Requests</span>
                <span className="cp-ui-mid">3 open</span>
              </div>
              <div className="cp-ui-tile">
                <span className="cp-ui-muted">Documents</span>
                <span className="cp-ui-mid">12 files</span>
              </div>
            </div>
            <div>
              <Row label="Statement — May" value="Download" link />
              <Row label="Service request #482" value="In review" />
            </div>
          </div>
        </Window>
        <div className="cp-phone">
          <div className="cp-phone-screen">
            <span className="cp-phone-title">My account</span>
            <div className="cp-phone-balance">
              <span>Balance</span>
              <strong>KES 245,680</strong>
            </div>
            <div className="cp-phone-grid">
              <span /><span /><span /><span />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (kind === 'infra') {
    const stack = [
      [Cloud, 'Cloud hosting', 'Applications and services'],
      [Database, 'Databases', 'Records and reporting data'],
      [Server, 'Servers', 'On-site and hosted'],
    ]
    return (
      <div className="cp-stack-list">
        {stack.map(([Icon, name, sub]) => (
          <div key={name} className="cp-stack">
            <span className="cp-stack-icon"><Icon size={22} strokeWidth={1.7} /></span>
            <span className="cp-stack-text">
              <span className="cp-stack-name">{name}</span>
              <span className="cp-ui-muted">{sub}</span>
            </span>
            <span className="cp-stack-status"><span className="cp-stack-dot" />Online</span>
          </div>
        ))}
      </div>
    )
  }

  const steps = [
    ['System audit', 'Review what you have today', true],
    ['Technology planning', 'Infrastructure that fits your growth', true],
    ['Stable connectivity', 'Reliable networks across sites', false],
    ['Growth roadmap', 'Priorities for the years ahead', false],
  ]
  return (
    <div className="cp-roadmap">
      <span className="cp-roadmap-title">Technology roadmap</span>
      <ol className="cp-roadmap-list">
        {steps.map(([name, sub, done], index) => (
          <li key={name} className="cp-roadmap-step">
            <span className="cp-roadmap-rail">
              <span className={`cp-roadmap-num${done ? ' is-done' : ''}`}>{index + 1}</span>
              {index < steps.length - 1 && <span className="cp-roadmap-line" />}
            </span>
            <span className="cp-roadmap-text">
              <span className="cp-roadmap-name">{name}</span>
              <span className="cp-ui-muted">{sub}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Window({ title, className = '', children }) {
  return (
    <div className={`cp-window ${className}`}>
      <div className="cp-window-bar">
        <span /><span /><span />
        <span className="cp-window-title">{title}</span>
      </div>
      {children}
    </div>
  )
}

function Row({ label, value, accent = false, link = false }) {
  return (
    <div className="cp-ui-row">
      <span className="cp-ui-row-label">{label}</span>
      <span className={`cp-ui-row-value${accent ? ' is-accent' : ''}${link ? ' is-link' : ''}`}>{value}</span>
    </div>
  )
}
