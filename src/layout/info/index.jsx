import React from 'react'
import { motion } from "framer-motion"

import InfoData from '../../data/index.json'
import grabWizardIco from './img/grab-wizard-logo.png'
import TextCard from '../../components/text_card'
export default function Info() {
  return (
    <div className='flex flex-col justify-around w-full h-full box-border md:flex-row-reverse md:items-center'>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: .5 }}
        className=""
      >
        <img src={grabWizardIco} alt='git ico' width={300} height={200} className=' w-4/5 max-w-96 m-auto md:w-96' />
      </motion.div>
      <TextCard data={InfoData[0]} />
    </div>
  )
}
