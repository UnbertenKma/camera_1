import { combineReducers } from "redux";
import { menuReducer } from "./menuReducer";

const reducers = combineReducers({
  allMenus: menuReducer,
});

export default reducers;
