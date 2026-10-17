import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import PageBanner from '../components/common/PageBanner.jsx'
import Button from '../components/common/Button.jsx'

const CONTACT_EMAIL = 'info@nolytech.co.ke'

const inputCls =
  'w-full rounded-sm border border-gray-200 bg-bg-light px-4 py-3 text-sm text-secondary placeholder:text-secondary-light/60 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200'
const labelCls = 'block text-sm font-semibold text-secondary mb-1.5'

export default function DeleteAccount() {
  const [form, setForm] = useState({ name: '', email: '', reason: '', confirmed: false })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.reason ? `\nReason:\n${form.reason}` : '',
      '\n---',
      'This is an account deletion request submitted via the Nolytech website.',
    ].filter(Boolean).join('\n')

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Account Deletion Request')}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <>
      <PageBanner
        title="Request Account Deletion"
        breadcrumb={[{ label: 'Delete Account' }]}
      />

      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12.5">
          <div className="max-w-2xl mx-auto">

            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, #6D4CF6, #25D6A2)' }}
                >
                  <CheckCircle2 size={28} className="text-white" />
                </div>
                <h2
                  className="text-2xl font-bold text-secondary mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Request submitted
                </h2>
                <p
                  className="text-secondary-light text-sm leading-relaxed mb-2"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Your email client has been opened with the deletion request pre-filled. Please send the email to complete your submission.
                </p>
                <p
                  className="text-secondary-light text-sm leading-relaxed mb-8"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  We will process your request within <strong className="text-secondary">30 days</strong> and send a confirmation to <strong className="text-secondary">{form.email}</strong>.
                </p>
                <Button to="/" variant="outline-dark">Back to Home</Button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2
                    className="text-2xl font-bold text-secondary mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Delete your account & data
                  </h2>
                  <p
                    className="text-sm text-secondary-light leading-relaxed mb-5"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    If you would like us to delete your personal account and associated data from our systems, please complete the form below. We take your privacy seriously and will process your request in accordance with our{' '}
                    <Link to="/privacy-policy" className="text-primary hover:text-accent-dark transition-colors">Privacy Policy</Link>.
                  </p>

                  <div className="flex gap-3 rounded-sm bg-amber-50 border border-amber-200 px-5 py-4">
                    <AlertTriangle size={17} className="text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                      <strong>Please note:</strong> Account deletion is permanent and cannot be undone. All your data, including account history and saved information, will be permanently removed within 30 days of your request being verified.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                        Full name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputCls}
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                    </div>
                    <div>
                      <label className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                        Email address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email linked to your account"
                        value={form.email}
                        onChange={handleChange}
                        className={inputCls}
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                      Reason for deletion <span className="text-secondary-light font-normal">(optional)</span>
                    </label>
                    <textarea
                      name="reason"
                      rows={4}
                      placeholder="Let us know why you're leaving (optional)"
                      value={form.reason}
                      onChange={handleChange}
                      className={`${inputCls} resize-none`}
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="confirmed"
                      required
                      checked={form.confirmed}
                      onChange={handleChange}
                      className="mt-0.5 w-4 h-4 accent-primary cursor-pointer shrink-0"
                    />
                    <span
                      className="text-sm text-secondary-light leading-relaxed group-hover:text-secondary transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      I understand that this action is <strong className="text-secondary">permanent and irreversible</strong>. I confirm that I want to delete my account and all associated data.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium capitalize text-white transition-all duration-200 hover:bg-primary-dark shadow-sm hover:shadow cursor-pointer select-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Submit Deletion Request
                  </button>
                </form>

                <div className="mt-10 pt-8 border-t border-gray-100">
                  <h4
                    className="text-base font-bold text-secondary mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Prefer to contact us directly?
                  </h4>
                  <p
                    className="text-sm text-secondary-light leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Email us at{' '}
                    <a href="mailto:info@nolytech.co.ke" className="text-primary hover:text-accent-dark transition-colors">
                      info@nolytech.co.ke
                    </a>{' '}
                    with the subject line <em>"Account Deletion Request"</em> and your registered email address. We will respond within 5 business days.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
