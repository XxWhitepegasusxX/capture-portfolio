import React from 'react';
import { About, Description, Hide, Image } from './styles';

import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';

const AboutSection = () => {

    const titleAnim = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 2}},
    }
    const container = {
        hidden: {x: 100},
        show: {x: 0, transition: {duration: 0.75, ease: "easeOut"}},
    }

    return(
        <About>
        <Description>
            <motion.div variants={container} initial="hidden" animate="show" className="title">
                <Hide>
                    <motion.h2 variants={titleAnim} initial="hidden" animate="show">We work to make</motion.h2>
                </Hide>
                <Hide>
                    <h2>your <span>dreams</span> come</h2>
                </Hide>
                <Hide>
                    <h2>true.</h2>
                </Hide>
            </motion.div>
            <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
            <button>Contact Us</button>
        </Description>
        <Image>
            <img src="/images/home1.png" alt="" />
        </Image>
        </About>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
      props: {},
      revalidate: 60,
    }
  }

export default AboutSection;