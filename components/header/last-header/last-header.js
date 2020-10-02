import React from "react";
import cn from "classnames";
import styles from "./last-header.module.css";

import Menu from "../menu";
import Photo from "../photo";
import {Facebook2,Linkedin,Twitter} from '../../icons/index'

function LastHeader() {
  return (
    <nav className={cn(styles.navigation)}>
      <div className={cn(styles.navContainer)}>
        <Photo width={266} height={78} />
        <Menu className={cn(styles.lastMenu)}/>
        <div className={styles.svgContainer}>
        <Facebook2/>
        <Linkedin/>
        <Twitter/>
        </div>
      </div>
    </nav>
  );
}

export default LastHeader;
