import React, { useEffect, useState } from 'react'

import Card from '../components/utils/Card'

export default function Hash({ classes = "" }) {
    const [hashValues, setHashValues] = useState([0, 1, 0, 1, 0, 1, 1, 0,1])

    useEffect(() => {
        changeHashData()
    }, [])

    function changeHashData() {
        setInterval(() => {
            const newHashData = hashValues.map(() => {
                return Math.floor(Math.random() * 2)
            })
            setHashValues(newHashData)
        }, 3000);
    }

    const randomAccess = () => Math.floor(Math.random() * hashValues.length)

    return (
        <Card>
            {[0, 1, 2, 3].map((row ) => (
                <p key={row} className={`text-balance  py-2 px-4`}>
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7,8].map((item) => <span key={item}> {hashValues[randomAccess()]} </span>)
                    }
                </p>
            ))}
        </Card>
    )
}
