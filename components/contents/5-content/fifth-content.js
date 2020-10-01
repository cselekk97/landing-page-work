import React from 'react'
import cn  from 'classnames'

import styles from './fifth-content.module.css'
import ContTexts from './cont-texts'

function FifthContent () {
    return(
        <div className={cn(styles.fifthContent)} id='contact'>
            <ContTexts></ContTexts>
        </div>
    )
}

export default FifthContent