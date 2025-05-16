import React from 'react';
import { motion } from 'framer-motion';

export default function Hero(){
    return(
        <section className = "text-center py-24 bg-pink-100">
            <motion.h1 
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className = "text-5xl font-bold text-pink-600 mb-4">
                Hi, I'm Ahna!
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className = "text-lg text-gray-800">
                NYC Based Software Engineer and RPI Alumni
            </motion.p>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 space-x-4">
                <a 
                href = "mailto:ahna.p.shah@gmail.com"
                className = "text-blue-500 underline"
                >
                Email
                </a>
                <a href = "https://linkedin.com/in/ahna-shah"
                className = "text-blue-500 underline"
                target = "_blank"
                rel = "noreferrer"
                >
                Linkedin
                </a>
            </motion.div>
        </section>
    );
}
