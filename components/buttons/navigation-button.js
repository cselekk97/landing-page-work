import React from "react";
import Button from "./button";

import styles from "./navigation-button.module.css";

function NavButton({ children, ...props }) {
  return (
    <Button className={styles.navButton} {...props}>
      {children}
    </Button>
  );
}

export default NavButton;
