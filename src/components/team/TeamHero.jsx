import { Link } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'
import { team } from '../../data/team.jsx'

const founder = team.find(member => member.featured) ?? team[0]
const others = team.filter(member => member !== founder)
// Founder in the middle, the rest fanned out either side
const cluster = [others[0], others[1], founder, others[3], others[2]].filter(Boolean)

export default function TeamHero() {
  return (
    <section className="tmh-section" aria-labelledby="tmh-title">
      <div className="tmh-inner">
        <div className="tmh-copy">
          <nav aria-label="Breadcrumb" className="tmh-crumbs tm-u1">
            <Link to="/" className="tmh-crumb">Home</Link>
            <span aria-hidden="true" className="tmh-crumb-sep">/</span>
            <span aria-current="page" className="tmh-crumb-current">Team</span>
          </nav>
          <h1 id="tmh-title" className="tmh-title tm-u2">
            The people behind <em>Nolytech.</em>
          </h1>
          <p className="tmh-lead tm-u3">
            A focused team building practical digital systems for organisations that need clarity,
            control and reliable delivery.
          </p>
          <a href="#team-members" className="tmh-go tm-u4">
            Meet the team
            <span className="tmh-circ" aria-hidden="true">
              <ArrowDown size={16} strokeWidth={2} />
            </span>
          </a>
        </div>

        <div className="tmh-visual">
          <div className="tmh-avatars">
            {cluster.map((member, index) => {
              const isFounder = member === founder
              const order = Math.abs(index - Math.floor(cluster.length / 2))
              return (
                <Avatar
                  key={member.id}
                  member={member}
                  className={`tmh-av${isFounder ? ' is-founder' : ''}`}
                  style={{ zIndex: 3 - order, '--pop-delay': `${0.45 + order * 0.15}s` }}
                />
              )
            })}
          </div>
          <span className="tmh-cap">Involved from the first conversation through long-term support.</span>
        </div>
      </div>
    </section>
  )
}

export function Avatar({ member, className = '', style, lazy = false }) {
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        className={className}
        style={style}
        loading={lazy ? 'lazy' : undefined}
        width="400"
        height="400"
      />
    )
  }
  return (
    <span className={`${className} tm-initials`} style={{ ...style, background: member.gradient }} role="img" aria-label={member.name}>
      {member.initials}
    </span>
  )
}
