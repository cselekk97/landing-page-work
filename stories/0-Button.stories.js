import React from 'react';

import Button from '../components/button'
import NavButton from '../components/navigation-button'
import Menu from '../components/menu'
import MainButton from '../components/main-button';
import ButtonText from '../components/button-text';


export default {
  title:'Buttons',
  component: Button
}

export const Normal = () => <Button>Save</Button>
export const navButton = () => <NavButton>Product</NavButton>
export const mainButton = () => <MainButton backWhite border><ButtonText blue bold>Login</ButtonText></MainButton>
export const menu = () => <Menu></Menu>
