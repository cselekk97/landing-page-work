import React from "react";

import cn from "classnames";
import styles from "./title-text.module.css";

function TitleText({
  children,
  huge,
  med,
  blue,
  yellow,
  bold,
  className,
  ...props
}) {
  return (
    <h2
      className={cn([
        styles.titleText,
        huge && styles.hugeText,
        med && styles.medText,
        blue && styles.blue,
        yellow && styles.yellow,
        bold && styles.boldText,
        className,
      ])}
      {...props}
    >
      {children}
    </h2>
  );
}

export default TitleText;
