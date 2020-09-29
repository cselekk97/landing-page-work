import React from 'react'
import { LinearProgress } from '@material-ui/core';
import cn from 'classnames'

import styles from './cont-progress.module.css'

function Progress (){
    return(
        <div className={cn(styles.container)}>
            <LinearProgress className={cn(styles.progress)} variant="determinate" color='primary' value={50}/>
            <div className={cn(styles.texts)}>
                <div>Facebook</div>
                <div className={cn(styles.scndText)}>35,929</div>
            </div>
        </div>
        
    )
}

export default Progress