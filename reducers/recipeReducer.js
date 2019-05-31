import { RECIPE_PENDING, RECIPE_FULFILLED, RECIPE_REJECTED } from "../constants/ActionTypes"

const initialState = {
    data: [],
    isFetching: false,
    error: false,
    errorMessage: ""
}

export default function recipeReducer(state = initialState, action) {
    switch (action.type) {
        case RECIPE_PENDING:
            return {
                ...state,
                isFetching: true,
                data: []
            };
        case RECIPE_FULFILLED:
            return {
                ...state,
                isFetching: false,
                data: action.payload.data
            };
        case RECIPE_REJECTED:
            return {
                ...state,
                isFetching: false,
                errorMessage: "error: recipe could not be found"
            };
        default:
            return state;
    }
}