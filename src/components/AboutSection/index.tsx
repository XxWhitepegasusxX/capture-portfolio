import React from 'react';
import { About, Description, Hide, Image } from './styles';

import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';

const AboutSection = () => {
/*
    const titleAnim = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 2}},
    }
    const container = {
        hidden: {x: 100},
        show: {x: 0, transition: {duration: 0.75, ease: "easeOut", staggerChildren: 1, when: "afterChildren"}},
    }
*/
    return(
        <About>
        <Description>
            <motion.div className="title">
                <Hide>
                    <motion.h2>We work to make</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2>your <span>dreams</span> come</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2>true.</motion.h2>
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