import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../../data/services.jsx'

// Short tile labels for the moving band, in the same order as the service directory
const tileLabels = {
  'custom-software': 'Custom software',
  'erp-enterprise-systems': 'ERP & enterprise systems',
  'ai-automation-copilot': 'AI automation',
  'chatbots-whatsapp': 'Chatbots & WhatsApp',
  'mobile-apps': 'Mobile apps',
  'website-client-portals': 'Websites & client portals',
  'database-data-management': 'Database & data',
  'cloud-server-infrastructure': 'Cloud & servers',
  'networking-connectivity': 'Networking',
  'it-consultancy-digital-transformation': 'IT consultancy',
}

const tiles = services.map(service => ({ id: service.id, icon: service.icon, label: tileLabels[service.id] ?? service.title }))

export default function ServicesHero() {
  return (
    <section className="sh-section" aria-labelledby="sh-title">
      <div className="sh-inner">
        <nav aria-label="Breadcrumb" className="sh-crumbs sh-u1">
          <Link to="/" className="sh-crumb">Home</Link>
          <span aria-hidden="true" className="sh-crumb-sep">/</span>
          <span aria-current="page" className="sh-crumb-current">Services</span>
        </nav>

        <div className="sh-row">
          <h1 id="sh-title" className="sh-title sh-u2">Services built for practical business growth.</h1>
          <div className="sh-side sh-u3">
            <p className="sh-lead">
              Nolytech helps organisations plan, build, connect, and maintain the software and
              infrastructure they need to operate with confidence.
            </p>
            <div className="sh-actions">
              <Link to="/contact" className="sh-btn sh-btn-primary">
                Request a Quote
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </Link>
              <a href="#service-directory" className="sh-btn sh-btn-ghost">Explore Services</a>
            </div>
          </div>
        </div>
      </div>

      <div className="sh-band sh-u4" aria-label="What we work on">
        <div className="sh-track">
          {[0, 1].map(copy => (
            <ul key={copy} className="sh-set" aria-hidden={copy === 1 || undefined}>
              {tiles.map(({ id, icon: Icon, label }) => (
                <li key={id} className="sh-tile">
                  <span className="sh-tile-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <span className="sh-tile-label">{label}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
