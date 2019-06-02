import { combineReducers } from "redux";
import auth from "./authReducer";
import recipes from "./recipeReducer";
import modal from "./modalReducer";
import user from "./userReducer";
import { reducer as formReducer } from "redux-form";

// combines all reducers into a single root reducer
const rootReducer = combineReducers({
  auth,
  modal,
  recipes,
  user,
  form: formReducer
});

export default rootReducer;
