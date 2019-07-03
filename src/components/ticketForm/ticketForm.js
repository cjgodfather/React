import React from "react";
import classes from "./ticketForm.css";

const TicketForm = props => {
  return (
    <div className={classes.container}>
      <div className={classes.ticket}>
        <h5>{props.ticketType}</h5>
        <p>Price:{props.price}</p>
      </div>
      <form className={classes.form}>
        <select
          className={classes.select}
          value={props.qty}
          onChange={props.selected}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </form>
    </div>
  );
};

export default TicketForm;
