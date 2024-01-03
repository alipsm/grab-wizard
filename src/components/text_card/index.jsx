import React from 'react'
import { motion } from "framer-motion"

export default function TextCard({ data }) {
    const { title, body, footer } = data
    return (
        <div className=' w-full md:w-3/5 space-y-6'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: .5 }}
                className=""
            >
                <h1 className=' text-xl text-burntSienna sm:text-4xl'>
                    <strong>
                        {title}
                    </strong>
                </h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: .7 }}
                className=""
            >
                <div className=' text-sm space-y-4 sm:text-xl'>
                    {body.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5, delay: 1 }}
                className=""
            >
                <footer className=' text-sm text-forestGreen sm:text-xl'>
                    <b>
                        {footer}
                    </b>
                </footer>
            </motion.div>
        </div>
    )
}
