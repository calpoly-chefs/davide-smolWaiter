import { LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED } from "../constants/ActionTypes"

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
                token: action.payload.headers.authorization,
                isAuthenticated: true
            };
        case LOGIN_REJECTED:
            return {
                ...state,
                isFetching: false,
                errorMessage: "error: authentication failed"
            };
        default:
            return state;
    }
}