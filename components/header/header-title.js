import React from "react";
import cn from "classnames";

import styles from "./header-title.module.css";
import TitleText from "../texts/title-text";
import ParagrapheText from "../texts/paragraphe-text";

function HeaderTitle() {
  return (
    <div className={cn(styles.headerTitle)}>
      <TitleText className={cn(styles.titleHuge)} huge blue bold>
        Lightning fast <br />prototyping
      </TitleText>
      <ParagrapheText>
        Most calendars are designed for teams. Slate is <br/> designed for
        freelancers.
      </ParagrapheText>
    </div>
  );
}

export default HeaderTitle;
