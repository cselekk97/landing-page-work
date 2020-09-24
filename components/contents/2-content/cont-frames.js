import React from 'react'
import cn from 'classnames'

import styles from './cont-frames.module.css'
import Screen1 from '../../../public/screen1'
import Vector3 from '../../../public/vector3'

function ContFrames () {
    return(
        <div className={cn(styles.contFrames)}>
            <Screen1 className={cn(styles.screen1)}></Screen1>
            {/* <div className={cn(styles.vectorDiv)}>
               <Vector3 className={cn(styles.vector3)}></Vector3> 
            </div> */}
        </div>
    )
}

export default ContFrames