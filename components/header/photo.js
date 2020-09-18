import React from "react";
import cn from "classnames";

import styles from "./photo.module.css";

function Photo({src = "https://i.hizliresim.com/93iOoa.png",alt,width,height,className}) {
  return (
      <div className={cn(styles.photo,className)} style={{width:width , height:height}}>
      <img className={styles.img} src={src} alt={alt} />
      </div>
  );
}

export default Photo;