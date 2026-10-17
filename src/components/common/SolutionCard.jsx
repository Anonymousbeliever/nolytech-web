export default function SolutionCard({ icon: Icon, title, description }) {
  return (
    <div className="flex gap-5 p-6 bg-white border border-gray-100 rounded-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 group">
      <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-sm shrink-0 group-hover:bg-primary transition-colors duration-300">
        <Icon size={22} className="text-accent-dark group-hover:text-white transition-colors duration-300" />
      </div>
      <div>
        <h3
          className="text-base font-bold text-secondary mb-2 leading-snug"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h3>
        <p className="text-sm text-secondary-light leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
          {description}
        </p>
      </div>
    </div>
  )
}
