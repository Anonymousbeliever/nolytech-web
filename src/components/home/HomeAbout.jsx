import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const stats = {
  years: ['7+', 'Years of experience'],
  services: ['10', 'Core services'],
  projects: ['10+', 'Projects delivered'],
}

export default function HomeAbout() {
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
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className={`who-section${isOn ? ' is-on' : ''}`} aria-labelledby="who-title">
      <div className="who-inner">
        <div className="who-copy">
          <span className="who-kicker who-reveal who-d1">Who we are</span>
          <h2 id="who-title" className="who-title who-reveal who-d2">
            A business technology partner for organisations ready to <em>operate smarter.</em>
          </h2>
          <p className="who-text who-reveal who-d3">
            Nolytech Limited is a Kenyan technology solutions company helping businesses,
            institutions, SACCOs, churches, and growing organisations move from manual operations
            to reliable digital systems.
          </p>
          <p className="who-text who-reveal who-d4">
            We design and build custom software, ERP-style business platforms, mobile and web
            applications, AI automation, chatbots, WhatsApp integrations, and infrastructure that
            help teams work faster, serve users better, and manage operations with more clarity.
          </p>
          <Link to="/about" className="who-link who-reveal who-d5">
            Learn more about us
            <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>

        <div className="who-visual">
          <div className="who-grid">
            <span className="who-line who-line-h" style={{ left: -24, right: '30%', top: 64 }} aria-hidden="true" />
            <span className="who-line who-line-v" style={{ left: '22%', top: -32, bottom: '46%' }} aria-hidden="true" />
            <span className="who-line who-line-h" style={{ left: '40%', right: -24, top: '58%' }} aria-hidden="true" />
            <span className="who-line who-line-v" style={{ left: '75%', top: '50%', bottom: -40 }} aria-hidden="true" />

            <figure className="who-photo who-p1 who-reveal who-d3">
              <img src="/images/optimized/hero.webp" alt="Nolytech team planning a digital system together" loading="lazy" />
            </figure>
            <Stat className="who-s1 who-d4" stat={stats.years} />
            <Stat className="who-s2 who-d5" stat={stats.services} />
            <figure className="who-photo who-p2 who-reveal who-d5">
              <img src="/images/optimized/our-story.webp" alt="Mapping business processes into a connected digital system" loading="lazy" />
            </figure>
            <Stat className="who-s3 who-d6" stat={stats.projects} />
            <figure className="who-photo who-p3 who-reveal who-d7">
              <img src="/images/optimized/p1.webp" alt="" loading="lazy" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ className, stat: [value, label] }) {
  return (
    <div className={`who-stat who-reveal ${className}`}>
      <span className="who-stat-value">{value}</span>
      <span className="who-stat-label">{label}</span>
    </div>
  )
}
