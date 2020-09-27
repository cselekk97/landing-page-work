import React from "react";

import cn from "classnames"
import styles from "../components/header/photo.module.css"

function Screen2({className}) {
  return (
    <div className={cn(styles.photo,className)} style={{order:1}}>
      <img className={styles.img} src="/screen2.png" alt="screen2" />
    </div>
  );
}

export default Screen2;