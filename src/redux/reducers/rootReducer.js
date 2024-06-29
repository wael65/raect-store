import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import authReducer from "./authReducer";
import brandReducer from "./brandREducer";
import productsReducer from "./productsReducer";

export default combineReducers({
  productsReducer: productsReducer,
  categoryReducer: categoryReducer,
  brandReducer: brandReducer,
  authReducer: authReducer,
});
