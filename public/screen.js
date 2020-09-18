import React from "react";

import cn from "classnames"
import styles from "../components/header/photo.module.css"
import Photo from "../components/header/photo";

function Screen({className}) {
  return (
    <div className={cn(styles.photo,className)} style={{order:3 ,}}>
      <img className={styles.img} src="/screen.png" alt="screen" />
    </div>
  );
}

export default Screen;
