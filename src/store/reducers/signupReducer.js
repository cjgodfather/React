const initialState = {};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP": {
      console.log("signed up");
    }
    default: {
      return state;
    }
  }
};

export default signupReducer;
