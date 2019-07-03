import React from "react";
import Input from "../UI/input/input";
import classes from "./EventFilter.css";
import Button from "../UI/button/button";

const EventFilter = ({ data, onChanged, onSubmitted }) => {
  return (
    <form onSubmit={onSubmitted} className={classes.form}>
      {data.map(el => (
        <Input
          key={el.label}
          inputtypes={el.inputType}
          label={el.label}
          type={el.type}
          changed={event => onChanged(event, el.label)}
          placeholder={el.placeholder}
          value={el.value}
        />
      ))}
      <Button BtnType="success" className={classes.button}>
        <i class="fas fa-search" />
      </Button>
    </form>
  );
};

export default EventFilter;
