export default function SectionHeader({ label, title, subtitle, light = false, center = true, titleClassName = '' }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && (
        <span
          className={`section-kicker mb-3 ${
            light ? 'text-white/70' : 'text-primary'
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`display-section font-bold ${
          light ? 'text-white' : 'text-secondary'
        } ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`body-lead mt-5 max-w-2xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-white/70' : 'text-secondary-light'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
