import { configureStore } from "redux-starter-kit";
import CounterSlice from "./CounterSlice";
import RecipeSlice from "./RecipesSlice";
import { reducer as FormReducer } from "redux-form";

// combine ruducers into a root reducer (internally calls `configureStore`)
const reducer = {
  count: CounterSlice.reducer,
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
