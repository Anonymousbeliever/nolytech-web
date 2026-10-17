import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Illustrative product screens — sample data only, not client figures
const saccoNav = ['Dashboard', 'Accounts', 'Savings', 'Loans', 'Payments', 'Transfers', 'Statements']

const saccoStats = [
  ['Total balance', 'KES 245,680'],
  ['Total savings', 'KES 185,450'],
  ['Total loans', 'KES 120,000'],
  ['Shares', 'KES 45,000'],
]

const saccoTransactions = [
  { name: 'Salary deposit', type: 'Credit', amount: '+KES 45,000.00', credit: true },
  { name: 'School fees payment', type: 'Debit', amount: '−KES 8,500.00' },
  { name: 'Loan repayment', type: 'Debit', amount: '−KES 12,000.00' },
]

const erpNav = ['Dashboard', 'Sales', 'Purchases', 'Inventory', 'Finance', 'HR & Payroll', 'Projects', 'CRM', 'Reports']

const erpStats = [
  ['Total revenue', '$250,000', '+12.5% vs Apr'],
  ['Total orders', '1,540', '+8.2% vs Apr'],
  ['Total customers', '2,350', '+10.1% vs Apr'],
  ['Total profit', '$89,500', '+15.3% vs Apr'],
]

const erpActivity = [
  ['New sales order', 'SO-2026-0587', '2 min ago'],
  ['Bill payment', '$2,450.00', '15 min ago'],
  ['Stock received', 'PR-2026-0145', '1 hr ago'],
]

const erpStatus = [
  ['12', 'Pending approvals', 'violet'],
  ['8', 'In progress', 'blue'],
  ['24', 'Open tasks', 'green'],
  ['5', 'Overdue', 'red'],
]

const chartDays = ['May 01', 'May 08', 'May 15', 'May 22', 'May 29']

export default function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero-inner">
        <div className="home-hero-copy">
          <span className="home-hero-kicker nx-rise-1">B2B technology · Kenya</span>
          <h1 id="home-hero-title" className="home-hero-title nx-rise-2">
            We build the systems your organisation <em>runs on.</em>
          </h1>
          <p className="home-hero-lead nx-rise-3">
            Custom software, ERP-style platforms, mobile apps and AI automation for businesses,
            SACCOs and institutions, designed around how your team actually works.
          </p>
          <div className="home-hero-actions nx-rise-4">
            <Link to="/contact" className="home-hero-btn home-hero-btn-primary">
              Start a project
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
            <Link to="/solutions" className="home-hero-btn home-hero-btn-ghost">
              Explore solutions
            </Link>
          </div>
        </div>

        <div
          className="home-hero-visual"
          role="img"
          aria-label="Example screens of a SACCO member dashboard and a business ERP dashboard built by Nolytech"
        >
          <div className="home-hero-stack">
            <SaccoWindow />
            <ErpWindow />
          </div>
        </div>
      </div>
    </section>
  )
}

function WindowBar({ title }) {
  return (
    <div className="hero-ui-bar">
      <span className="hero-ui-bar-dot" />
      <span className="hero-ui-bar-dot" />
      <span className="hero-ui-bar-dot" />
      <span className="hero-ui-bar-title">{title}</span>
    </div>
  )
}

function SideNav({ brand, items, dark = false }) {
  return (
    <div className={`hero-ui-side${dark ? ' hero-ui-side-dark' : ''}`}>
      <span className="hero-ui-side-brand">{brand}</span>
      {items.map((item, index) => (
        <span key={item} className={`hero-ui-side-item${index === 0 ? ' is-current' : ''}`}>
          {item}
        </span>
      ))}
    </div>
  )
}

function SaccoWindow() {
  return (
    <div className="hero-ui-window hero-ui-window-back">
      <WindowBar title="SACCO 360 — Member dashboard" />
      <div className="hero-ui-app">
        <SideNav brand="SACCO 360" items={saccoNav} />
        <div className="hero-ui-main">
          <div className="hero-ui-heading">
            <span className="hero-ui-heading-title">Welcome back, James</span>
            <span className="hero-ui-heading-sub">Here’s what’s happening with your accounts today.</span>
          </div>

          <div className="hero-ui-stats">
            {saccoStats.map(([label, value]) => (
              <div key={label} className="hero-ui-stat">
                <span className="hero-ui-stat-label">{label}</span>
                <span className="hero-ui-stat-value">{value}</span>
              </div>
            ))}
          </div>

          <div className="hero-ui-card">
            <span className="hero-ui-card-title">Recent transactions</span>
            {saccoTransactions.map(tx => (
              <div key={tx.name} className="hero-ui-row">
                <div className="hero-ui-row-text">
                  <span className="hero-ui-row-name">{tx.name}</span>
                  <span className="hero-ui-row-meta">{tx.type}</span>
                </div>
                <span className={`hero-ui-row-amount${tx.credit ? ' is-credit' : ''}`}>{tx.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ErpWindow() {
  return (
    <div className="hero-ui-window hero-ui-window-front">
      <WindowBar title="Nolytech Business ERP" />
      <div className="hero-ui-app">
        <SideNav brand="Nolytech ERP" items={erpNav} dark />
        <div className="hero-ui-main">
          <div className="hero-ui-head-row">
            <div className="hero-ui-heading">
              <span className="hero-ui-heading-title is-large">Dashboard</span>
              <span className="hero-ui-heading-sub">Overview of your business performance</span>
            </div>
            <span className="hero-ui-date">May 01 – May 31, 2026</span>
          </div>

          <div className="hero-ui-stats">
            {erpStats.map(([label, value, delta], index) => (
              <div key={label} className={`hero-ui-stat nx-stat-${index + 1}`}>
                <span className="hero-ui-stat-label">{label}</span>
                <span className="hero-ui-stat-value">{value}</span>
                <span className="hero-ui-stat-delta">{delta}</span>
              </div>
            ))}
          </div>

          <div className="hero-ui-split">
            <div className="hero-ui-card hero-ui-chart">
              <div className="hero-ui-chart-head">
                <span className="hero-ui-card-title">Sales overview</span>
                <span className="hero-ui-legend">
                  <span className="is-current">● This month</span>
                  <span>● Last month</span>
                </span>
              </div>
              <svg viewBox="0 0 300 110" preserveAspectRatio="none" className="hero-ui-chart-svg">
                <line x1="0" y1="27" x2="300" y2="27" stroke="#F0EEF4" />
                <line x1="0" y1="55" x2="300" y2="55" stroke="#F0EEF4" />
                <line x1="0" y1="83" x2="300" y2="83" stroke="#F0EEF4" />
                <polyline
                  className="nx-draw-1"
                  points="0,92 25,80 50,86 75,62 100,70 125,50 150,64 175,46 200,56 225,34 250,44 275,24 300,18"
                  fill="none"
                  stroke="#5B3DF5"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
                <polyline
                  className="nx-draw-2"
                  points="0,96 25,90 50,94 75,80 100,84 125,72 150,80 175,66 200,74 225,60 250,66 275,52 300,50"
                  fill="none"
                  stroke="#C9C5D6"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <div className="hero-ui-axis">
                {chartDays.map(day => <span key={day}>{day}</span>)}
              </div>
            </div>

            <div className="hero-ui-card">
              <span className="hero-ui-card-title hero-ui-live-title">
                Recent activities
                <span className="hero-ui-live nx-live" />
              </span>
              {erpActivity.map(([name, meta, time], index) => (
                <div key={name} className={`hero-ui-row nx-row-${index + 1}`}>
                  <div className="hero-ui-row-text">
                    <span className="hero-ui-row-name">{name}</span>
                    <span className="hero-ui-row-meta">{meta}</span>
                  </div>
                  <span className="hero-ui-row-time">{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-ui-status">
            {erpStatus.map(([count, label, tone]) => (
              <div key={label} className={`hero-ui-status-chip is-${tone}`}>
                <span className="hero-ui-status-count">{count}</span>
                <span className="hero-ui-status-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
