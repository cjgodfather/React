import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { EventProvider } from "./utils/context";
import combinedReducer from "./store/reducers/combinedReducer";
import { Provider } from "react-redux";

const store = createStore(combinedReducer);

const app = (
  <Provider store={store}>
    <EventProvider>
      <App />
    </EventProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
