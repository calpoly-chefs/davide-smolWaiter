import { LOGIN, LOGOUT, CREATE_USER } from "../constants/ActionTypes"
import api from "../api"

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