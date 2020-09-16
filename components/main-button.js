import React from "react";
import Button from "./button";
import cn from "classnames";
import styles from "./main-button.module.css";

function MainButton({ children,className,backBlue,backWhite,border=false }) {
  return (
    <Button
      className={cn(
        styles.mainBtn,
        className,
        backBlue && styles.backBlue,
        backWhite && styles.backWhite,
        border && styles.border
      )}
    >
      {children}
    </Button>
  );
}

export default MainButton;
