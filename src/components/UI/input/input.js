import React from "react";
import classes from "./input.css";

const Input = props => {
  switch (props.inputtype) {
    case "input":
      return (
        <div>
          <label className={classes.label}>{props.label}</label>
          <input
            className={classes.input}
            onChange={props.changed}
            value={props.inputValue}
            type={props.type}
            name={props.name}
            {...props}
          />
          <span className={classes.span}>{props.msg}</span>
        </div>
      );
    case "select":
      return (
        <div>
          <label className={classes.label}>{props.label}</label>
          <select
            value={props.inputValue}
            onChange={props.changed}
            name={props.name}
            {...props}
          >
            {props.options.map(opt => (
              <option key={opt.display} value={opt.value}>
                {opt.display}
              </option>
            ))}
          </select>
          <span className={classes.span}>{props.msg}</span>
        </div>
      );
    default:
      return (
        <div>
          <label className={classes.label}>{props.label}</label>
          <input
            onChange={props.changed}
            value={props.inputValue}
            name={props.name}
            type={props.type}
            {...props}
          />
          <span className={classes.span}>{props.msg}</span>
        </div>
      );
  }
};

export default Input;
