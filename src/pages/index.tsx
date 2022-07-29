import type { NextPage } from 'next'
import AboutSection from '../components/AboutSection/AboutSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'

const Home: NextPage = () => {
  return (
    <>
      <AboutSection/>
      <ServicesSection/>
    </>
  )
}

export default Home
