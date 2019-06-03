import { LOAD } from "../constants/ActionTypes"

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