import React from "react";
import cn from "classnames";

import styles from "./header-title.module.css";
import TitleText from "../texts/title-text";
import ParagrapheText from "../texts/paragraphe-text";
import CONST from "../../constants/index";
import useWindowSize from "../../hooks/useWindowSize";

function HeaderTitle() {
  const size = useWindowSize();

  return (
    <div className={cn(styles.headerTitle)}>
      <TitleText className={cn(styles.titleHuge)} huge blue bold>
        Lightning fast prototyping
      </TitleText>
      {size.width > CONST.TABLET_SIZE && (
        <ParagrapheText>
          Most calendars are designed for teams. Slate is <br /> designed for
          freelancers.
        </ParagrapheText>
      )}
      {size.width < CONST.TABLET_SIZE && (
        <ParagrapheText className={cn(styles.resP)}>Most calendars are designed <br/> for teams. </ParagrapheText>
      )}
    </div>
  );
}

export default HeaderTitle;
