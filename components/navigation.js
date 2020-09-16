import React from 'react'
import cn from 'classnames'

import Button from './button'

import styles from './navigation.module.css'
import Menu from './menu'
import MainButton from './main-button'
import ButtonText from './button-text'
import Photo from './photo'

function Navigation({...props}) {
   return(
       <nav className={cn(styles.navigation)}>
       <Photo/>
       <Menu/>
       <MainButton border backWhite>
           <ButtonText blue bold>Login</ButtonText>
       </MainButton>
       </nav>
   )
}

export default Navigation