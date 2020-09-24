import React from "react";

import cn from "classnames"
import styles from "../components/header/photo.module.css"

function Vector3({className}) {
  return (
    <div className={cn(styles.photo,className)} style={{}}>
      <img className={styles.img} src="/Vector.png" alt="vector3" />
    </div>
  );
}

export default Vector3;