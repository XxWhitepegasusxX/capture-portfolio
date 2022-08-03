import type { NextPage } from 'next'
import AboutSection from '../components/AboutSection/AboutSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import FaqSection from '../components/FaqSection'
import GlobalStyle from '../styles/GlobalStyle'
const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle/>
      <AboutSection/>
      <ServicesSection/>
      <FaqSection/>
    </>
  )
}

export default Home
