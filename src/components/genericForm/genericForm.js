import React from "react";
import Input from "../UI/input/input";

const GenericForm = props => {
  return (
    <form>
      <Input
        label={props.inputLabel}
        inputtype={props.inputType}
        value={props.inputValue}
        options={props.inputOptions}
        type={props.type}
        name={props.name}
        valid={props.inputValidity}
        changed={props.onInputChange}
        touched={props.inputTouched}
        errmsg={props.inputErrMsg}
      />
    </form>
  );
};

export default GenericForm;
