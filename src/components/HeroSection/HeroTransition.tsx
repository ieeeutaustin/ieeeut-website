'use client'

import { motion } from 'framer-motion'

import "./HeroSection.scss"
import Button from "@/components/Button/Button";

export default function HeroTransition() {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut'}}
            className='hero-content'
        >
            <div className="hero-title">
                <span>IEEE</span>
                <span>UT</span>
            </div>
            <i className="hero-subtitle">UT Austin’s official chapter of the Institute of Electrical and Electronics Engineers and home to the largest ECE organization at UT</i>
            <div className="hero-buttons">
                <Button link="/join" type="outlined member">
                    Become a <span>member</span>
                </Button>
                <Button link="/corporate" type="outlined sponsor">
                    Become a <span>sponsor</span>
                </Button>
            </div>
        </motion.div>
    )
}