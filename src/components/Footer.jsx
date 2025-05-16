import React from "react"
import { motion } from "framer-motion";

export default function Footer(){
    return(
        <motion.footer 
            initial = {{ opacity: 0, y: 50 }}
            animate = {{ opacity: 1, y: 0 }}
            transition = {{ duration: 0.8 }}
            className = "bg-pink-100 text-gray-800 py-8 px-4 mt-16">
            <div className = "max-w-4xl mx-auto text-center space-y-3">
                <p className = "text-lg font-semibold"> Made with 🫶🏽 by Ahna</p>
                <div className = "space-x-4">

                    <a 
                        href = "mailto:ahna.p.shah@gmail.com"
                        className = "text-blue-600 underline hover:text-blue-800 transition"
                    >
                    Email
                    </a>
                    <a 
                    href = "https://linkedin.com/in/ahna-shah"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    className = "text-blue-600 underline hover:text-blue-800 transition"
                    >
                    Linkedin
                    </a>
                </div>
                <p className = "text-sm text-gray-500"> {new Date().getFullYear} Ahna Shah</p>
            </div>
        </motion.footer>
    );

}