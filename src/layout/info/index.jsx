import React, { useState } from 'react'
import { motion } from "framer-motion"

import InfoData from '../../data/index.json'
import grabWizardIco from './img/grab-wizard-logo.png'
import TextCard from '../../components/text_card'
import ViewPort from '../../components/utils/ViewPort'
export default function Info() {
  const [inView, setInView] = useState(false)

  return (
    <div className='flex flex-col justify-around w-full h-full box-border md:flex-row-reverse md:items-center'>
      <ViewPort getViewStatus={setInView} delay={600}>
        <motion.div
          key={inView}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: inView ? 1 : 0, }}
          transition={{ duration: 1, delay: .5 }}
        >
          <img src={grabWizardIco} alt='git ico' width={300} height={200} className=' w-4/5 max-w-96 m-auto md:w-96' />
        </motion.div>
      </ViewPort>


      <ViewPort getViewStatus={setInView} delay={300}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: inView ? 1 : 0, }}
          transition={{ duration: 1, delay: .5 }}
        >
          <TextCard data={InfoData[0]} />
        </motion.div>
      </ViewPort>
    </div>
  )
}
