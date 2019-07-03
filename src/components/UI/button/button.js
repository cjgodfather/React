import React from "react";
import classes from "./button.css";

const Button = props => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.clicked}
      className={[classes.button, classes[props.BtnType]].join(" ")}
    >
      {props.children}
    </button>
  );
};

export default Button;
