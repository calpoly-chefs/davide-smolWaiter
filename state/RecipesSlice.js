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
          ingredients: ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9"],
          steps: ["s1", "s2", "s3", "s4", "s5", "s6"],
          annotations: ["a1", "a2"]
        },
        r2: {
          id: "r2",
          title: "French Macarons with White Chocolate Ganache",
          ingredients: ["i10"],
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
          annotations: ["a2"]
        },
        i3: {
          id: "i3",
          quantity: 1,
          units: "cup (7.5 ounces)",
          ingredient: "light brown sugar",
          recipe: "r1",
          annotations: []
        },
        i4: {
          id: "i4",
          quantity: 1.5,
          units: "cups (7.5 ounces)",
          ingredient: "all-purpose flour",
          recipe: "r1",
          annotations: []
        },
        i5: {
          id: "i5",
          quantity: 1.5,
          units: "cups (5.25 ounces)",
          ingredient: "old-fashioned oats",
          recipe: "r1",
          annotations: []
        },
        i6: {
          id: "i6",
          quantity: 1 / 2,
          units: "tablespoon",
          ingredient: "salt",
          recipe: "r1",
          annotations: []
        },
        i7: {
          id: "i7",
          quantity: 1,
          units: "teaspoon",
          ingredient: "baking soda",
          recipe: "r1",
          annotations: []
        },
        i8: {
          id: "i8",
          quantity: 1,
          units: "cup",
          ingredient: "caramel sauce",
          recipe: "r1",
          annotations: []
        },
        i9: {
          id: "i9",
          quantity: 1,
          units: "cup (6 ounces)",
          ingredient: "semisweet, bittersweet chocolate chips",
          recipe: "r1",
          annotations: []
        },
        i10: {
          id: "i10",
          ingredient: "powdered sugar",
          quantity: 150,
          units: "grams",
          rId: "r2",
          annotations: []
        }
      },
      allIds: ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10"]
    },
    steps: {
      byId: {
        s1: {
          id: "s1",
          stepNum: 1,
          step:
            "Preheat the oven to 350 degrees F. Line a 9X13-inch aluminum baking pan with foil (helps with cleanup) and lightly grease with cooking spray.",
          rId: "r1",
          annotations: ["a3"]
        },
        s2: {
          id: "s2",
          stepNum: 2,
          step:
            "In a large bowl with an electric handheld mixer or in the bowl of an electric stand mixer fitted with the paddle attachment, mix together the softened butter and brown sugar until well-mixed. Add the flour, oats, salt and baking soda and mix until combined.",
          recipe: 1,
          annotations: []
        },
        s3: {
          id: "s3",
          stepNum: 3,
          step:
            "Press about 2/3 of the mixture into the bottom of the prepared pan. Bake for 10-11 minutes until lightly golden and puffy.",
          recipe: 1,
          annotations: []
        },
        s4: {
          id: "s4",
          stepNum: 4,
          step:
            "Pour the caramel sauce evenly over the top. Sprinkle the chocolate chips over the caramel. Finish by crumbling the remaining cookie mixture on top.",
          recipe: 1,
          annotations: []
        },
        s5: {
          id: "s5",
          stepNum: 5,
          step:
            "Bake for another 12-13 minutes until the edges are golden and the caramel is bubbling.",
          recipe: 1,
          annotations: []
        },
        s6: {
          id: "s6",
          stepNum: 6,
          step:
            "Remove from the oven and let cool completely in the pan before cutting into squares.",
          recipe: 1,
          annotations: []
        }
      },
      allIds: ["s1", "s2", "s3", "s4", "s5", "s6"]
    },
    annotations: {
      byId: {
        a1: {
          id: "a1",
          date: "2019-05-04",
          text: "mo butta",
          rId: "r1"
        },
        a2: {
          id: "a2",
          date: "2019-05-21",
          text: "less sugar",
          rId: "r1",
        },
        a3: {
          id: "a3",
          date: "2019-05-21",
          text: "don't do this step",
          rId: "r1",
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
