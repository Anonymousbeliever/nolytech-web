import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

const reasons = [
  ['Business-first approach', 'We map how your teams, approvals and reports work before we build.'],
  ['One team, end to end', 'Software, automation, cloud and networks handled by the same people.'],
  ['Ready-built platforms', 'Start faster with SACCO 360, Business ERP and NolyDesk.'],
  ['Practical AI and automation', 'AI where it removes real manual work, not as a gimmick.'],
  ['Local business understanding', 'We understand the operating realities of Kenyan businesses, SACCOs, institutions, churches and growing teams.'],
  ['Honest scoping', 'Clear about the right approach, the likely scope and what it will take.'],
  ['Support after launch', 'Guidance and improvements as your team settles into the system.'],
]

export default function HomeWhy() {
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
    <section ref={ref} className={`wy-section${isOn ? ' is-on' : ''}`} aria-labelledby="wy-title">
      <div className="wy-inner">
        <div className="wy-intro">
          <span className="wy-kicker wy-r" style={{ '--d': '0s' }}>Why Nolytech</span>
          <h2 id="wy-title" className="wy-title wy-r" style={{ '--d': '.08s' }}>
            Built for organisations that need more than <em>just technology.</em>
          </h2>
          <p className="wy-lead wy-r" style={{ '--d': '.14s' }}>
            We combine software engineering, automation, AI, infrastructure and business process
            thinking to build systems that solve real operational problems and stay useful after launch.
          </p>
          <Link to="/contact" className="wy-go wy-r" style={{ '--d': '.2s' }}>
            Get in touch
            <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>

        <ul className="wy-list">
          {reasons.map(([title, text], index) => (
            <li key={title} className="wy-item wy-r" style={{ '--d': `${(0.2 + index * 0.06).toFixed(2)}s` }}>
              <span className="wy-check" aria-hidden="true">
                <Check size={14} strokeWidth={2.6} />
              </span>
              <span className="wy-item-copy">
                <span className="wy-item-title">{title}</span>
                <span className="wy-item-text">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
