import { configureStore } from "redux-starter-kit";
import ModalSlice from "./ModalSlice";
import RecipeSlice from "./RecipesSlice";
import JournalSlice from "./JournalEntrySlice";
import { reducer as FormReducer } from "redux-form";

// combine ruducers into a root reducer (internally calls `configureStore`)
const reducer = {
  modal: ModalSlice.reducer,
  recipe: RecipeSlice.reducer,
  form: FormReducer,
  journalEntry: JournalSlice.reducer
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
