

import React from 'react'
import { InView } from 'react-intersection-observer'

ViewPort.defaultProps = {
    getViewStatus:()=>{},
    className:"",
    delay: 500
}

export default function ViewPort({ children, getViewStatus, delay ,className,triggerOnce }) {
    return (
        <InView as='div' triggerOnce={triggerOnce} delay={delay} onChange={(inView) => getViewStatus(inView)} className={className}>
            {children}
        </InView>
    )
}
