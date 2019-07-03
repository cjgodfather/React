import React from "react";
import classes from "./category.css";
import { Link } from "react-router-dom";

const Category = props => {
  return (
    <div className={classes.category}>
      <Link to={`/category/${props.name}`}>
        <div onClick={props.onCatClicked}>
          <img className={classes.img} src={props.image} alt="category img" />
          <div>{props.name}</div>
        </div>
      </Link>
    </div>
  );
};

export default Category;
