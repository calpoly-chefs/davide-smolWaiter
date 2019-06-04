import { JOURNAL_ENTRY_PENDING, JOURNAL_ENTRY_FULFILLED, JOURNAL_ENTRY_REJECTED } from "../actionTypes"

const initialState = {
    data: [],
    isFetching: false,
    error: false,
    errorMessage: ""
}

export default function journalReducer(state = initialState, action) {
    switch (action.type) {
        case JOURNAL_ENTRY_PENDING:
            return {
                ...state,
                isFetching: true,
                data: []
            };
        case JOURNAL_ENTRY_FULFILLED:
            return {
                ...state,
                isFetching: false,
                data: action.payload.data
            };
        case JOURNAL_ENTRY_REJECTED:
            return {
                ...state,
                isFetching: false,
                errorMessage: "error: journal entry could not be found"
            };

        default:
            return state;
    }
}