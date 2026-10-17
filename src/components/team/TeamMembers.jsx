import { useEffect, useRef, useState } from 'react'
import { team } from '../../data/team.jsx'
import { Avatar } from './TeamHero.jsx'

const founder = team.find(member => member.featured) ?? team[0]
const members = team.filter(member => member !== founder)

export default function TeamMembers() {
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
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="team-members"
      className={`tmm-section${isOn ? ' is-on' : ''}`}
      aria-labelledby="tmm-title"
    >
      <div className="tmm-inner">
        <div className="tmm-head">
          <h2 id="tmm-title" className="tmm-title tm-r" style={{ '--d': '0s' }}>Who you’ll work with</h2>
          <p className="tmm-lead tm-r" style={{ '--d': '.08s' }}>
            Real people with clear roles, involved from the first conversation through long-term support.
          </p>
        </div>

        <div className="tmm-list">
          <article className="tmm-founder tm-r" style={{ '--d': '.18s' }}>
            <span className="tmm-photo tmm-photo-lg">
              <Avatar member={founder} lazy />
            </span>
            <div className="tmm-founder-copy">
              <span className="tmm-badge">Founder</span>
              <h3 className="tmm-founder-name">{founder.name}</h3>
              <span className="tmm-role">{founder.role}</span>
              <p className="tmm-founder-bio">{founder.bio}</p>
            </div>
          </article>

          <div className="tmm-grid">
            {members.map((member, index) => (
              <article
                key={member.id}
                className="tmm-member tm-r"
                style={{ '--d': `${(0.3 + index * 0.08).toFixed(2)}s` }}
              >
                <span className="tmm-photo">
                  <Avatar member={member} lazy />
                </span>
                <div className="tmm-member-head">
                  <h3 className="tmm-name">{member.name}</h3>
                  <span className="tmm-role tmm-role-sm">{member.role}</span>
                </div>
                <p className="tmm-bio">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
