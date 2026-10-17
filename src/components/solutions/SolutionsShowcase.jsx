import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'

const platforms = [
  {
    id: 'sacco-digital-banking',
    product: 'SACCO 360',
    sector: 'Financial cooperatives',
    title: 'SACCO Digital Banking & Member Platforms',
    image: '/images/solutions/hero-sacco-360.webp',
    alt: 'SACCO 360 digital banking on web and mobile',
    text: 'Digital platforms that help SACCOs improve member service, loan access, savings visibility, communication and administrative control.',
    modules: ['Member profiles', 'Loan applications and tracking', 'Savings and deposits'],
    outcome: 'Helps SACCOs digitise member services, reduce manual office processes and give members easier access to financial information.',
    proof: ['Member self-service app flows', 'Loan and savings dashboards'],
  },
  {
    id: 'helpdesk-ticketing',
    product: 'NolyDesk Helpdesk',
    sector: 'Internal operations',
    title: 'Helpdesk & Ticketing Systems',
    image: '/images/solutions/nolydesk-helpdesk.webp',
    alt: 'NolyDesk helpdesk ticketing dashboard and mobile app',
    text: 'Structured support systems that help organisations manage requests, assignments, escalations, service teams and resolution history.',
    modules: ['Ticket creation', 'Staff assignment', 'Priority and status tracking'],
    outcome: 'Helps teams stop losing issues in calls, chats and informal follow-ups by creating a clear support workflow.',
    proof: ['Ticket assignment flows', 'Status tracking'],
  },
  {
    id: 'business-erp-platforms',
    product: 'Business ERP',
    sector: 'Growing businesses',
    title: 'Business Management & ERP-Style Platforms',
    image: '/images/solutions/hero-business-erp.webp',
    alt: 'Nolytech Business ERP dashboard',
    text: 'Custom business platforms that bring key operations such as inventory, sales, HR, users, approvals, reports and customer records into one system.',
    modules: ['Inventory and sales', 'HR and users', 'Approvals and reports'],
    outcome: 'Helps growing businesses replace scattered spreadsheets and tools with one system for daily operations and reporting.',
    proof: ['Approval workflows', 'Live business dashboards'],
  },
  {
    id: 'ai-chatbot-solutions',
    product: 'NolyDesk AI',
    sector: 'Customer service and operations',
    title: 'AI Automation & Chatbot Solutions',
    image: '/images/solutions/nolydesk-ai.webp',
    alt: 'NolyDesk AI chatbot interface',
    text: 'AI assistants and automated workflows that answer common questions, route requests and connect WhatsApp to your business systems.',
    modules: ['AI assistant', 'Automation flows', 'Knowledge base'],
    outcome: 'Helps teams answer routine questions instantly and hand conversations over to a person when it matters.',
    proof: ['Human handoff', 'WhatsApp integration'],
  },
  {
    id: 'mobidachi',
    product: 'Mobidachi',
    sector: 'Enterprise IT and device fleets',
    title: 'Mobidachi Android Device Management',
    image: '/images/solutions/mobidachi.webp',
    alt: 'Mobidachi dashboard on a laptop and smartphone, showing device status, activity and policies for an Android fleet',
    text: 'An enterprise Android device management platform that helps businesses secure, monitor and manage their device fleets from one centralised console. Built around Android Enterprise, it simplifies enrollment, app management, security policies and fleet visibility.',
    modules: ['Device enrollment', 'Application management', 'Security policies'],
    outcome: 'Lets IT teams manage company-owned Android devices across locations and departments from one dashboard, instead of configuring each device individually.',
    proof: ['Centralised Android fleet management', 'Enterprise security and policy controls'],
    website: 'https://mobidachi.com/',
  },
]

const last = platforms.length - 1

export default function SolutionsShowcase() {
  const [active, setActive] = useState(0)
  const blockRefs = useRef([])
  const imageRefs = useRef([])

  // As each entry passes the middle of the screen, its screenshot crossfades in on the sticky
  // panel and the entry brightens. Styles are written to the DOM per frame; React only hears
  // about the active index, which changes four times at most.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 961px)')
    let frame = null

    const apply = pos => {
      platforms.forEach((_, k) => {
        const o = Math.max(0, Math.min(1, (0.5 - Math.abs(pos - k)) / 0.24 + 0.5))
        const e = o * o * (3 - 2 * o)
        const img = imageRefs.current[k]
        const block = blockRefs.current[k]
        if (img) {
          img.style.opacity = e.toFixed(3)
          img.style.transform = `scale(${(1 + (1 - e) * 0.02).toFixed(4)})`
        }
        if (block) block.style.opacity = desktop.matches ? (0.35 + 0.65 * e).toFixed(3) : ''
      })
      setActive(Math.round(pos))
    }

    const measure = () => {
      frame = null
      const mid = window.innerHeight * 0.5
      const rects = blockRefs.current.map(el => el?.getBoundingClientRect())
      let pos = 0
      if (rects[last] && mid > rects[last].bottom) pos = last
      else {
        for (let k = 0; k <= last; k++) {
          const r = rects[k]
          if (r && mid >= r.top && mid <= r.bottom) {
            pos = k + (mid - r.top) / Math.max(1, r.height) - 0.5
            break
          }
        }
      }
      apply(Math.max(0, Math.min(last, pos)))
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

  return (
    <section id="solution-proof" className="slx-section" aria-labelledby="slx-title">
      <div className="slx-inner">
        <div className="slx-head">
          <div className="slx-head-copy">
            <span className="slx-kicker">Our solutions</span>
            <h2 id="slx-title" className="slx-title">
              Each solution works as part of <em>one connected system.</em>
            </h2>
          </div>
          <p className="slx-lead">
            Scroll through each solution to see who it’s for, the modules it includes and the
            outcome it’s designed to create.
          </p>
        </div>

        <div className="slx-body">
          <div className="slx-stick" aria-hidden="true">
            <div className="slx-media">
              {platforms.map((p, k) => (
                <img
                  key={p.id}
                  ref={el => { imageRefs.current[k] = el }}
                  src={p.image}
                  alt=""
                  loading="lazy"
                  style={{ opacity: k === 0 ? 1 : 0 }}
                />
              ))}
            </div>
            <div className="slx-caption">
              <span className="slx-caption-name">{platforms[active].product}</span>
              <div className="slx-dots">
                {platforms.map((p, k) => (
                  <span key={p.id} className={`slx-dot${k === active ? ' is-active' : ''}`} />
                ))}
              </div>
            </div>
          </div>

          <div className="slx-list">
            {platforms.map((p, k) => (
              <article
                key={p.id}
                id={p.id}
                ref={el => { blockRefs.current[k] = el }}
                className="slx-block"
              >
                <figure className="slx-inline">
                  <img src={p.image} alt={p.alt} loading="lazy" width="1360" height="1020" />
                </figure>
                <div className="slx-meta">
                  <span className="slx-num">{String(k + 1).padStart(2, '0')}</span>
                  <span className="slx-sector">{p.sector}</span>
                </div>
                <h3 className="slx-block-title">{p.title}</h3>
                <p className="slx-text">{p.text}</p>
                <ul className="slx-modules" aria-label="Modules">
                  {p.modules.map(m => <li key={m}>{m}</li>)}
                </ul>
                <div className="slx-outcome">
                  <div className="slx-outcome-copy">
                    <span className="slx-outcome-label">Outcome</span>
                    <span className="slx-outcome-text">{p.outcome}</span>
                  </div>
                  <ul className="slx-proof">
                    {p.proof.map(item => (
                      <li key={item}>
                        <Check size={16} strokeWidth={2.2} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {p.website ? (
                  <a href={p.website} target="_blank" rel="noreferrer" className="slx-link">
                    Visit {p.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
                  </a>
                ) : (
                  <Link to={`/contact?service=${encodeURIComponent(p.title)}`} className="slx-link">
                    Ask about {p.product}
                    <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
