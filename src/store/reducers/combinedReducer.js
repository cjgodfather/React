import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer
});

export default combinedReducer;
