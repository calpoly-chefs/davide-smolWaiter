<<<<<<< HEAD
import { LOGIN, LOGOUT, CREATE_USER, RECIPE, TOGGLE_QUICK_ACTIONS, SET_CURRENT } from "../constants/ActionTypes"
import api from "../api"
=======
import {
  LOGIN,
  LOGOUT,
  CREATE_USER,
  RECIPE,
  TOGGLE_QUICK_ACTIONS,
  USER
} from "../constants/ActionTypes";
import api from "../api";
>>>>>>> 1b356e7191c70ac058a33d6a436d98698daf119d
import fakeapi from "../practice/fakeapi";

// authenticates a remy by username and password
// stores the bearer token in the user slice to persist their session
export function login() {
  return {
    type: LOGIN,
    // TODO: authenticate any user
    // TODO: input validation
    payload: api.post("login", {
      username: "remy<3alfredo",
      password: "password"
    })
    // .then(response => {
    //     console.log("POST RESPONSE: ", JSON.stringify(response));
    // })
    // .catch(function (error) {
    //     console.log(error);
    // })
  };
}

export function fetchAllRecipes(token) {
  return {
    type: RECIPE,
    payload: api.get("/recipes", {})
    // .then(function (response) {
    //     console.log("RESP: ", JSON.stringify(response.data))
    // })
  };
}

export function createNewRecipe(recipe) {
  return {
    type: RECIPE,
    payload: api.post("/recipes", JSON.stringify(recipe))
  };
}

// TODO: fetch all the things
// TODO:
export function createUser() {
  return {
    type: CREATE_USER
  };
}

export function setCurrentRecipe(id) {
    console.log("actions: " + id);
    return {
        type: SET_CURRENT,
        id
    }
}

// TODO: 
// TODO:
export function logout() {
  return {
    type: LOGOUT
  };
}

export function fetchUser() {
  return {
    type: USER,
    payload: api.get("/users/current", {})
    // .then(function(response) {
    //   console.log("RESP: ", JSON.stringify(response.data));
    // })
  };
}

export function updateUser() {
  return {
    type: USER,
    payload: api.put("/user/current", {})
  };
}

export function toggleQuickActions() {
  return {
    type: TOGGLE_QUICK_ACTIONS
  };
}
