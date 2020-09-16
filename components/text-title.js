import React from "react";

import cn from "classnames";
import styles from "./text-title.module.css";

function TextTitle({
  bold = false,
  blue = false,
  white = false,
  black = false,
  children,
}) {
  return (
    <h2
      className={cn(
        styles.title,
        bold && styles.bold,
        blue && styles.btnBlue,
        white && styles.btnWhite,
        black && styles.btnBlack,
      )}
    >
      {children}
    </h2>
  );
}

export default TextTitle;
