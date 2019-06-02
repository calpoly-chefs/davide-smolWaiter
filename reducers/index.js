import { combineReducers } from 'redux'
import auth from "./authReducer"
import recipes from "./recipeReducer"
import { reducer as formReducer } from "redux-form";

// combines all reducers into a single root reducer 
const rootReducer = combineReducers({
    auth,
    recipes,
    form: formReducer
})

export default rootReducer;