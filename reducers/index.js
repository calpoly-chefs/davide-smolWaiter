import { combineReducers } from 'redux'
import auth from "./authReducer"
import recipes from "./recipeReducer"

// combines all reducers into a single root reducer 
const rootReducer = combineReducers({
    auth,
    recipes
})

export default rootReducer;