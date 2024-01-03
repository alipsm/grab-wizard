import React from 'react'
import { motion} from "framer-motion"
import gitIco from './img/GitHub.png'

export default function Header() {
    return (
        <div className=' w-full text-right'>
            <a href='https://github.com/alipsm/grab-wizard' target='_blank' className=' hover:opacity-80 transition-opacity'>
            <motion.div
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className=""
            >
                <img src={gitIco} alt='git ico' width={60} height={60} className=' float-right'/>
            </motion.div>
            </a>
        </div>
    )
}
