import React from "react";

import cn from "classnames";
import styles from "./button-text.module.css";

function ButtonText({
  bold = false,
  blue = false,
  white = false,
  black = false,
  children,
}) {
  return (
    <span
      className={cn(
        styles.btnText,
        bold && styles.bold,
        blue && styles.btnBlue,
        white && styles.btnWhite,
        black && styles.btnBlack,
      )}
    >
      {children}
    </span>
  );
}

export default ButtonText;
