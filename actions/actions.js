import { LOGIN, RECIPE } from "../constants/ActionTypes"
import api from "../api"
import fakeapi from "../practice/fakeapi";

// authenticates a remy by username and password
// stores the bearer token in the user slice to persist their session
export function fetchLogin() {
    return {
        type: LOGIN,
        // TODO: add the ability to authenticate any user
        // TODO: error checking for invaid input
        payload: api.post("login", {
            username: "remy",
            password: "password"
        })
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

// TODO: fetch all the things