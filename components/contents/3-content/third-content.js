import cn  from 'classnames'

import styles from './thirt-content.module.css'
import ContFrames from './cont-frames'
import ContTexts from './cont-texts'

function ThirtContent () {
    return(
        <div className={cn(styles.thirtContent)}>
            <ContTexts></ContTexts>
            <ContFrames></ContFrames>
        </div>
    )
}

export default ThirtContent