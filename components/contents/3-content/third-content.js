import React from 'react'
import cn  from 'classnames'

import styles from './third-content.module.css'
import ContFrames from './cont-frames'
import ContTexts from './cont-texts'

function ThirdContent () {
    return(
        <div className={cn(styles.thirdContent)}>
            <ContTexts></ContTexts>
            <ContFrames></ContFrames>
        </div>
    )
}

export default ThirdContent