import React from "react";
import classes from "./title.css";

const Title = props => {
  switch (props.Type) {
    case "h1":
      return <h1>{props.content}</h1>;
    case "h2":
      return <h2>{props.content}</h2>;
    case "h3":
      return <h3>{props.content}</h3>;
    case "h5":
      return <h5>{props.content}</h5>;
    default:
      return <h1>{props.content}</h1>;
  }
};

export default Title;
