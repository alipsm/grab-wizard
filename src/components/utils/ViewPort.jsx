

import React from 'react'
import { InView } from 'react-intersection-observer'

ViewPort.defaultProps = {
    delay: 500
}

export default function ViewPort({ children, getViewStatus, delay, }) {
    return (
        <InView as='div' delay={delay} onChange={(inView) => getViewStatus(inView)}>
            {children}
        </InView>
    )
}
