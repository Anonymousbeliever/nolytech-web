import { useEffect, useMemo, useRef, useState } from 'react'
import { BotMessageSquare, Code2, Database, Globe, Network } from 'lucide-react'
import Button from '../components/common/Button.jsx'
import ServicesCapabilities from '../components/services/ServicesCapabilities.jsx'
import ServicesDirectory from '../components/services/ServicesDirectory.jsx'
import ServicesHero from '../components/services/ServicesHero.jsx'
import { services } from '../data/services.jsx'

const startingPoints = [
  {
    id: 'manual-work',
    icon: Code2,
    title: 'We need to automate manual work',
    text: 'For teams dealing with repeated approvals, follow-ups, spreadsheets, or operational tasks that slow daily work.',
    serviceIds: ['custom-software', 'erp-enterprise-systems', 'ai-automation-copilot'],
  },
  {
    id: 'business-system',
    icon: Database,
    title: 'We need a business system or ERP-style platform',
    text: 'For organisations that need one structured place for users, records, inventory, finance, approvals, reports, and workflows.',
    serviceIds: ['erp-enterprise-systems', 'custom-software', 'database-data-management'],
  },
  {
    id: 'ai-chat',
    icon: BotMessageSquare,
    title: 'We need AI, chatbots, or WhatsApp automation',
    text: 'For service teams that want faster responses, automated requests, WhatsApp notifications, or AI-assisted internal workflows.',
    serviceIds: ['ai-automation-copilot', 'chatbots-whatsapp'],
  },
  {
    id: 'digital-access',
    icon: Globe,
    title: 'We need a website, portal, or mobile app',
    text: 'For organisations that need a better digital front door, self-service access, client portals, or mobile access for users and teams.',
    serviceIds: ['website-client-portals', 'mobile-apps'],
  },
  {
    id: 'infrastructure',
    icon: Network,
    title: 'We need infrastructure, cloud, network, or data support',
    text: 'For teams that need stable connectivity, safer databases, backups, servers, cloud hosting, monitoring, or ICT guidance.',
    serviceIds: ['cloud-server-infrastructure', 'networking-connectivity', 'database-data-management', 'it-consultancy-digital-transformation'],
  },
]

export default function Services() {
  const byId = useMemo(() => Object.fromEntries(services.map(service => [service.id, service])), [])
  const [activeStartingPointId, setActiveStartingPointId] = useState(startingPoints[0].id)
  const activeStartingPoint = useMemo(
    () => startingPoints.find(point => point.id === activeStartingPointId) ?? startingPoints[0],
    [activeStartingPointId],
  )

  return (
    <>
      <ServicesHero />

      <ServicesCapabilities />

      <ServicesDirectory />

      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="w-full px-4 sm:px-8 lg:px-12.5">
          <Reveal className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest text-primary"
                style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.15em' }}
              >
                Find Your Starting Point
              </span>
              <h2
                className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-secondary md:text-4xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Start with the problem, then choose the right service mix
              </h2>
            </div>
            <p
              className="max-w-2xl text-base leading-relaxed text-secondary-light"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              You do not need to know the exact technical name. Pick the situation closest to your
              organisation, and we will help shape the right approach.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <StartingPointGuide
              activePoint={activeStartingPoint}
              activePointId={activeStartingPointId}
              byId={byId}
              onSelect={setActiveStartingPointId}
            />
          </Reveal>
        </div>
      </section>

    </>
  )
}

function Reveal({ children, className = '', delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`service-page-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function StartingPointGuide({ activePoint, activePointId, byId, onSelect }) {
  const matchedServices = activePoint.serviceIds.map(id => byId[id]).filter(Boolean)

  return (
    <div className="starting-point-guide">
      <div className="starting-point-list">
        {startingPoints.map((point, index) => {
          const Icon = point.icon
          const isActive = point.id === activePointId

          return (
            <div key={point.id} className="starting-point-item" style={{ '--sp-i': index }}>
              <button
                type="button"
                className={`starting-point-option ${isActive ? 'is-active' : ''}`}
                onClick={() => onSelect(point.id)}
                aria-expanded={isActive}
              >
                <span className="starting-point-option-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="starting-point-option-icon" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <span className="starting-point-option-text">
                  {point.title}
                </span>
              </button>

              {/* Mobile accordion: the answer renders under the active option */}
              {isActive && (
                <div className="starting-point-inline-panel">
                  <StartingPointPanel point={activePoint} services={matchedServices} />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Tablet/desktop: the answer renders beside or below the selector */}
      <div className="starting-point-side-panel">
        <StartingPointPanel key={activePoint.id} point={activePoint} services={matchedServices} />
      </div>
    </div>
  )
}

function StartingPointPanel({ point, services: matchedServices }) {
  const Icon = point.icon

  return (
    <div className="starting-point-panel">
      <div className="starting-point-panel-top">
        <span className="starting-point-panel-kicker">Recommended direction</span>
        <span className="starting-point-panel-icon" aria-hidden="true">
          <Icon size={22} />
        </span>
      </div>

      <h3>{point.title}</h3>
      <p>{point.text}</p>

      <div className="starting-point-panel-services">
        {matchedServices.map(service => (
          <a key={service.id} href={`#${service.id}`} className="service-chip service-chip-dark">
            {service.title}
          </a>
        ))}
      </div>

      <div className="starting-point-panel-action">
        <Button to="/contact" variant="primary">Talk to Us About This</Button>
      </div>
    </div>
  )
}
