import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, ChevronRight, Mail, MapPin, Phone } from 'lucide-react'

function LegalList({ items }) {
  return (
    <ul className="legal-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

function LegalSection({ section }) {
  const Icon = section.icon

  return (
    <article id={section.id} className="legal-section">
      <div className="legal-section-marker">
        <span>{section.number}</span>
        {Icon && <Icon size={19} strokeWidth={1.9} />}
      </div>

      <div className="legal-section-body">
        <h2>{section.title}</h2>
        <div className="legal-section-copy">
          {section.content.map((block, index) => {
            if (block.type === 'list') {
              return <LegalList key={index} items={block.items} />
            }

            return <p key={index}>{block.value}</p>
          })}
        </div>
      </div>
    </article>
  )
}

export default function LegalDocument({
  title,
  kicker,
  summary,
  lastUpdated,
  highlights,
  sections,
  relatedLink,
}) {
  return (
    <>
      <section className="legal-hero-section relative overflow-hidden text-white">
        <div className="legal-hero-bg" aria-hidden="true" />
        <div className="site-container relative z-10">
          <nav className="legal-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>{title}</span>
          </nav>

          <div className="legal-hero-grid">
            <div className="legal-hero-copy">
              <span className="legal-kicker">{kicker}</span>
              <h1>{title}</h1>
              <p>{summary}</p>
            </div>

            <aside className="legal-hero-panel" aria-label={`${title} summary`}>
              <div className="legal-updated">
                <CalendarDays size={18} />
                <div>
                  <span>Last updated</span>
                  <strong>{lastUpdated}</strong>
                </div>
              </div>

              <div className="legal-highlight-list">
                {highlights.map((item) => (
                  <div key={item.label} className="legal-highlight-item">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="site-container">
          <div className="legal-layout">
            <aside className="legal-toc" aria-label={`${title} sections`}>
              <div className="legal-toc-card">
                <span>In this document</span>
                <nav>
                  {sections.map((section) => (
                    <a key={section.id} href={`#${section.id}`}>
                      <span>{section.number}</span>
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="legal-document">
              {sections.map((section) => (
                <LegalSection key={section.id} section={section} />
              ))}

              <div className="legal-contact-card">
                <div>
                  <span className="legal-kicker">Need help?</span>
                  <h2>Contact Nolytech</h2>
                  <p>
                    For questions about this document, reach us through the official contacts below.
                  </p>
                </div>

                <div className="legal-contact-links">
                  <a href="mailto:info@nolytech.co.ke">
                    <Mail size={17} />
                    info@nolytech.co.ke
                  </a>
                  <a href="tel:+254795112229">
                    <Phone size={17} />
                    +254 795 112 229
                  </a>
                  <span>
                    <MapPin size={17} />
                    Mombasa, Kenya
                  </span>
                </div>
              </div>

              {relatedLink && (
                <Link to={relatedLink.to} className="legal-related-link">
                  <span>{relatedLink.label}</span>
                  <ArrowRight size={18} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
