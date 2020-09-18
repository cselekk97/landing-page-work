import React from "react";
import cn from "classnames";

import styles from "./header.module.css";
import Navigation from "./navigation"
import HeaderTitle from './header-title'
import HeaderButtons from './header-buttons'
import Photo from "./photo"
import Screen from "./screen.png"


function Header() {
  return (
    <div className={cn(styles.header)}>
      <Navigation></Navigation>
      <HeaderTitle></HeaderTitle>
      <HeaderButtons></HeaderButtons>
      <Photo src ={Screen}  className={cn(styles.imgHeader)}></Photo>
    </div>
  );
}

export default Header;