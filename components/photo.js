import React from "react";
import cn from "classnames";

import styles from "./photo.module.css";

function Photo({src = "https://i.hizliresim.com/93iOoa.png",alt}) {
  return (
      <div className={cn(styles.photo)}>
      <img className={styles.img} src={src} alt={alt} />
      </div>
  );
}

export default Photo;