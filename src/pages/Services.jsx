import ServicesCapabilities from '../components/services/ServicesCapabilities.jsx'
import ServicesDirectory from '../components/services/ServicesDirectory.jsx'
import ServicesHero from '../components/services/ServicesHero.jsx'
import ServicesStartingPoint from '../components/services/ServicesStartingPoint.jsx'

export default function Services() {
  return (
    <>
      <ServicesHero />

      <ServicesCapabilities />

      <ServicesDirectory />

      <ServicesStartingPoint />
    </>
  )
}
