import React from "react";
import NavButton from "../buttons/navigation-button";
import cn from "classnames";

import styles from "./menu.module.css";
import ButtonText from "../texts/button-text.js";

function Menu() {
  return (
      <div className={cn(styles.menu)}>
      <NavButton>
        <ButtonText>Home</ButtonText>
      </NavButton>
      <NavButton>
        <ButtonText>Product</ButtonText>
      </NavButton>
      <NavButton>
        <ButtonText>About</ButtonText>
      </NavButton>
      <NavButton>
        <ButtonText>Contact</ButtonText>
      </NavButton>
      </div>
  );
}

export default Menu;
