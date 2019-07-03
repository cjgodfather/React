import React from "react";
import classes from "./footerList.css";
import { Link } from "react-router-dom";

const FooterList = props => {
  const list = props.content.map(el => <li>{el}</li>);

  return (
    <div className={classes.footer}>
      <h2>{props.title}</h2>
      <Link className={classes.list} to="/">
        <ul className={classes.ul}>{list}</ul>
      </Link>
    </div>
  );
};

export default FooterList;
