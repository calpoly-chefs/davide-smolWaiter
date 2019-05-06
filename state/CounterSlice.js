import { createSlice } from "redux-starter-kit";

// slices are portions of the state
//
// `createSlice` automatically generates the
//   - action creators
//   - action types
//   - selectors
const counter = createSlice({
  slice: "counter",
  initialState: 0,
  // reducers specify how the state based on actions
  reducers: {
    // actions are payloads of info that send data from your app to your store
    increment: state => state + 1,
    // here is an action can that takes in input via `action.payload`
    decrement: (state, action) => {
      return state - action.payload;
    }
  }
});

export default counter;
