import React from "react";
import cn from "classnames";

import styles from "./cont-button.module.css";
import ButtonText from "../../texts/button-text";
import MainButton from "../../buttons/main-button";

function ContButton() {
  return (
    <div className={cn(styles.contButton)}>
      <MainButton backBlue className={cn(styles.button)}>
        <ButtonText white>Get Started For Free</ButtonText>
      </MainButton>
    </div>
  );
}

export default ContButton;
