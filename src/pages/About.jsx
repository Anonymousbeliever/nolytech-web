import { useEffect, useRef, useState } from 'react'
import {
  CheckCircle2,
  Eye,
  Lightbulb,
  MessageCircle,
  Puzzle,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react'
import AboutHero from '../components/about/AboutHero.jsx'
import StartHereCta from '../components/common/StartHereCta.jsx'

const values = [
  {
    title: 'Practicality',
    text: 'We build around real organisational needs, not unnecessary complexity or features that do not support daily work.',
    icon: Puzzle,
    summaryTitle: 'Purpose-led',
    summaryText: 'We start with real needs.',
    summaryIcon: Target,
  },
  {
    title: 'Clarity',
    text: 'We believe good technology should make operations easier to understand, manage, and improve.',
    icon: Lightbulb,
    summaryTitle: 'Clear & open',
    summaryText: 'We communicate with honesty and clarity.',
    summaryIcon: MessageCircle,
  },
  {
    title: 'Reliability',
    text: 'We design systems with stability, security, and long-term use in mind from the beginning.',
    icon: ShieldCheck,
    summaryTitle: 'Built to last',
    summaryText: 'We engineer for stability and long-term impact.',
    summaryIcon: ShieldCheck,
  },
  {
    title: 'Accountability',
    text: 'We communicate clearly, make realistic commitments, and treat every project as a serious business responsibility.',
    icon: Users,
    summaryTitle: 'Own it',
    summaryText: 'We take responsibility at every step.',
    summaryIcon: CheckCircle2,
  },
]

const valueSummaryItems = [values[0], values[2], values[1], values[3]]

export default function About() {
  return (
    <>

      <AboutHero />

      <section id="story" className="about-story-editorial bg-white">
        <span className="about-story-bg-word" aria-hidden="true">01</span>

        <div className="site-container">
          <div className="about-story-editorial-inner">
            <Reveal direction="left">
              <div className="about-story-copy">
                <span className="about-story-label">EST. 2024</span>
                <h2 className="about-story-title">Our Story</h2>
                <p>
                  Nolytech began with a simple belief: growing organisations need practical
                  digital systems that match how their teams actually work.
                </p>
                <p>
                  We build software, automation, infrastructure, and support around real
                  operations, not generic templates.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="about-story-image-wrap">
                <img
                  src="/images/optimized/our-story.webp"
                  alt="Nolytech team shaping business processes into digital systems"
                  className="about-image-drift"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bg-light py-16 lg:py-20">
        <div className="absolute inset-y-0 right-0 hidden w-[32%] bg-white lg:block" />
        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-[50px]">
          <Reveal className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <StatementBlock
              icon={Target}
              label="Mission"
              title="To deliver practical and dependable technology that improves how organisations operate."
              dark
            />
            <StatementBlock
              icon={Eye}
              label="Vision"
              title="To make high-quality business technology more accessible to growing organisations."
            />
          </Reveal>
        </div>
      </section>

      <section className="about-values-roadmap-section bg-white py-24">
        <div className="w-full px-4 sm:px-8 lg:px-[50px]">
          <Reveal className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <span className="about-roadmap-kicker">What Guides Us</span>
              <h2 className="about-roadmap-title mt-4 font-bold text-secondary">
                A simple operating code
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-secondary-light">
              These are the standards behind our decisions, communication, and responsibility on
              every project.
            </p>
          </Reveal>

          <div className="about-values-roadmap" aria-label="Nolytech operating code roadmap">
            <svg
              className="about-values-road-svg"
              viewBox="0 0 1280 360"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="aboutRoadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6d4cf6" />
                  <stop offset="52%" stopColor="#6d4cf6" />
                  <stop offset="100%" stopColor="#25d6a2" />
                </linearGradient>
                <filter id="aboutRoadGlow" x="-20%" y="-60%" width="140%" height="220%">
                  <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#6d4cf6" floodOpacity="0.18" />
                  <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#25d6a2" floodOpacity="0.16" />
                </filter>
              </defs>
              <path
                className="about-road-shadow"
                d="M 34,310 C 95,305 155,280 205,265 C 255,250 410,150 475,150 C 540,150 700,265 810,275 C 920,285 1010,150 1060,150 C 1110,150 1190,180 1246,195"
              />
              <path
                className="about-road-main"
                d="M 34,310 C 95,305 155,280 205,265 C 255,250 410,150 475,150 C 540,150 700,265 810,275 C 920,285 1010,150 1060,150 C 1110,150 1190,180 1246,195"
              />
              <path
                className="about-road-dash"
                d="M 34,310 C 95,305 155,280 205,265 C 255,250 410,150 475,150 C 540,150 700,265 810,275 C 920,285 1010,150 1060,150 C 1110,150 1190,180 1246,195"
              />
              <circle className="about-road-endpoint" cx="34" cy="310" r="8" />
              <circle className="about-road-endpoint" cx="1246" cy="195" r="8" />
            </svg>

            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Reveal
                  key={value.title}
                  className={`about-roadmap-point about-roadmap-point-${index + 1}`}
                  delay={index * 90}
                >
                  <article className="about-roadmap-feature">
                    <span className="about-roadmap-icon" aria-hidden="true">
                      <Icon size={34} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3>{value.title}</h3>
                      <p>{value.text}</p>
                    </div>
                  </article>
                  <span className="about-roadmap-connector" aria-hidden="true" />
                  <span className="about-roadmap-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={120}>
            <div className="about-values-summary-strip">
              {valueSummaryItems.map((item) => {
                const SummaryIcon = item.summaryIcon
                return (
                  <div className="about-values-summary-item" key={item.summaryTitle}>
                    <span className="about-values-summary-icon" aria-hidden="true">
                      <SummaryIcon size={24} strokeWidth={1.9} />
                    </span>
                    <div>
                      <h3>{item.summaryTitle}</h3>
                      <p>{item.summaryText}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>


      <StartHereCta />
    </>
  )
}

function StatementBlock({ icon: Icon, label, title, text, dark = false }) {
  return (
    <div
      className={`relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-lg border p-7 shadow-sm sm:p-8 lg:p-9 ${
        dark
          ? 'border-secondary bg-secondary text-white'
          : 'border-gray-200 bg-white text-secondary'
      }`}
    >
      <div className="flex items-center justify-between gap-5">
        <span
          className={`text-xs font-bold uppercase tracking-widest ${dark ? 'text-accent' : 'text-primary'}`}
          style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.14em' }}
        >
          {label}
        </span>
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-sm ${dark ? 'bg-white/10 text-accent' : 'bg-accent/10 text-accent-dark'}`}>
          <Icon size={23} />
        </div>
      </div>

      <p
        className={`mt-8 max-w-2xl text-xl font-normal leading-snug sm:text-2xl ${
          dark ? 'text-white/88' : 'text-secondary/86'
        }`}
        style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic' }}
      >
        {title}
      </p>

      {text ? (
        <p className={`mt-5 text-base leading-relaxed ${dark ? 'text-white/66' : 'text-secondary-light'}`} style={{ fontFamily: 'var(--font-body)' }}>
          {text}
        </p>
      ) : null}
    </div>
  )
}

function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px 8% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`about-page-reveal about-page-reveal-${direction} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
