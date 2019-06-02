import { LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED, TOKEN_UPDATED } from "../constants/ActionTypes"

const initialState = {
    token: "",
    isFetching: false,
    error: false,
    errorMessage: "",
    isAuthenticated: false,
}

// TODO: brainsotrm new name (loginReducer is limiting)
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_PENDING:
            return {
                ...state,
                token: "",
                isFetching: true
            };
        case LOGIN_FULFILLED:
            return {
                ...state,
                isFetching: false,
                error: false,
                token: action.payload.headers.authorization,
                isAuthenticated: true
            };
        case LOGIN_REJECTED:
            console.log("login rejected");
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: "error: authentication failed"
            };
        case TOKEN_UPDATED:
            return {
                ...state,
                isFetching: false,
                token: action.token
            };
        default:
            return state;
    }
}