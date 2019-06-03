import { combineReducers } from "redux";
import auth from "./authReducer";
import recipes from "./recipeReducer";
import modal from "./modalReducer";
import user from "./userReducer";
import journal from "./journalEntryReducer";
import { reducer as formReducer } from "redux-form";
import annotations from "./formReducer"

// combines all reducers into a single root reducer
const rootReducer = combineReducers({
  auth,
  modal,
  recipes,
  user,
<<<<<<< HEAD
  form: formReducer,
  annotations
=======
  journal,
  form: formReducer
>>>>>>> 46bb585f7782f9854a07d5d1f2ef137b616a8c11
});

export default rootReducer;
