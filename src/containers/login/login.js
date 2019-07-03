import React, { Component } from "react";
import Input from "../../components/UI/input/input";
import Button from "../../components/UI/button/button";
import classes from "./login.css";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  loginHandler = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  changeHandler = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  render() {
    return (
      <form className={classes.form} onSubmit={this.loginHandler}>
        <div className={classes.username}>
          <Input
            label="username:"
            type="text"
            name="username"
            value={this.state.username}
            placeholder="enter your username"
            changed={this.changeHandler}
          />
        </div>
        <div className={classes.password}>
          <Input
            label="password:"
            type="password"
            name="password"
            value={this.state.password}
            placeholder="enter your password"
            changed={this.changeHandler}
          />
        </div>
        <div className={classes.button}>
          <Button BtnType="success" clicked={this.loginHandler}>
            Login
          </Button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) =>
      dispatch({ type: "LOGIN", username, password })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
