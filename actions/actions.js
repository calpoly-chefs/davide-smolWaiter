import { LOGIN, LOGOUT, CREATE_USER, RECIPE } from "../constants/ActionTypes"
import api from "../api"
import fakeapi from "../practice/fakeapi";

// authenticates a remy by username and password
// stores the bearer token in the user slice to persist their session
export function login() {
    return {
        type: LOGIN,
        // TODO: authenticate any user
        // TODO: input validation
        payload: api.post("login", {
            username: "remy",
            password: "password"
        })
        // .then(response => {
        //     console.log("POST RESPONSE: ", JSON.stringify(response));
        // })
        // .catch(function (error) {
        //     console.log(error);
        // })
    }
}

export function fetchAllRecipes(token) {
    return {
        type: RECIPE,
        payload: api.get("/recipes", {

        })
        // .then(function (response) {
        //     console.log("RESP: ", JSON.stringify(response.data))
        // })
    }
}

export function createNewRecipe(recipe) {
    console.log("recipe:" + recipe)
    return {
        type: RECIPE,
        payload: api.post("/recipes", recipe)
    }
}

// TODO: fetch all the things
// TODO:
export function createUser() {
    return {
        type: CREATE_USER
    }
}

// TODO: 
export function logout() {
    return {
        type: LOGOUT
    }
}
