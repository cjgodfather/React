import React, { Component } from "react";
import OrderSummary from "../../components/orderSummary/orderSummary";
import GenericForm from "../../components/genericForm/genericForm";
import Button from "../../components/UI/button/button";
import classes from "./checkout.css";
import { EventContext } from "../../utils/context";

class Checkout extends Component {
  state = {
    form: [
      {
        inputType: "input",
        type: "text",
        name: "firstname",
        value: "",
        label: "Firstname",
        valid: false,
        touched: false,
        errorMsg: "Ops, firstname cannot be longer than 10",
        validation: { required: true, max_length: 10 }
      },
      {
        inputType: "input",
        type: "text",
        name: "lastname",
        value: "",
        label: "Lastname",
        valid: false,
        touched: false,
        errorMsg: "Ops, lastname cannot be longer than 10",
        validation: { required: true, max_length: 10 }
      },
      {
        inputType: "input",
        name: "email",
        type: "email",
        value: "",
        label: "Email",
        valid: false,
        touched: false,
        errorMsg: "email adress must contain @",
        validation: { required: true, contain: "@" }
      },
      {
        inputType: "input",
        name: "confirm email",
        value: "",
        type: "email",
        label: "Confirm email",
        valid: false,
        touched: false,
        errorMsg: "emails are not the same !",
        validation: { required: true, contain: "@", isEqualToEmail: true }
      },
      {
        inputType: "select",
        name: "card type",
        value: "",
        label: "Card type",
        touched: false,
        options: [
          { value: "visa", display: "visa" },
          { value: "mastercard", display: "mastercard" },
          { value: "american_express", display: "american express" }
        ],
        valid: false,
        validation: {}
      },
      {
        inputType: "input",
        name: "card number",
        value: "",
        type: "number",
        label: "Card number",
        valid: false,
        touched: false,
        errorMsg:
          "card number must be number type and cannot be longer than 16 digits",
        validation: { required: true, max_length: 16 }
      },
      {
        inputType: "select",
        name: "expiration month",
        value: "",
        touched: true,
        label: "Month",
        options: [
          { value: "Jan", display: "January" },
          { value: "Feb", display: "Febuary" },
          { value: "Mar", display: "March" },
          { value: "Apr", display: "April" },
          { value: "May", display: "May" },
          { value: "Jun", display: "June" },
          { value: "Jul", display: "July" },
          { value: "Aug", display: "August" },
          { value: "Sep", display: "September" },
          { value: "Oct", display: "October" },
          { value: "Nov", display: "November" },
          { value: "Dec", display: "December" }
        ],
        valid: false,
        validation: {}
      },
      {
        inputType: "select",
        name: "expiration year",
        value: "",
        touched: false,
        label: "Year",
        options: [
          { value: "2019", display: "2019" },
          { value: "2020", display: "2020" },
          { value: "2021", display: "2021" },
          { value: "2022", display: "2022" }
        ],
        valid: false,
        validation: {}
      },
      {
        inputType: "input",
        name: "security code",
        value: "",
        type: "number",
        label: "Sec code",
        valid: false,
        touched: false,
        errorMsg: "invalid type, security code must be number",
        validation: { required: true, max_length: 3 }
      },
      {
        inputType: "input",
        name: "country",
        value: "",
        type: "text",
        label: "Country",
        valid: false,
        touched: false,
        errorMsg: "something is wrong",
        validation: { required: true, max_length: 10 }
      },
      {
        inputType: "input",
        name: "address",
        value: "",
        type: "text",
        label: "Address",
        valid: false,
        touched: false,
        errorMsg: "something is wrong",
        validation: { required: true, max_length: 16 }
      },
      {
        inputType: "input",
        name: "city",
        value: "",
        type: "text",
        label: "City",
        valid: false,
        touched: false,
        errorMsg: "something is wrong",
        validation: { required: true }
      },
      {
        inputType: "input",
        name: "state",
        value: "",
        type: "text",
        label: "State",
        valid: false,
        touched: false,
        errorMsg: "something is wrong",
        validation: { required: true }
      },
      {
        inputType: "input",
        name: "zipcode",
        value: "",
        type: "number",
        label: "Zip Code",
        valid: false,
        touched: false,
        errorMsg: "zipcode must be number and cannot be longer than 5 digits",
        validation: { required: true, max_length: 5 }
      }
    ],
    orderDisabled: true
  };

  inputChangeHandler = (event, inputName) => {
    const tempForm = [...this.state.form];
    const tempInputIndex = tempForm.findIndex(el => el.name === inputName);
    const tempInputObj = { ...tempForm[tempInputIndex] };
    tempInputObj.value = event.target.value;
    tempInputObj.touched = true;
    tempInputObj.valid = this.checkValidity(
      tempInputObj.value,
      tempInputObj.validation
    );

    tempForm[tempInputIndex] = tempInputObj;
    console.log(tempForm);
    this.setState({ form: tempForm });
  };

  checkValidity = (inputValue, validationRule) => {
    if (inputValue.length < validationRule.max_length) {
      return true;
    } else if (inputValue.includes(validationRule.contain)) {
      return true;
    } else {
      return false;
    }
  };

  static contextType = EventContext;

  render() {
    const { eventDetail } = this.context;
    console.log(this.state.form);
    const checkoutForm = this.state.form.map(el => (
      <GenericForm
        inputLabel={el.label}
        inputType={el.inputType}
        inputOptions={el.options}
        type={el.type}
        value={el.value}
        inputTouched={el.touched}
        inputValidity={el.valid}
        name={el.name}
        inputErrMsg={el.errorMsg}
        onInputChange={event => this.inputChangeHandler(event, el.name)}
      />
    ));

    return (
      <div className={classes.container}>
        <div className={classes.event}>
          <h3>{eventDetail.name}</h3>
          <p>{eventDetail.location}</p>
          <p>{eventDetail.date}</p>
          <img src={eventDetail.eventImage} alt="img" />
        </div>
        <div className={classes.summary}>
          <h2>Your Ticket Summary</h2>
          <OrderSummary orderItems={eventDetail.ticketinfo.tickets} />
        </div>
        <div className={classes.form}>{checkoutForm}</div>
        <div className={classes.button}>
          <Button BtnType="success" disabled={this.state.orderDisabled}>
            Order
          </Button>
        </div>
      </div>
    );
  }
}

export default Checkout;
