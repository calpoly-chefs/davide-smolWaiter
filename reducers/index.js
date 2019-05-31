import { combineReducers } from 'redux'
import auth from "./authReducer"

// combines all reducers into a single root reducer 
const rootReducer = combineReducers({
    auth
})

export default rootReducer;