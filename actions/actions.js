import { LOGIN, LOGOUT, CREATE_USER, RECIPE, TOGGLE_QUICK_ACTIONS, USER, SET_CURRENT, TOKEN_UPDATED, LOAD } from "../constants/ActionTypes"
import api from "../api"
import fakeapi from "../practice/fakeapi";

// authenticates a remy by username and password
// stores the bearer token in the user slice to persist their session
export function login(creds) {
  return {
    type: LOGIN,
    // TODO: authenticate any user
    // TODO: input validation
    payload: api.post("login", JSON.stringify(creds))
    // .then(response => {
    //   console.log("POST RESPONSE: ", JSON.stringify(response));
    // })
    // .catch(function (error) {
    //   console.log(error);
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

// TODO: 
export function createUser() {
  return {
    type: CREATE_USER
  };
}

export function setCurrentRecipe(recipe) {
  console.log("actions: " + recipe);
  return {
    type: SET_CURRENT,
    recipe
  }
}

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

export function updateToken(token) {
  console.log("Action called on: " + token);
  return {
    type: TOKEN_UPDATED,
    token: token
  }
}

export function load(data) {
  return {
    type: LOAD, data
  }
}