import React from "react";
import classes from "./Jumbotron.css";

const Jumbotron = props => {
  return <img src={props.image} className={classes.image} alt="jumbotron" />;
};

export default Jumbotron;
