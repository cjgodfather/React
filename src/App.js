import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Login from "./containers/login/login";
import Signup from "./containers/signup/signup";
import EventDetail from "./components/eventdetail/EventDetail";
import HomePage from "./components/home/home";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Checkout from "./containers/checkout/checkout";
import CategoryEventList from "./components/categoryEventList/categoryEventList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/category/:name" exact component={CategoryEventList} />
            <Route path="/event/:slug/checkout" exact component={Checkout} />
            <Route path="/event/:slug" exact component={EventDetail} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
