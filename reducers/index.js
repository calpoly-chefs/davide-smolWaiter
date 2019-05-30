import { combineReducers } from 'redux'
import user from "./loginReducer"
import recipes from "./recipeReducer"

// combines all reducers into a single root reducer 
const rootReducer = combineReducers({
    user,
    recipes
})

export default rootReducer;