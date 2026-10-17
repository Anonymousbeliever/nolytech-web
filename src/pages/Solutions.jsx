import { useEffect, useRef, useState } from 'react'
import { ClipboardCheck, FileCheck2, Workflow } from 'lucide-react'
import Button from '../components/common/Button.jsx'
import SolutionsHero from '../components/solutions/SolutionsHero.jsx'
import SolutionsShowcase from '../components/solutions/SolutionsShowcase.jsx'

const verificationItems = [
  {
    title: 'Workflow evidence',
    text: 'Screens, flows, and modules are organised around the work users actually need to complete.',
  },
  {
    title: 'Operational fit',
    text: 'Roles, permissions, reports, and records are reviewed against how the organisation runs.',
  },
  {
    title: 'Handover clarity',
    text: 'The final solution includes usable documentation, support notes, and next-step recommendations.',
  },
]

const readinessQuestions = [
  'What workflow are you trying to digitise or improve?',
  'Who will use the solution every day?',
  'Which records, reports, or approvals matter most?',
  'What proof would make the solution trustworthy to your team?',
]

export default function Solutions() {
  return (
    <>
      <SolutionsHero />

      <SolutionsShowcase />

      <section className="solution-assurance-section relative overflow-hidden bg-white py-24">
        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12.5">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <Reveal className="solution-assurance-intro" direction="left">
              <span
                className="text-xs font-bold uppercase tracking-widest text-primary"
                style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.15em' }}
              >
                Verification Layer
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-secondary md:text-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
                What we make clear before a solution is trusted
              </h2>
              <p className="mt-6 text-base leading-relaxed text-secondary-light" style={{ fontFamily: 'var(--font-body)' }}>
                A good system is not only built. It is explained, reviewed, handed over, and
                understood by the people who will rely on it.
              </p>

              <div className="solution-assurance-signature">
                <span>Documented</span>
                <span>Reviewed</span>
                <span>Ready</span>
              </div>
            </Reveal>

            <div className="solution-assurance-board">
              {verificationItems.map((item, index) => {
                const Icon = [Workflow, ClipboardCheck, FileCheck2][index]

                return (
                <Reveal
                  key={item.title}
                  className="solution-assurance-row"
                  delay={index * 120}
                  direction="right"
                >
                  <span className="solution-assurance-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="solution-assurance-icon">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-24">
        <div className="w-full px-4 sm:px-8 lg:px-12.5">
          <Reveal className="grid grid-cols-1 overflow-hidden rounded-sm border border-gray-200 bg-white lg:grid-cols-[0.72fr_1.28fr]">
            <div className="relative bg-secondary p-8 text-white sm:p-10">
              <span
                className="text-xs font-bold uppercase tracking-widest text-accent"
                style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.15em' }}
              >
                Solution Readiness
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>
                Questions that shape a better build
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/68" style={{ fontFamily: 'var(--font-body)' }}>
                Before we recommend a platform, we clarify the evidence your team needs to see.
              </p>
              <div
                className="absolute bottom-0 right-0 h-24 w-40"
                style={{ background: 'linear-gradient(135deg, rgba(109, 76, 246, 0.26), rgba(37, 214, 162, 0.2))', clipPath: 'polygon(38% 0, 100% 0, 100% 100%, 0 100%)' }}
              />
            </div>
            <div className="grid grid-cols-1 gap-px bg-gray-200 md:grid-cols-2">
              {readinessQuestions.map((question, index) => (
                <div key={question} className="bg-white p-7">
                  <span className="text-sm font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-5 text-lg font-semibold leading-snug text-secondary" style={{ fontFamily: 'var(--font-heading)' }}>
                    {question}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 bg-white p-7 md:col-span-2 lg:col-span-2">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-2xl text-sm leading-relaxed text-secondary-light" style={{ fontFamily: 'var(--font-body)' }}>
                  If you can answer even two of these clearly, we can help you scope a practical first version.
                </p>
                <Button to="/contact" variant="outline-dark">Discuss Your Solution</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
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
      { threshold: 0.12, rootMargin: '0px 0px 10% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`solution-page-reveal solution-page-reveal-${direction} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
