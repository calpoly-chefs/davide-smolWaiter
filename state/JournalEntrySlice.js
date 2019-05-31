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

const journalEntry = createSlice({
  slice: "journalEntry",
  initialState: {
    journalEntry: {
      byId: {
        e1: {
          id: "e1",
          rId: "r1",
          rating: 4,
          timestamp: "05/22/1999"
        },
        e2: {
          id: "e2",
          rId: "r2",
          rating: 5,
          timestamp: "05/15/1998"
        },
        e3: {
          id: "e3",
          rId: "r1",
          rating: 5,
          timestamp: "04/15/1998"
        },
        e4: {
          id: "e4",
          rId: "r3",
          rating: 4,
          timestamp: "12/26/1998"
        },
        e5: {
          id: "e5",
          rId: "r4",
          rating: 3,
          timestamp: "09/04/1997"
        },
        e6: {
          id: "e6",
          rId: "r5",
          rating: 5,
          timestamp: "07/04/1997"
        }
      },
      allIds: ["e1", "e2", "e3", "e4", "e5", "e6"]
    },
    recipes: {
      byId: {
        r1: {
          id: "r1",
          title: "Chocolate Chip Caramel Cookie Bars",
          imageName: "bars_.jpg"
        },
        r2: {
          id: "r2",
          title: "Italian-Style Meatballs with Ditalini Pasta",
          imageName: "meatballs.jpg"
        },
        r3: {
          id: "r3",
          title: "Refreshing Mango Berry Smoothie",
          imageName: "smoothie.jpg"
        },
        r4: {
          id: "r4",
          title: "PBBBB",
          imageName: "PBBBB.jpg"
        },
        r5: {
          id: "r5",
          title: "Sesame Cucumber Salad",
          imageName: "cucumber_salad.jpg"
        }
      },
      allIds: ["r1", "r2", "r3", "r4", "r5"]
    }
  },
  reducers: {
    // addRecipe: (state, action) => {
    //   const recipe = action.payload;
    //   state.push(recipe);
    // },
    // deleteRecipe: (state, action) => {
    //   return state.filter((recipes, id) => id !== action.payload.id);
    // }
  }
});

export default journalEntry;
