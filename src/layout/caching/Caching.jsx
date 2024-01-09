import React, { useState } from 'react'
import { motion } from 'framer-motion'

import CachingData from '../../data/index.json'
import TextCard from '../../components/text_card'
import Hash from '../../animations/Hash'
import ViewPort from '../../components/utils/ViewPort'

export default function Caching() {
    const [inView, setInView] = useState(false)
    return (
        <div className='flex flex-col justify-evenly w-full h-full box-border md:flex-row-reverse items-center md:justify-around'>
            <ViewPort getViewStatus={setInView} delay={300}>
                <motion.div
                    key={inView}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: inView ? 1 : 0, }}
                    transition={{ duration: 1, delay: .5 }}
                >
                    <Hash classes='flex-groxw' />
                </motion.div>
            </ViewPort>
            <TextCard data={CachingData[1]} />
        </div>
    )
}
