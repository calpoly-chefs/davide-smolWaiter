import { combineReducers } from 'redux'
import auth from "./authReducer"
import recipes from "./recipeReducer"
import modal from "./modalReducer"

// combines all reducers into a single root reducer 
const rootReducer = combineReducers({
    auth,
    modal,
    recipes
})

export default rootReducer;