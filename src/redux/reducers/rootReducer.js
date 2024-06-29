import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import authReducer from "./authReducer";
import brandReducer from "./brandREducer";

export default combineReducers({
  categoryReducer: categoryReducer,
  brandReducer: brandReducer,
  authReducer: authReducer,
});
