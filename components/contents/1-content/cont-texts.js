import React from "react";
import cn from "classnames";

import styles from "./cont-text.module.css";
import TitleText from "../../texts/title-text";
import ParagrapheText from "../../texts/paragraphe-text";

function ContText() {
  return (
    <div className={cn(styles.contTexts)}>
      <TitleText yellow bold>Just Type</TitleText>
      <TitleText className={cn(styles.titleHuge)} med bold>
        Fastest way to navigate
      </TitleText>
      <ParagrapheText>
        Most calendars are designed for teams.<br />
        Slate is designed for freelancers.
      </ParagrapheText>
    </div>
  );
}

export default ContText;