import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CodeXml, Database, Globe, MessageCircleMore, Network } from 'lucide-react'
import { services } from '../../data/services.jsx'

const titleOf = Object.fromEntries(services.map(service => [service.id, service.title]))

// Each situation opens the contact form with its closest service preselected
const situations = [
  { icon: CodeXml, title: 'Automate manual work', text: 'For repeated approvals, follow-ups and spreadsheets that slow daily work.', serviceId: 'custom-software' },
  { icon: Database, title: 'Run the business in one system', text: 'Finance, inventory, procurement, HR and reporting in one ERP-style platform.', serviceId: 'erp-enterprise-systems' },
  { icon: MessageCircleMore, title: 'Answer people faster', text: 'AI, chatbots and WhatsApp that handle routine questions for customers and members.', serviceId: 'chatbots-whatsapp' },
  { icon: Globe, title: 'Be easy to reach online', text: 'A website, client portal or mobile app that people can actually use.', serviceId: 'website-client-portals' },
  { icon: Network, title: 'Keep systems running', text: 'Reliable cloud, networks and data, with a clear technology plan.', serviceId: 'cloud-server-infrastructure' },
]

export default function ServicesStartingPoint() {
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
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className={`sp-section${isOn ? ' is-on' : ''}`} aria-labelledby="sp-title">
      <div className="sp-inner">
        <div className="sp-head">
          <div className="sp-head-copy">
            <span className="sp-kicker sp-r" style={{ '--d': '0s' }}>Find your starting point</span>
            <h2 id="sp-title" className="sp-title sp-r" style={{ '--d': '.06s' }}>
              Start with the problem, then choose the right <em>service mix.</em>
            </h2>
          </div>
          <p className="sp-lead sp-r" style={{ '--d': '.1s' }}>
            You don’t need to know the technical name. Pick the situation closest to yours and we’ll
            help shape the right approach.
          </p>
        </div>

        <div className="sp-grid">
          {situations.map(({ icon: Icon, title, text, serviceId }, index) => (
            <Link
              key={title}
              to={`/contact?service=${encodeURIComponent(titleOf[serviceId])}`}
              className="sp-card sp-r"
              style={{ '--d': `${(0.15 + index * 0.07).toFixed(2)}s` }}
            >
              <span className="sp-bar" aria-hidden="true" />
              <div className="sp-card-top">
                <span className="sp-num">{String(index + 1).padStart(2, '0')}</span>
                <Icon size={20} strokeWidth={1.7} className="sp-ic" aria-hidden="true" />
              </div>
              <div className="sp-card-body">
                <h3 className="sp-card-title">{title}</h3>
                <p className="sp-card-text">{text}</p>
              </div>
              <span className="sp-go">
                Start here
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
