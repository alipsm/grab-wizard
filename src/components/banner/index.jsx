import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

export default function Banner() {

    const moveNext = handleShowAbility();
    const [abilityText, setAbilityText] = useState('Smart')

    const ability = [
        "Simple",
        "Fast",
        "Magical",
        "Smart",
    ]

    function handleShowAbility() {
        let index = 0
        function next() {
            if (index === ability.length) {
                index = 0;
            }
            let text = ability[index]
            setAbilityText(text)
            index++

        }
        return next
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            moveNext();
        }, 3500);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className=' flex flex-col justify-between items-center   w-full  space-y-10 '>
            <motion.h1
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 10, opacity: 1 }}
                transition={{ duration: 0.5, delay: .7 }}
                className="text-skyBlue text-4xl sm:text-6xl">
                Grab-Wizard
            </motion.h1>

            <motion.h3
            key={abilityText}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0,1,1,1,0] }}
            transition={{ duration:3 ,delay:.5}}
            
            className="text-xl text-forestGreen sm:text-4xl"
        >
                &ldquo;{abilityText}&rdquo;
        </motion.h3>
        </div>
    )
}
