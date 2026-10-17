import HomeAbout from '../components/home/HomeAbout.jsx'
import HomeHero from '../components/home/HomeHero.jsx'
import HomeServices from '../components/home/HomeServices.jsx'
import HomeSolutions from '../components/home/HomeSolutions.jsx'
import HomeTestimonials from '../components/home/HomeTestimonials.jsx'
import HomeWhy from '../components/home/HomeWhy.jsx'

export default function Home() {
  return (
    <>
      <HomeHero />

      <HomeServices />

      <HomeAbout />

      <HomeSolutions />

      <HomeWhy />

      <HomeTestimonials />
    </>
  )
}
