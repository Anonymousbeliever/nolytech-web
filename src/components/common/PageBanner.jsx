import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageBanner({ title, breadcrumb = [] }) {
  return (
    <section
      className="relative flex items-center"
      style={{
        backgroundImage: 'url(/images/banner/bnr-1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 280,
        paddingTop: 90,
      }}
    >
      <div className="absolute inset-0 bg-secondary/80" />
      <div className="page-banner-content relative z-10 w-full px-4 sm:px-8 lg:px-[50px]">
        <h1
          className="text-3xl md:text-4xl font-bold text-white mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h1>
        {breadcrumb.length > 0 && (
          <nav className="flex items-center gap-1.5 text-sm text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={13} className="text-white/40" />
                {i === breadcrumb.length - 1 ? (
                  <span className="text-white">{crumb.label}</span>
                ) : (
                  <Link to={crumb.to} className="hover:text-white transition-colors">{crumb.label}</Link>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  )
}
