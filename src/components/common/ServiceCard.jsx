import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ icon: Icon, title, category, description, outcomes, linkTo = '/services' }) {
  return (
    <div className="bg-white border border-gray-100 rounded-sm p-8 flex flex-col gap-4 hover:shadow-lg hover:border-accent/40 transition-all duration-300 group">
      <div className="w-14 h-14 flex items-center justify-center bg-accent/10 rounded-sm group-hover:bg-primary transition-colors duration-300">
        <Icon size={26} className="text-accent-dark group-hover:text-white transition-colors duration-300" />
      </div>
      {category && (
        <span
          className="text-xs font-semibold uppercase tracking-widest text-primary"
          style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.12em' }}
        >
          {category}
        </span>
      )}
      <h3
        className="text-lg font-bold text-secondary leading-snug"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h3>
      <p className="text-sm text-secondary-light leading-relaxed flex-1" style={{ fontFamily: 'var(--font-body)' }}>
        {description}
      </p>
      {outcomes && outcomes.length > 0 && (
        <ul className="space-y-2">
          {outcomes.map((outcome, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-accent-dark mt-0.5 shrink-0" />
              <span className="text-xs text-secondary-light leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                {outcome}
              </span>
            </li>
          ))}
        </ul>
      )}
      <Link
        to={linkTo}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent-dark hover:gap-3 transition-all duration-200"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        Learn more <ArrowRight size={15} />
      </Link>
    </div>
  )
}
