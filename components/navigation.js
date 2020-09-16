import React from 'react'
import cn from 'classnames'

import Button from './button'

import styles from './navigation.module.css'
import Menu from './menu'
import MainButton from './main-button'
import TextTitle from './text-title'

function Navigation({...props}) {
   return(
       <nav className={cn(styles.navigation)}>
       <Menu/>
       <MainButton border backWhite>
           <TextTitle blue bold>Login</TextTitle>
       </MainButton>
       </nav>
   )
}

export default Navigation