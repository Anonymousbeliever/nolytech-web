import { useEffect, useRef, useState } from 'react'
import StartHereCta from '../components/common/StartHereCta.jsx'
import TeamHero from '../components/team/TeamHero.jsx'
import TeamMembers from '../components/team/TeamMembers.jsx'

const principles = [
  {
    title: 'Practical thinking',
    text: 'We design around how your organisation actually operates, not around trends.',
  },
  {
    title: 'Clear communication',
    text: 'Plain language, honest timelines, and updates you never have to chase.',
  },
  {
    title: 'Reliable delivery',
    text: 'Realistic commitments, careful testing, and systems built to keep working.',
  },
  {
    title: 'Support after launch',
    text: 'We stay involved after go-live with training, maintenance, and improvements.',
  },
]

export default function Team() {
  return (
    <>
      <TeamHero />

      <TeamMembers />

      {/* ── Working principles ─────────────────────── */}
      <section className="team-principles-section">
        <div className="site-container">
          <Reveal>
            <h2 className="team-principles-heading">How we work</h2>
          </Reveal>
          <div className="team-principles-grid">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} className="team-principle" delay={index * 70}>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StartHereCta />
    </>
  )
}

/* ── Scroll reveal ────────────────────────────────────── */
function Reveal({ children, className = '', delay = 0 }) {
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
      { threshold: 0.1, rootMargin: '0px 0px 8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`team-page-reveal${isVisible ? ' is-visible' : ''} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
