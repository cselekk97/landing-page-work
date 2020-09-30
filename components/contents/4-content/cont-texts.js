import React from "react";
import cn from "classnames";

import styles from "./cont-texts.module.css";
import TitleText from "../../texts/title-text";
import ParagrapheText from "../../texts/paragraphe-text";
import useWindowSize from "../../../hooks/useWindowSize";
import CONST from "../../../constants/index";

function ContTexts() {
  const size = useWindowSize();
  return (
    <div className={cn(styles.contTexts)}>
      {size.width > CONST.TABLET_SIZE && (
        <TitleText med>A rethink of how we work</TitleText>
      )}
      {size.width > CONST.TABLET_SIZE && (
        <ParagrapheText className={cn(styles.paragrapheText)}>
          Being a freelancer is a rollercoaster of emotions. We built Slate to
          keep your
        </ParagrapheText>
      )}

      {size.width < CONST.TABLET_SIZE && <TitleText med>File Tasks</TitleText>}
      {size.width < CONST.TABLET_SIZE && (
        <ParagrapheText className={cn(styles.resP)}>
          Being a freelancer is a rollercoaster <br />
          of emotions. We built Slate to keep <br />
          your freelance business <br />
          less stressful.
        </ParagrapheText>
      )}
    </div>
  );
}

export default ContTexts;
