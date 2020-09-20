import React from 'react'
import cn from 'classnames'

import styles from './first-content.module.css'
import ContButtons from './cont-buttons'
import ContTexts from './cont-texts'

function FirstContent ({}) {
    return(
        <div className={cn(styles.firstContent)}>
            <ContTexts></ContTexts>
            <ContButtons></ContButtons>
        </div>
    )
}

export default FirstContent