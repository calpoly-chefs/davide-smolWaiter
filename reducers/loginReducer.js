import { LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED } from "../constants/ActionTypes"

const initialState = {
    authorization: "",
    isFetching: false,
    error: false,
    errorMessage: ""
}

// TODO: brainsotrm new name (loginReducer is limiting)
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_PENDING:
            return {
                ...state,
                authorization: "",
                isFetching: true
            };
        case LOGIN_FULFILLED:
            return {
                ...state,
                isFetching: false,
                authorization: action.payload.headers.authorization
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