import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, Check, Mail, MapPin, Phone, Plus } from 'lucide-react'
import { services } from '../data/services.jsx'

const CONTACT_EMAIL = 'info@nolytech.co.ke'
const MAP_URL = 'https://maps.app.goo.gl/cGBiNYZKsoZZ1zJ66'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const NOT_SURE = 'Not sure yet'
const SERVICE_OPTIONS = [...services.map(service => service.title), NOT_SURE]

const FAQS = [
  ['What kind of projects does Nolytech handle?', 'Custom software, ERP-style platforms, SACCO systems, mobile apps, websites and portals, AI and WhatsApp automation, plus cloud, data and networking work.'],
  ['Can Nolytech help if we are not sure what system we need?', 'Yes. We start by understanding how your organisation works, then recommend the right approach and likely scope before anything is built.'],
  ['Do you work with SACCOs and growing businesses?', 'Yes. We build SACCO 360 for member banking and Business ERP for growing businesses, and we also work with institutions and other organisations.'],
  ['Can you improve an existing system instead of building from scratch?', 'Yes. We can review what you already have and improve, integrate or extend it where that makes more sense than a rebuild.'],
  ['How do project discussions usually start?', 'With a conversation about what you’re trying to build, fix or improve. Send a short brief with the form and we’ll follow up to talk through options.'],
  ['Does Nolytech provide support after delivery?', 'Yes. We stay on after launch with guidance, improvements and practical help as your team settles into the system.'],
]

// Links from service and solution pages arrive as ?service=<title>. A service title preselects the
// dropdown; anything else (e.g. a solution) is noted at the top of the message instead.
function initialForm(requested) {
  const isService = requested && SERVICE_OPTIONS.includes(requested)
  return {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: isService ? requested : '',
    message: requested && !isService ? `I’d like to talk about ${requested}.\n\n` : '',
  }
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(form.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!form.message.trim()) errors.message = 'Please add a short brief about your project.'
  return errors
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState(() => initialForm(searchParams.get('service')))
  const [errors, setErrors] = useState({})
  const [prepared, setPrepared] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const update = event => {
    const { name, value } = event.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    const found = validate(form)
    setErrors(found)
    const firstInvalid = ['name', 'email', 'message'].find(key => found[key])
    if (firstInvalid) {
      document.getElementById(`cn-${firstInvalid}`)?.focus()
      return
    }

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.company ? `Company: ${form.company}` : null,
      form.service ? `Service: ${form.service}` : null,
      '',
      'Project brief:',
      form.message,
    ]
      .filter(line => line !== null)
      .join('\n')
    const subject = form.service ? `Nolytech enquiry: ${form.service}` : 'Nolytech website enquiry'

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setPrepared(true)
  }

  const fieldProps = (name, extra = {}) => ({
    name,
    id: `cn-${name}`,
    value: form[name],
    onChange: update,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `cn-${name}-error` : undefined,
    className: `cn-input${errors[name] ? ' is-invalid' : ''}`,
    ...extra,
  })

  return (
    <>
      <section className="cn-hero" aria-labelledby="cn-title">
        <div className="cn-hero-inner">
          <nav aria-label="Breadcrumb" className="cn-crumbs cn-u1">
            <Link to="/" className="cn-crumb">Home</Link>
            <span aria-hidden="true" className="cn-crumb-sep">/</span>
            <span aria-current="page" className="cn-crumb-current">Contact</span>
          </nav>
          <h1 id="cn-title" className="cn-title cn-u2">Connect <em>with us.</em></h1>
          <p className="cn-lead cn-u3">
            We help organisations move from manual, scattered operations to reliable digital systems.
            Get in touch to start a conversation about your next project.
          </p>
          <div className="cn-strip cn-u4">
            <a className="cn-strip-item" href={`mailto:${CONTACT_EMAIL}`}>
              <Mail size={18} strokeWidth={1.8} aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
            <a className="cn-strip-item" href="tel:+254795112229">
              <Phone size={18} strokeWidth={1.8} aria-hidden="true" />
              +254 795 112 229
            </a>
            <a className="cn-strip-item" href={MAP_URL} target="_blank" rel="noreferrer">
              <MapPin size={18} strokeWidth={1.8} aria-hidden="true" />
              Nyali Links Road, Mombasa
            </a>
          </div>
        </div>
      </section>

      <section className="cn-main">
        <div className="cn-main-inner">
          <div className="cn-faq">
            <div className="cn-faq-head">
              <span className="cn-kicker">Common questions</span>
              <h2 className="cn-faq-title">Answers before you <em>reach out.</em></h2>
            </div>
            <div className="cn-faq-list">
              {FAQS.map(([question, answer], index) => {
                const isOpen = openFaq === index
                return (
                  <div key={question} className={`cn-faq-item${isOpen ? ' is-open' : ''}`}>
                    <button
                      type="button"
                      className="cn-q"
                      aria-expanded={isOpen}
                      aria-controls={`cn-faq-${index}`}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{question}</span>
                      <span className="cn-q-icon" aria-hidden="true">
                        <Plus size={12} strokeWidth={2.4} />
                      </span>
                    </button>
                    {isOpen && <p id={`cn-faq-${index}`} className="cn-a">{answer}</p>}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="cn-form-col">
            {prepared ? (
              <div className="cn-done" role="status">
                <span className="cn-done-icon"><Check size={24} strokeWidth={2.4} aria-hidden="true" /></span>
                <h2 className="cn-done-title">Your message is ready to send.</h2>
                <p className="cn-done-text">
                  We’ve opened it in your email app. Send it from there and the Nolytech team will be in
                  touch to talk through your project. If nothing opened, email us directly at{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
                <button type="button" className="cn-again" onClick={() => setPrepared(false)}>
                  Back to the form
                </button>
              </div>
            ) : (
              <form className="cn-form" onSubmit={handleSubmit} noValidate>
                <p className="cn-form-intro">
                  Tell us what you’re trying to build, fix or improve. We’ll be honest about the right
                  approach and the likely scope.
                </p>

                <div className="cn-fields">
                  <div className="cn-two">
                    <Field label="Full name" name="name" required error={errors.name}>
                      <input type="text" autoComplete="name" placeholder="Your name" {...fieldProps('name')} />
                    </Field>
                    <Field label="Email" name="email" required error={errors.email}>
                      <input type="email" autoComplete="email" placeholder="example@email.com" {...fieldProps('email')} />
                    </Field>
                  </div>
                  <div className="cn-two">
                    <Field label="Phone" name="phone">
                      <input type="tel" autoComplete="tel" placeholder="+254" {...fieldProps('phone')} />
                    </Field>
                    <Field label="Company / organisation" name="company">
                      <input type="text" autoComplete="organization" placeholder="Organisation name" {...fieldProps('company')} />
                    </Field>
                  </div>
                  <Field label="Service needed" name="service">
                    <select {...fieldProps('service')}>
                      <option value="">Select a service</option>
                      {SERVICE_OPTIONS.map(option => <option key={option}>{option}</option>)}
                    </select>
                  </Field>
                  <Field label="Message" name="message" required error={errors.message}>
                    <textarea
                      rows={5}
                      placeholder="A short brief about your project"
                      {...fieldProps('message', { className: `cn-input cn-textarea${errors.message ? ' is-invalid' : ''}` })}
                    />
                  </Field>
                </div>

                <button type="submit" className="cn-send">
                  Send message
                  <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
                </button>
                <p className="cn-note">This opens your email app with the message ready to send.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, required = false, error, children }) {
  return (
    <div className="cn-field">
      <label htmlFor={`cn-${name}`} className="cn-label">
        {label}
        {required && <span className="cn-required" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <span id={`cn-${name}-error`} className="cn-error">{error}</span>}
    </div>
  )
}
