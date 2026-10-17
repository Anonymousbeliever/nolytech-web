import { Link } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="ah-section" aria-labelledby="ah-title">
      <figure className="ah-img">
        <img
          src="/images/about/about-hero.webp"
          alt="Nolytech team planning a system on a glass wall"
          width="885"
          height="660"
          fetchPriority="high"
        />
      </figure>

      <div className="ah-copy-wrap">
        <div className="ah-copy">
          <nav aria-label="Breadcrumb" className="ah-crumbs ah-u1">
            <Link to="/" className="ah-crumb">Home</Link>
            <span aria-hidden="true" className="ah-crumb-sep">/</span>
            <span aria-current="page" className="ah-crumb-current">About us</span>
          </nav>

          <h1 id="ah-title" className="ah-title">
            <span className="ah-line ah-l1">Practical technology</span>
            <span className="ah-line ah-l2">for <em>real operations.</em></span>
          </h1>

          <p className="ah-lead ah-u3">
            A Kenyan technology company helping organisations replace scattered manual work with
            dependable software, automation and infrastructure.
          </p>

          <a href="#story" className="ah-story ah-u4">
            Our story
            <span className="ah-circ" aria-hidden="true">
              <ArrowDown size={16} strokeWidth={2} />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
