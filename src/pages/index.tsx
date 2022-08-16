import type { NextPage } from 'next'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import FaqSection from '../components/FaqSection'
import {motion} from 'framer-motion'
import { pageAnimation } from '../animation'

const Home: NextPage = () => {
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <AboutSection/>
      <ServicesSection/>
      <FaqSection/>
    </motion.div>
  )
}

export default Home
