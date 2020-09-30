import React from "react";
import cn from "classnames";

import styles from "./cont-texts.module.css";
import TitleText from "../../texts/title-text";
import ParagrapheText from "../../texts/paragraphe-text";
import ButtonText from "../../texts/button-text";
import useWindowSize from "../../../hooks/useWindowSize";
import CONST from "../../../constants/index";
import Button from "../../buttons/button";

function ContTexts() {
  const size = useWindowSize();
  return (
    <div className={cn(styles.contTexts)}>
      {size.width > CONST.TABLET_SIZE && <TitleText>Variable fonts</TitleText>}
      {size.width > CONST.TABLET_SIZE && (
        <ParagrapheText className={cn(styles.paragrapheText)}>
          Most calendars are designed for
          <br />
          teams. Slate is designed <br />
          for freelancers
        </ParagrapheText>
      )}

      {size.width < CONST.TABLET_SIZE && (
        <TitleText className={cn(styles.resT)}>OpenType features</TitleText>
      )}
      {size.width < CONST.TABLET_SIZE && (
        <ParagrapheText className={cn(styles.resP)}>
          Most calendars are designed <br/> for teams. Slate is designed <br/> for
          freelancers who wan.
        </ParagrapheText>
      )}

      <Button classNames={cn(styles.contButton)}>
        <ButtonText blue>LEARN MORE</ButtonText>
      </Button>
    </div>
  );
}

export default ContTexts;
