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
    <h2
      className={cn(
        styles.btnText,
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

export default ButtonText;
