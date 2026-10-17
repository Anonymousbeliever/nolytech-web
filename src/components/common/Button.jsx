import { Link } from 'react-router-dom'

export default function Button({ to, href, onClick, variant = 'primary', size = 'md', children, className = '' }) {
  const base = [
    'inline-flex items-center justify-center',
    'font-medium capitalize cursor-pointer nolytech-btn',
    'rounded-full',
    'select-none',
  ].join(' ')

  const sizes = {
    sm: 'text-sm px-5 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-base px-14 py-6',
  }

  const variants = {
    primary: 'bg-primary text-white hover:bg-accent hover:text-secondary shadow-sm hover:shadow',

    // White outline — for use over dark/hero backgrounds
    outline: 'border-2 border-white text-white bg-transparent hover:border-accent hover:bg-accent hover:text-secondary',

    // Primary outline — for use on light backgrounds
    'outline-dark': 'border-2 border-primary text-primary bg-transparent hover:border-accent hover:bg-accent hover:text-secondary',

    // Dark fill — secondary button
    secondary: 'bg-secondary text-white hover:bg-primary hover:text-white shadow-sm',
  }

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (to) return <Link to={to} className={cls} style={{ fontFamily: 'var(--font-body)' }}>{children}</Link>
  if (href) return <a href={href} className={cls} style={{ fontFamily: 'var(--font-body)' }}>{children}</a>
  return <button onClick={onClick} className={cls} style={{ fontFamily: 'var(--font-body)' }}>{children}</button>
}
