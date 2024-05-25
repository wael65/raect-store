import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import authReducer from "./authReducer";

export default combineReducers({
  categoryReducer: categoryReducer,
  authReducer: authReducer,
});
