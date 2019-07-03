const initialState = { username: null, password: null };

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return Object.assign({}, state, {
        username: action.username,
        password: action.password
      });

    default: {
      return state;
    }
  }
};

export default loginReducer;
