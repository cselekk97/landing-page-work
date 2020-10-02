import React from "react";
import { Link } from "react-scroll";
import cn from "classnames";

import NavButton from "../buttons/navigation-button";
import styles from "./menu.module.css";
import ButtonText from "../texts/button-text.js";

function Menu({className,...props}) {
  return (
    <div className={cn(styles.menu,className,)} {...props}>
      <NavButton>
        <Link
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => {
            document.location.reload(false)
            }}
        >
          <ButtonText>Home</ButtonText>
        </Link>
      </NavButton>
      <NavButton>
        <Link
          activeClass="active"
          to="product"
          spy={true}
          smooth={true}
          offset={-50}
          duration={750}
          
        >
          <ButtonText>Product</ButtonText>
        </Link>
      </NavButton>
      <NavButton>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-90}
          duration={750}
        >
          <ButtonText>About</ButtonText>
        </Link>
      </NavButton>
      <NavButton>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={750}
        >
          <ButtonText>Contact</ButtonText>
        </Link>
      </NavButton>
    </div>
  );
}

export default Menu;
