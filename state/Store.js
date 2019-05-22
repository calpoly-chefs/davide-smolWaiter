// NOTE: the state is actively being refactored and moved to smolWaiter/state/configureStore
//       it will *no longer* use redux-starter-kit because have graduated to the regular old version Redux
// 
// please continue using this in the meantime (tlarson)

import { configureStore } from "redux-starter-kit";
import ModalSlice from "./ModalSlice";
import RecipeSlice from "./RecipesSlice";
import { reducer as FormReducer } from "redux-form";

// combine ruducers into a root reducer (internally calls `configureStore`)
const reducer = {
  modal: ModalSlice.reducer,
  recipe: RecipeSlice.reducer,
  form: FormReducer
};

// store
//   - holds the app state
//   - allows access to state
//   - allow state to be updated
//   - register listeners and handel unregistered ones
const store = configureStore({
  reducer
});

export default store;
