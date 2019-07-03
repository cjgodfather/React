import React from "react";
import classes from "./Event.css";
import Button from "../../components/UI/button/button";
import { Link } from "react-router-dom";

const Event = props => {
  return (
    <div className={classes.event} onClick={props.clicked}>
      <img className={classes.img} src={props.image} alt="event img" />
      <div>
        <h5>{props.name}</h5>
        <p>Date:{props.date}</p>
        <p>Location:{props.location}</p>
        <p className={classes.about}>About:{props.description}</p>
        <Link to={`/event/${props.slug}`}>
          <Button BtnType="success" clicked={props.onDetailClicked}>
            See details
          </Button>
        </Link>
        {props.bookmarked ? (
          <Button BtnType="danger" clicked={props.onUnbookmarkClicked}>
            Unmark
          </Button>
        ) : (
          <Button BtnType="danger" clicked={props.onBookmarkClicked}>
            <i className="fas fa-bookmark" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Event;
