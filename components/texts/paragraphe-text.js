import React from "react";

import cn from "classnames";
import styles from "./paragraphe-text.module.css";

function ParagrapheText({
  children,className
}) {
  return (
    <p
      className={cn(
        [styles.prgText,className]
      )}
    >
      {children}
    </p>
  );
}

export default ParagrapheText;