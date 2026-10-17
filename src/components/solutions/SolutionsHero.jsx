import { Link } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'

export default function SolutionsHero() {
  return (
    <section className="sx-section" aria-labelledby="sx-title">
      <div className="sx-inner">
        <nav aria-label="Breadcrumb" className="sx-crumbs sx-u1">
          <Link to="/" className="sx-crumb">Home</Link>
          <span aria-hidden="true" className="sx-crumb-sep">/</span>
          <span aria-current="page" className="sx-crumb-current">Solutions</span>
        </nav>

        <div className="sx-row">
          <h1 id="sx-title" className="sx-title sx-u2">
            <span>Start from a working platform.</span>
            <span className="sx-title-accent">Make it fully yours.</span>
          </h1>
          <div className="sx-side sx-u3">
            <p className="sx-lead">
              Ready-built solutions for SACCOs, growing businesses and support teams, adapted to how
              your organisation works.
            </p>
            <div className="sx-actions">
              <a href="#solution-proof" className="sx-btn sx-btn-primary">
                Explore the solutions
                <ArrowDown size={15} strokeWidth={2} aria-hidden="true" />
              </a>
              <Link to="/contact" className="sx-btn sx-btn-ghost">Start a project</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="sx-stage">
        <figure className="sx-shot sx-shot-a">
          <img
            src="/images/solutions/hero-sacco-360.webp"
            alt="SACCO 360 digital banking dashboard on web and mobile"
            width="1360"
            height="1020"
            fetchPriority="high"
          />
        </figure>
        <figure className="sx-shot sx-shot-b">
          <img
            src="/images/solutions/hero-business-erp.webp"
            alt="Nolytech Business ERP dashboard"
            width="1360"
            height="1020"
          />
        </figure>
      </div>
    </section>
  )
}
