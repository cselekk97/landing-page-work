import React from 'react'
import cn from 'classnames'

import styles from './cont-frames.module.css'
import Screen2 from '../../../public/screen2'


function ContFrames () {
    return(
        <div className={cn(styles.contFrames)}>
            <Screen2 className={cn(styles.screen1)}></Screen2>
        </div>
    )
}

export default ContFrames