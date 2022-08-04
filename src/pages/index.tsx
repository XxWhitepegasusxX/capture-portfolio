import type { NextPage } from 'next'
import AboutSection from '../components/AboutSection/AboutSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import FaqSection from '../components/FaqSection'
import GlobalStyle from '../styles/GlobalStyle'
import Nav from '../components/Nav'
const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle/>
      <Nav/>
      <AboutSection/>
      <ServicesSection/>
      <FaqSection/>
    </>
  )
}

export default Home
