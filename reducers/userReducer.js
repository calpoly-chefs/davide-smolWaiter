import {
  USER_PENDING,
  USER_FULFILLED,
  USER_REJECTED,
  USER_UPDATE
} from "../constants/ActionTypes";

const initialState = {
  data: {},
  isFetching: false,
  error: false,
  errorMessage: ""
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_PENDING:
      return {
        ...state,
        isFetching: true,
        data: {}
      };
    case USER_FULFILLED:
      return {
        ...state,
        isFetching: false,
        data: action.payload.data
      };
    case USER_REJECTED:
      return {
        ...state,
        isFetching: false,
        errorMessage: "error: user could not be found"
      };
    // case USER_UPDATE:
    //   return {
    //     ...state
    //   };

    //   };
    default:
      return state;
  }
}
