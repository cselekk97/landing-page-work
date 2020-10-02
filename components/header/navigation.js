import React from "react";
import cn from "classnames";

import styles from "./navigation.module.css";
import Menu from "./menu";
import MainButton from "../buttons/main-button";
import ButtonText from "../texts/button-text";
import Photo from "./photo";
import useWindowSize from "../../hooks/useWindowSize";
import CONST from "../../constants/index";

function Navigation() {
  const size = useWindowSize();
  return (
    <nav className={cn(styles.navigation)}>
      <div className={cn(styles.navContainer)}>
        <Photo width={180} height={70} />
        {size.width > CONST.TABLET_SIZE && <Menu />}
        <MainButton className={cn(styles.button)} border backWhite>
          <ButtonText blue bold>
            Login
          </ButtonText>
        </MainButton>
      </div>
    </nav>
  );
}

export default Navigation;
