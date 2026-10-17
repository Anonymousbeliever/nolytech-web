import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    tag: 'Clearer workflows', org: 'Financial services organisation', who: 'Operations Team', role: 'Financial services', initials: 'OT', tone: 'violet',
    pre: 'Nolytech helped us turn scattered manual follow-ups into a ', hl: 'clearer digital workflow', post: ' that our team can actually manage every day.',
  },
  {
    tag: 'Business-first delivery', org: 'Growing business platform', who: 'Administration Lead', role: 'Growing business', initials: 'AL', tone: 'green',
    pre: 'The team ', hl: 'understood the business process first', post: ', then shaped the system around how our users, approvals and reports needed to work.',
  },
  {
    tag: 'Reliable support', org: 'Support and automation project', who: 'Internal Systems User', role: 'Support and automation', initials: 'IS', tone: 'blue',
    pre: 'What stood out was ', hl: 'the support after delivery', post: '. We had guidance, improvements and practical help as the team settled into the system.',
  },
  {
    tag: 'Better access', org: 'Member and client portal', who: 'Service Delivery Team', role: 'Member and client portal', initials: 'SD', tone: 'sand',
    pre: 'The solution gave our users an easier way to access information and helped our staff spend ', hl: 'less time moving between manual records', post: '.',
  },
]

const count = testimonials.length

// Position each card relative to the active one: centre, either side, or tucked away behind
function cardPlacement(offset) {
  if (offset === 0) {
    return { transform: 'translateX(-50%) translateZ(0) rotateY(0deg)', opacity: 1, zIndex: 3, side: false }
  }
  if (Math.abs(offset) === 1) {
    return {
      transform: `translateX(calc(-50% + ${offset * 96}%)) translateZ(-160px) rotateY(${-offset * 32}deg)`,
      opacity: 0.9,
      zIndex: 2,
      side: true,
    }
  }
  return { transform: 'translateX(-50%) translateZ(-420px) rotateY(0deg)', opacity: 0, zIndex: 1, side: true, hidden: true }
}

export default function HomeTestimonials() {
  const [active, setActive] = useState(0)
  const prev = () => setActive(i => (i + count - 1) % count)
  const next = () => setActive(i => (i + 1) % count)

  return (
    <section className="tc-section" aria-labelledby="tc-title">
      <div className="tc-inner">
        <div className="tc-head">
          <div className="tc-head-copy">
            <span className="tc-kicker">Client voices</span>
            <h2 id="tc-title" className="tc-title">What it’s like to work with us.</h2>
          </div>
          <div className="tc-arrows">
            <button type="button" className="tc-arrow" aria-label="Previous testimonial" onClick={prev}>
              <ArrowLeft size={22} strokeWidth={2} aria-hidden="true" />
            </button>
            <button type="button" className="tc-arrow" aria-label="Next testimonial" onClick={next}>
              <ArrowRight size={22} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="tc-stage" aria-live="polite">
          {testimonials.map((t, k) => {
            let offset = (k - active + count) % count
            if (offset > count / 2) offset -= count
            const place = cardPlacement(offset)
            const isActive = offset === 0

            return (
              <figure
                key={t.who}
                className={`tc-card is-${t.tone}${place.side ? ' tc-side' : ''}${isActive ? ' is-active' : ''}${place.hidden ? ' is-hidden' : ''}`}
                style={{ transform: place.transform, opacity: place.opacity, zIndex: place.zIndex }}
                onClick={isActive ? undefined : () => setActive(k)}
                aria-hidden={!isActive}
              >
                <div className="tc-card-top">
                  <div className="tc-card-meta">
                    <span className="tc-org">{t.org}</span>
                    <span className="tc-tag">{t.tag}</span>
                  </div>
                  <blockquote className="tc-quote">
                    “{t.pre}<span className="tc-highlight">{t.hl}</span>{t.post}”
                  </blockquote>
                </div>
                <figcaption className="tc-caption">
                  <span className="tc-rule" />
                  <span className="tc-person">
                    <span className="tc-avatar">{t.initials}</span>
                    <span className="tc-person-text">
                      <span className="tc-who">{t.who}</span>
                      <span className="tc-role">{t.role}</span>
                    </span>
                  </span>
                </figcaption>
              </figure>
            )
          })}
        </div>

        <div className="tc-foot">
          <span className="tc-counter">{`0${active + 1} / 0${count}`}</span>
          <div className="tc-dots">
            {testimonials.map((t, k) => (
              <button
                key={t.who}
                type="button"
                className="tc-dot-btn"
                aria-label={`Show testimonial ${k + 1}`}
                aria-current={k === active}
                onClick={() => setActive(k)}
              >
                <span className={`tc-dot${k === active ? ' is-active' : ''}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
