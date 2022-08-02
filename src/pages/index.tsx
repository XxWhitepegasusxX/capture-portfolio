import type { NextPage } from 'next'
import AboutSection from '../components/AboutSection/AboutSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import FaqSection from '../components/FaqSection'

const Home: NextPage = () => {
  return (
    <>
      <AboutSection/>
      <ServicesSection/>
      <FaqSection/>
    </>
  )
}

export default Home
