import { combineReducers } from "redux";
import cartReducer from "./cart.reducer";
import uiReducer from "./ui.reducer";

const reducers = combineReducers({
  cartReducer,
  uiReducer,
});

export default reducers;
