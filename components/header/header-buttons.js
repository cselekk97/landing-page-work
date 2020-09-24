import React from "react";
import cn from "classnames";

import styles from "./header-buttons.module.css";
import MainButton from "../buttons/main-button";
import ButtonText from "../texts/button-text";

function HeaderButtons() {
  return (
    <div className={cn(styles.headerButtons)}>
      <MainButton backBlue className={cn(styles.getStarted)}>
        <ButtonText white>Get Started</ButtonText>
      </MainButton>
      <MainButton backWhite className={cn(styles.try)}>
        <ButtonText black bold>Try For Free</ButtonText>
      </MainButton>
    </div>
  );
}

export default HeaderButtons;
