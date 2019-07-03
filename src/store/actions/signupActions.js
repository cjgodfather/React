export const SINGUP = (username, password, email) => {
  return dispatch => {
    dispatch({ type: "SIGNUP", username, password, email });
  };
};
