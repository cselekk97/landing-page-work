import React from "react";
import NavButton from "./navigation-button";
import cn from "classnames";

import styles from "./menu.module.css";
import TextTitle from "./text-title";

function Menu() {
  return (
      <div className={cn(styles.menu)}>
      <NavButton>
        <TextTitle>Home</TextTitle>
      </NavButton>
      <NavButton>
        <TextTitle>Product</TextTitle>
      </NavButton>
      <NavButton>
        <TextTitle>About</TextTitle>
      </NavButton>
      <NavButton>
        <TextTitle>Contact</TextTitle>
      </NavButton>
      </div>
  );
}

export default Menu;
