import { createSlice } from "redux-starter-kit";

/* stores...
 *   -  visibility of the active modal */

const modal = createSlice({
  slice: "modal",
  initialState: false,
  reducers: {
    toggle: state => !state,
    setFalse: state => false,
    setTrue: state => true
  }
});

export default modal;
