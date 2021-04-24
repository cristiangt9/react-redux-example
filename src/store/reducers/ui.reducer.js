import * as Actions from "../actions";
const initialState = {
  cartIsVisible: false,
  notification: null,
};

const uiReducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case Actions.TOGGLE:
      return { ...state, cartIsVisible: !state.cartIsVisible };

    case Actions.SHOW_NOTIFICATION:
      return { ...state, notification: payload };

    case Actions.HIDE_NOTIFICATION:
      return {
        ...state,
        notification: initialState.notification,
      };

    default:
      return state;
  }
};

export default uiReducer;
