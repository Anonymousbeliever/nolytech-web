import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const items = [
  {
    id: 'sacco-digital-banking',
    label: 'SACCO platforms',
    title: 'SACCO Digital Banking & Member Platforms',
    text: 'Members check savings, loans and shares on web and mobile, while your team manages accounts and payments in one place.',
    preview: 'sacco',
    facts: [
      ['SACCO 360', 'Our ready-built member banking platform'],
      ['Web & mobile', 'Member self-service on any device'],
    ],
  },
  {
    id: 'helpdesk-ticketing',
    label: 'Support operations',
    title: 'Helpdesk & Ticketing Systems',
    text: 'Every request becomes a ticket that’s assigned, tracked and resolved, so nothing gets lost between calls, email and chat.',
    preview: 'helpdesk',
    facts: [
      ['NolyDesk', 'Helpdesk and ticketing platform'],
      ['SLA tracking', 'Agent workflows and performance reports'],
    ],
  },
  {
    id: 'business-erp-platforms',
    label: 'Business operations',
    title: 'Business Management & ERP Platforms',
    text: 'Sales, purchasing, inventory, finance and HR in one system, with dashboards that show how the business is doing.',
    preview: 'erp',
    facts: [
      ['Business ERP', 'One system for daily operations'],
      ['All-in-one', 'Sales, inventory, finance and HR'],
    ],
  },
  {
    id: 'ai-chatbot-solutions',
    label: 'AI automation',
    title: 'AI Automation & Chatbots',
    text: 'Answer common questions instantly on your website and WhatsApp, and hand over to a person when it matters.',
    preview: 'ai',
    facts: [
      ['NolyDesk AI', 'AI assistant and workflow automation'],
      ['Web & WhatsApp', 'Instant answers with human handoff'],
    ],
  },
]

export default function HomeSolutions() {
  return (
    <section className="sl-section" aria-labelledby="sl-title">
      <div className="sl-frame">
        <Reveal className="sl-header">
          <div className="sl-header-copy">
            <span className="sl-pill">Our solutions</span>
            <h2 id="sl-title" className="sl-title">Ready-built platforms, adapted to your organisation</h2>
          </div>
          <Link to="/solutions" className="sl-all">
            View all solutions
            <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="sl-list">
          {items.map(item => (
            <Reveal key={item.id} as="article" className="sl-card">
              <div className="sl-card-copy">
                <span className="sl-label">{item.label}</span>
                <div className="sl-card-body">
                  <h3 className="sl-card-title">{item.title}</h3>
                  <p className="sl-card-text">{item.text}</p>
                  <Link to={`/solutions#${item.id}`} className="sl-more">
                    Learn more
                    <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="sl-preview" aria-hidden="true">
                <div className="sl-preview-inner">
                  <Preview kind={item.preview} />
                </div>
              </div>

              <div className="sl-facts">
                {item.facts.map(([value, label]) => (
                  <div key={value} className="sl-fact">
                    <span className="sl-fact-value">{value}</span>
                    <span className="sl-fact-label">{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Illustrative product screens — sample data only */
function Preview({ kind }) {
  if (kind === 'sacco') {
    return (
      <PreviewCard title="SACCO 360">
        <div className="sl-ui-figure">
          <span className="sl-ui-muted">Total balance</span>
          <span className="sl-ui-big">KES 245,680.00</span>
        </div>
        <Row label="My savings" value="KES 185,450" />
        <Row label="My loans" value="KES 120,000" />
        <Row label="Share capital" value="KES 45,000" />
      </PreviewCard>
    )
  }

  if (kind === 'helpdesk') {
    return (
      <PreviewCard title="NolyDesk Helpdesk">
        <div className="sl-ui-figure sl-ui-figure-row">
          {[['New', '32'], ['In progress', '18'], ['Resolved', '64']].map(([label, value]) => (
            <div key={label} className="sl-ui-figure">
              <span className="sl-ui-muted">{label}</span>
              <span className="sl-ui-big">{value}</span>
            </div>
          ))}
        </div>
        <Row label="Login not working" value={<span className="sl-ui-badge is-amber">In progress</span>} />
        <Row label="Payment failed" value={<span className="sl-ui-badge is-violet">Open</span>} />
      </PreviewCard>
    )
  }

  if (kind === 'erp') {
    return (
      <PreviewCard title="Business ERP">
        <div className="sl-ui-figure">
          <span className="sl-ui-muted">Total revenue</span>
          <span className="sl-ui-big">$250,000</span>
        </div>
        <svg viewBox="0 0 300 70" preserveAspectRatio="none" className="sl-ui-chart">
          <polyline
            points="0,58 25,50 50,54 75,38 100,44 125,30 150,40 175,26 200,34 225,18 250,26 275,12 300,8"
            fill="none"
            stroke="#5B3DF5"
            strokeWidth="2"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <Row label="Total orders" value="1,540" />
      </PreviewCard>
    )
  }

  return (
    <PreviewCard title="NolyDesk AI">
      <div className="sl-ui-chat">
        <div className="sl-ui-bubble is-user">I need help with resetting my password.</div>
        <div className="sl-ui-bubble is-bot">Sure! What email address is associated with your account?</div>
      </div>
    </PreviewCard>
  )
}

function PreviewCard({ title, children }) {
  return (
    <div className="sl-ui-card">
      <div className="sl-ui-title">{title}</div>
      <div className="sl-ui-body">{children}</div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="sl-ui-row">
      <span className="sl-ui-row-label">{label}</span>
      {typeof value === 'string' ? <span className="sl-ui-row-value">{value}</span> : value}
    </div>
  )
}

function Reveal({ as: Tag = 'div', className = '', children }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`sl-reveal${isVisible ? ' is-visible' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
