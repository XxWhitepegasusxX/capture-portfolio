import type { NextPage } from 'next'
import AboutSection from '../components/AboutSection/AboutSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import FaqSection from '../components/FaqSection'
import GlobalStyle from '../styles/GlobalStyle'
import Nav from '../components/Nav'
import Head from 'next/head'
const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle/>
      <Head>
        <title>Capture Portfólio</title>
      </Head>
      <Nav/>
      <AboutSection/>
      <ServicesSection/>
      <FaqSection/>
    </>
  )
}

export default Home
