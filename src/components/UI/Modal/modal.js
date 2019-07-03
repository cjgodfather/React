import React from "react";
import classes from "./modal.css";

const Modal = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <span onClick={props.clicked} className={classes.close}>
          &times;
        </span>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
