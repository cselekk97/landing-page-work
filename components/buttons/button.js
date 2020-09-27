import React from "react";
import cn from "classnames";
import styles from "./button.module.css";

function Button({ children, classNames, ...props }) {
  return (
    <>
    <button type="button" className={cn(styles.button, classNames)} {...props}>
      {children}
    </button>

    <style jsx>{`
        :global(.js-focus-visible) :focus:not(.focus-visible) {
          outline: none;
        }

        

       
      `}</style>
      </>
  );
}

export default Button;
