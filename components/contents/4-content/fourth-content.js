import React from 'react'
import cn  from 'classnames'

import styles from './fourth-content.module.css'
import Progress from './cont-progress'
import ContTexts from './cont-texts'
import ContButton from './cont-button'

function FourthContent () {
    return(
        <div className={cn(styles.frthContent)}>
            <ContTexts></ContTexts>
            <Progress></Progress>
            <ContButton></ContButton>
        </div>
    )
}

export default FourthContent