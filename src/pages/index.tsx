import type { NextPage } from 'next'
import AboutSection from '../components/AboutSection/AboutSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import FaqSection from '../components/FaqSection'
import Head from 'next/head'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Capture Portfólio</title>
      </Head>
      <AboutSection/>
      <ServicesSection/>
      <FaqSection/>
      
    </>
  )
}

export default Home
