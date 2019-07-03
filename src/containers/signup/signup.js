import React, { Component } from "react";
import Input from "../../components/UI/input/input";
import Button from "../../components/UI/button/button";
import classes from "./signup.css";
import { connect } from "react-redux";

const validationRules = {
  username: /^[a-z\d]{4,8}$/,
  password: /^[\w@-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

class Signup extends Component {
  state = {
    signupFormInputs: [
      {
        name: "username",
        value: "",
        label: "username",
        type: "text",
        msg: "username must be at least 8 letters",
        valid: false
      },
      {
        name: "password",
        value: "",
        label: "password",
        type: "password",
        msg:
          "password must be at least 8 letters and contain special symbol@, _, !, *.",
        valid: false
      },
      {
        name: "email",
        value: "",
        label: "email",
        type: "email",
        msg: "email must have @",
        valid: false
      }
    ]
  };

  loginHandler = e => {
    e.preventDefault();
    console.log("signed up");
  };

  changeHandler = (event, inputName) => {
    const tempInputs = [...this.state.signupFormInputs];
    const tempInputIndex = tempInputs.findIndex(el => el.name === inputName);
    const tempInput = tempInputs[tempInputIndex];
    tempInput.value = event.target.value;
    tempInput.valid = this.checkValidity(
      tempInput,
      validationRules[tempInput.name]
    );

    console.log(tempInput);
    tempInputs[tempInputIndex] = tempInput;

    this.setState({ signupFormInputs: tempInputs });
  };

  checkValidity = (input, validationRules) => {
    return validationRules.test(input.value);
  };

  render() {
    const formInputs = this.state.signupFormInputs.map(el => {
      return (
        <Input
          key={el.name}
          label={el.label}
          name={el.name}
          inputValue={el.value}
          type={el.type}
          msg={el.msg}
          validity={el.valid}
          changed={event => this.changeHandler(event, el.name)}
        />
      );
    });
    return (
      <form className={classes.form} onSubmit={this.submitHandler}>
        {formInputs}
        <div className={classes.button}>
          <Button BtnType="success" clicked={this.loginHandler}>
            Signup
          </Button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: (username, password, email) => {
      dispatch({ type: "SIGNUP", username, password, email });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Signup);
