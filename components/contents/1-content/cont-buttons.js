import React from "react";
import cn from "classnames";

import styles from "./cont-buttons.module.css";
import MainButton from "../../buttons/main-button";
import ButtonText from "../../texts/button-text";

function ContButtons() {
  return (
    <div className={cn(styles.contentButtons)}>
        <MainButton backBlue className={cn(styles.firstBtn)}>
            <ButtonText white bold >Download</ButtonText>
        </MainButton>
        <MainButton backWhite border className={cn(styles.secondBtn)}>
            <ButtonText blue bold>See Walkthrough</ButtonText>
        </MainButton>
    </div>
  );
}

export default ContButtons;