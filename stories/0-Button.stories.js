import React from 'react';

import Button from '../components/button'
import NavButton from '../components/navigation-button'
import Menu from '../components/menu'
import MainButton from '../components/main-button';
import TextTitle from '../components/text-title';


export default {
  title:'Buttons',
  component: Button
}

export const Normal = () => <Button>Save</Button>
export const navButton = () => <NavButton>Product</NavButton>
export const mainButton = () => <MainButton backWhite border><TextTitle blue bold>Login</TextTitle></MainButton>
export const menu = () => <Menu></Menu>
