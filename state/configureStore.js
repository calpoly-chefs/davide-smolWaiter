import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers/index"
import promiseMiddleware from "redux-promise-middleware"

// Initilizes the Redux store
export default function configureStore() {
    let store = createStore(
        rootReducer,
        applyMiddleware(promiseMiddleware) // allows for async functions (e.g. API calls) 
    )
    return store
}