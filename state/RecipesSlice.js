import { createSlice, createAction, createReducer } from "redux-starter-kit";

// actions are payloads of info that send data from your app to your store
//
// `createAction` (from redux-starter-kit) automatically declares
//   - action type constant
//   - action creator function
// const addRecipe = createAction("recipes/add");
// const deleteRecipe = createAction("recipes/delete");

// reducers is define in Store.js
//
// WARNING: `createReducer` (from redux-starter-kit) allows for the direct mutation of data
// you must either mutate the state argument or return a new state NOT both
// const recipesReducer = createReducer([], {
//   [addRecipe]: (state, action) => {
//     const recipe = action.payload;
//     state.push(recipe);
//   },
//   [deleteRecipe]: (state, action) => {
//     return state.filter((recipes, id) => id !== action.payload.id);
//   }
// });

const recipes = createSlice({
  slice: "recipes",
  initialState: {
    recipes: {
      byId: {
        r1: {
          id: "r1",
          title: "Chocolate Chip Caramel Cookie Bars",
          ingredients: ["i1"],
          steps: ["s1"],
          annotations: ["a1"]
        },
        r2: {
          id: "r2",
          title: "French Macarons with White Chocolate Ganache",
          ingredients: [],
          steps: [],
          annotations: []
        }
      },
      allIds: ["r1", "r2"]
    },
    ingredients: {
      byId: {
        i1: {
          id: "i1",
          ingredient: "butter, softened",
          quantity: 1,
          units: "cup (2 sticks, 8 ounces)",
          rId: "r1",
          annotations: ["a1"]
        },
        i2: {
          id: "i2",
          ingredient: "light brown sugar",
          quantity: 1,
          units: "cup (7.5 ounces)",
          rId: "r1",
          annotations: []
        },
        i3: {
          id: "i3",
          ingredient: "powdered sugar",
          quantity: 150,
          units: "grams",
          rId: "r2",
          annotations: []
        }
      },
      allIds: ["i1"]
    },
    steps: {
      byId: {
        s1: {
          id: "s1",
          stepNum: 1,
          step:
            "Preheat the oven to 350 degrees F. Line a 9X13-inch aluminum baking pan with foil (helps with cleanup) and lightly grease with cooking spray.",
          rId: "r1",
          annotations: []
        }
      },
      allIds: ["s1"]
    },
    annotations: {
      byId: {
        a1: {
          id: "a1",
          date: "2019-05-04",
          text: "mo butta",
          rId: "r1"
        }
      },
      allIds: ["a1"]
    }
  },
  reducers: {
    addRecipe: (state, action) => {
      const recipe = action.payload;
      state.push(recipe);
    },
    deleteRecipe: (state, action) => {
      return state.filter((recipes, id) => id !== action.payload.id);
    }
  }
});

export default recipes;
