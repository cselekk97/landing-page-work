import React from "react";
import cn from "classnames";
import styles from "./cont-texts.module.css";

import TitleText from "../../texts/title-text";
import ParagrapheText from "../../texts/paragraphe-text";
import ButtonText from '../../texts/button-text'
import MainButton from '../../buttons/main-button'

function ContTexts() {
  return (
    (
        <div className={cn(styles.container)}>
      <div className={cn(styles.contTexts1)}>
        <TitleText med bold>
          Pricing
        </TitleText>
        <ParagrapheText>
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </ParagrapheText>
      </div>
    
    
      <div className={cn(styles.contTexts2)}>
        <TitleText className={cn(styles.firstTitle)}>30-DAY FREE TRIAL</TitleText>
        <div className={cn(styles.texts2Price)}>
          <TitleText bold huge yellow>
            $5
          </TitleText>
          <ParagrapheText>
            /month per <br /> user
          </ParagrapheText>
        </div>
        <ParagrapheText className={cn(styles.lastPrg)}>Most calendars are designed for teams. </ParagrapheText>
        <MainButton backBlue><ButtonText  white>Get Started</ButtonText></MainButton>
      </div>
      </div>
    )
  );
}

export default ContTexts;
