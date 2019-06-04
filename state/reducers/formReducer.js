import { LOAD } from "../actionTypes"

export default function formReducer(state = {}, action) {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                data: action.data,
            };
        default:
            return state;
    }
}