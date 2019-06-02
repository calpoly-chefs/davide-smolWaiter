import { TOGGLE_QUICK_ACTIONS } from "../constants/ActionTypes"

const initialState = {
    isQuickActionsVisable: false,
    isAddRecipeModalVisable: false,
    isSettingsModalVisable: false
}

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_QUICK_ACTIONS:
            return {
                ...state,
                isQuickActionsVisable: !state.isQuickActionsVisable,
            };
        default:
            return state;
    }
}