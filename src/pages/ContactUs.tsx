import { MotionConfig } from 'framer-motion'
import { GetStaticProps } from 'next'
import React from 'react'
import {motion} from 'framer-motion'
import { pageAnimation } from '../animation'

export default function ContactUs(){
    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
            <h1>Contact Us</h1>
        </motion.div>
    )
}
export const getStaticProps: GetStaticProps = async () => {
    return {
      props: {},
      revalidate: 60,
    }
}
