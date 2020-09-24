import React from "react";

import cn from "classnames"
import styles from "../components/header/photo.module.css"

function Screen1({className}) {
  return (
    <div className={cn(styles.photo,className)} style={{order:1}}>
      <img className={styles.img} src="/screen1.png" alt="screen1" />
    </div>
  );
}

export default Screen1;