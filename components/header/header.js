import React from "react";
import cn from "classnames";

import styles from "./header.module.css";
import Navigation from "./navigation"
import HeaderTitle from './header-title'
import HeaderButtons from './header-buttons'
import Photo from "./photo"
import Screen from "../../public/screen"



function Header() {
  return (
    <div className={cn(styles.header)}>
      <Navigation></Navigation>
      <HeaderTitle></HeaderTitle>
      <HeaderButtons></HeaderButtons>
      <Screen className={cn(styles.screen)}></Screen>
    </div>
  );
}

export default Header;