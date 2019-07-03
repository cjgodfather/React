import React, { Component } from "react";
import Input from "../../components/UI/input/input";
import classes from "./payment.css";
import Button from "../../components/UI/button/button";

class PaymentInfo extends Component {
  state = {
    buyerinfo: {
      firstname: {
        inputType: "input",
        type: "text",
        name: "firstname",
        value: "",
        placeholder: "firstname",
        valid: false,
        touched: false,
        errorMsg: "Ops, firstname cannot be longer than 10",
        validation: { required: true, max_length: 10 }
      },
      lastname: {
        inputType: "input",
        type: "text",
        name: "lastname",
        value: "",
        placeholder: "lastname",
        valid: false,
        touched: false,
        errorMsg: "Ops, lastname cannot be longer than 10",
        validation: { required: true, max_length: 10 }
      },
      email: {
        inputType: "input",
        name: "email",
        type: "email",
        value: "",
        placeholder: "email",
        valid: false,
        touched: false,
        errorMsg: "email adress must contain @",
        validation: { required: true, contain: "@" }
      },
      confirm_email: {
        inputType: "input",
        name: "confirm email",
        value: "",
        type: "email",
        placeholder: "confirm email",
        valid: false,
        touched: false,
        errorMsg: "emails are not the same !",
        validation: { required: true, contain: "@", isEqualToEmail: true }
      }
    },
    paymentinfo: {
      card_type: {
        inputType: "select",
        name: "card type",
        value: "",
        placeholder: "card type",
        touched: false,
        options: [
          { value: "visa", display: "visa" },
          { value: "mastercard", display: "mastercard" },
          { value: "american_express", display: "american express" }
        ],
        valid: false,
        validation: {}
      },
      card_number: {
        inputType: "input",
        name: "card number",
        value: "",
        type: "number",
        placeholder: "card number",
        valid: false,
        touched: false,
        errorMsg:
          "card number must be number type and cannot be longer than 16 digits",
        validation: { required: true, max_length: 16 }
      },
      exp_month: {
        inputType: "select",
        name: "expiration month",
        value: "",
        touched: true,
        placeholder: "month",
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
      exp_year: {
        inputType: "select",
        name: "expiration year",
        value: "",
        touched: false,
        placeholder: "year",
        options: [
          { value: "2019", display: "2019" },
          { value: "2020", display: "2020" },
          { value: "2021", display: "2021" },
          { value: "2022", display: "2022" }
        ],
        valid: false,
        validation: {}
      },

      security_code: {
        inputType: "input",
        name: "security code",
        value: "",
        type: "number",
        placeholder: "sec code",
        valid: false,
        touched: false,
        errorMsg: "invalid type, security code must be number",
        validation: { required: true, max_length: 3 }
      }
    },
    billinginfo: {
      country: {
        inputType: "input",
        name: "country",
        value: "",
        type: "text",
        placeholder: "country",
        valid: false,
        touched: false,
        errorMsg: "something is wrong",
        validation: { required: true, max_length: 10 }
      },
      address: {
        inputType: "input",
        name: "address",
        value: "",
        type: "text",
        placeholder: "address",
        valid: false,
        touched: false,
        errorMsg: "something is wrong",
        validation: { required: true, max_length: 16 }
      },
      city: {
        inputType: "input",
        name: "city",
        value: "",
        type: "text",
        placeholder: "city",
        valid: false,
        touched: false,
        errorMsg: "something is wrong",
        validation: { required: true }
      },
      state_loc: {
        inputType: "input",
        name: "state",
        value: "",
        type: "text",
        placeholder: "state",
        valid: false,
        touched: false,
        errorMsg: "something is wrong",
        validation: { required: true }
      },
      postcode: {
        inputType: "input",
        name: "zipcode",
        value: "",
        type: "number",
        placeholder: "zipcode",
        valid: false,
        touched: false,
        errorMsg: "zipcode must be number and cannot be longer than 5 digits",
        validation: { required: true, max_length: 5 }
      }
    },
    formIsValid: false
  };

  onChangeHandler = (event, id) => {
    const updatedInfo = { ...this.state.paymentInfo };
    const updatedInfoEl = { ...updatedInfo[id] };
    updatedInfoEl.value = event.target.value;
    updatedInfoEl.touched = true;
    updatedInfoEl.valid = this.checkValidity(
      updatedInfoEl.value,
      updatedInfoEl.validation
    );
    updatedInfo[id] = updatedInfoEl;

    let formIsValid = true;
    for (let key in updatedInfo) {
      formIsValid = updatedInfo[key].valid;
    }

    this.setState({ paymentInfo: updatedInfo, formIsValid: formIsValid });
  };

  checkValidity = (val, validation) => {
    let isValid = true;
    if (validation.max_length) {
      isValid = val.length <= validation.max_length && isValid;
    }

    if (validation.contain) {
      isValid = val.indexOf(validation.contain) !== -1 && isValid;
    }

    return isValid;
  };

  render() {
    let inputDataArr = [];
    for (let key in this.state.paymentInfo) {
      inputDataArr.push({
        id: key,
        config: this.state.paymentInfo[key]
      });
    }

    console.log(inputDataArr);

    let inputSets;

    inputSets = inputDataArr.map(el => (
      <Input
        key={el.id}
        name={el.config.name}
        inputtypes={el.config.inputType}
        type={el.config.type}
        placeholder={el.config.placeholder}
        value={el.config.value}
        touched={el.config.touched}
        options={el.config.options}
        changed={event => this.onChangeHandler(event, el.id)}
        errmsg={el.config.errorMsg}
        valid={el.config.valid}
      />
    ));

    return (
      <div className={classes.container}>
        <form className={classes.form}>
          {inputSets}
          <Button disabled={!this.state.formIsValid}>Next</Button>
        </form>
      </div>
    );
  }
}

export default PaymentInfo;
