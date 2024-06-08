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
            <h2 className="hero-subtitle">Where ECE meets social, academic, and professional</h2>
            <i className="hero-desc">Home to the largest ECE organization at UT Austin</i>
            <div className="hero-buttons">
                <Button link="/membership" type="outlined member">
                    Become a <span>member</span>
                </Button>
                <Button link="/corporate" type="outlined sponsor">
                    Become a <span>sponsor</span>
                </Button>
            </div>
        </motion.div>
    )
}