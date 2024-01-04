import React, { useState } from 'react'
import { motion } from "framer-motion"
import ViewPort from '../utils/ViewPort'

export default function TextCard({ data }) {
    const { title, body, footer } = data
    const [inView, setInView] = useState(false)

    const opacity = ((view) => {
        let opacity = view ? 1 : 0.3
        return {opacity}
    })(inView)
    return (

        <div className=' w-full md:w-3/5 space-y-6' >
            <ViewPort getViewStatus={setInView} delay={1000} >
                <motion.div
                    key={inView}
                    initial={{ opacity: .3 }}
                    animate={opacity}
                    transition={{ duration: 0.5, delay: .5 }}
                    className=""
                >
                    <h1 className=' text-xl text-burntSienna sm:text-4xl'>
                        <strong>
                            {title}
                        </strong>
                    </h1>
                </motion.div>
            </ViewPort>
            <ViewPort>

                <motion.div
                    key={inView}
                    initial={{ opacity: .3 }}
                    animate={opacity}
                    transition={{ duration: 0.5, delay: .7 }}
                    className=""
                >
                    <div className=' text-sm space-y-4 sm:text-xl'>
                        {body.map((item, i) => (
                            <p key={i}>{item}</p>
                        ))}
                    </div>
                </motion.div>
            </ViewPort>

            <motion.div
                key={inView}
                initial={{ opacity: .3 }}
                animate={opacity}
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
