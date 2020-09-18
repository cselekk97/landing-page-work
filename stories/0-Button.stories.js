import React from 'react';

import Button from '../components/buttons/button'
import NavButton from '../components/buttons/navigation-button'
import Menu from '../components/header/menu'
import MainButton from '../components/buttons/main-button';
import ButtonText from '../components/texts/button-text';
import HeaderButtons from '../components/header/header-buttons';


export default {
  title:'Buttons',
  component: Button
}

export const Normal = () => <Button>Save</Button>
export const navButton = () => <NavButton>Product</NavButton>
export const mainButton = () => <MainButton backWhite border><ButtonText blue bold>Login</ButtonText></MainButton>
export const menu = () => <Menu></Menu>
export const headerButtons = () => <HeaderButtons></HeaderButtons>
