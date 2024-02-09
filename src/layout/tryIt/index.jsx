import React, { useState } from 'react'
import { motion } from "framer-motion"
import ViewPort from '../../components/utils/ViewPort'

export default function TryIt() {
    const [inView, setInView] = useState(false)
    return (
        <div className='flex flex-col justify-center items-center h-full w-full space-y-6'>
            <h1 className=' text-xl text-burntSienna sm:text-4xl'>
                <strong>
                    Try it now <b className=' text-forestGreen'>
                        <ViewPort className={" inline-block"} delay={300} getViewStatus={setInView}>
                            <motion.span
                                key={inView}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: inView ? [0, 1, 0, 1, 0, 0, 1] : 0 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                className=""
                            >
                                {"</>"}
                            </motion.span>
                        </ViewPort>
                    </b>
                </strong>
            </h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: .7 }}
                className=""
            >
                <div className=' text-sm space-y-4 sm:text-xl text-forestGreen'>
                    <a href='' className='hover:opacity-80 underline underline-offset-4'>{"</codesandbox.io>"}</a>
                </div>
            </motion.div>
        </div>
    )
}
