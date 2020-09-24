import React from 'react'
import cn  from 'classnames'

import styles from './second-content.module.css'
import ContFrames from './cont-frames'
import ContTexts from './cont-texts'

function SecondContent () {
    return(
        <div className={cn(styles.scndContent)}>
            <ContTexts></ContTexts>
            <ContFrames></ContFrames>
        </div>
    )
}

export default SecondContent