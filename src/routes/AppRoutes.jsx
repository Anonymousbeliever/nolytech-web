import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Solutions from '../pages/Solutions'
import Team from '../pages/Team'
import Contact from '../pages/Contact'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import TermsOfService from '../pages/TermsOfService'
import DeleteAccount from '../pages/DeleteAccount'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="delete-account" element={<DeleteAccount />} />
      </Route>
    </Routes>
  )
}
