import { TOGGLE_QUICK_ACTIONS, SET_CURRENT } from "../constants/ActionTypes"

const initialState = {
    isQuickActionsVisable: false,
    isAddRecipeModalVisable: false,
    isSettingsModalVisable: false,
    currentRecipe: 0
}

export default function modalReducer(state = initialState, action) {
    // console.log(action)
    switch (action.type) {
        case TOGGLE_QUICK_ACTIONS:
            return {
                ...state,
                isQuickActionsVisable: !state.isQuickActionsVisable,
            };
        case SET_CURRENT:
            console.log(action)
            return {
                ...state,
                currentRecipe: action.id,
            };
        default:
            return state;
    }
}