import { combineReducers } from 'redux'
import user from "./loginReducer"

// combines all reducers into a single root reducer 
const rootReducer = combineReducers({
    user
})

export default rootReducer;