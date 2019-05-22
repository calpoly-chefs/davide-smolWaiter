import { LOGIN } from "../constants/ActionTypes"
import api from "../api"

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

// TODO: fetch all the things