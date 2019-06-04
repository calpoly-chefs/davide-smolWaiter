import axios from 'axios';
import store from "./state/configureStore"
import { AsyncStorage } from "react-native"



// TODO update token to be a dynamic token from localstorage or state
// axios is HTTP client for accessing and sending data to a database
const client = axios.create({
    // userToken = this.props.auth.token;
    baseURL: 'http://littlechef-env.r8cggprmdw.us-west-1.elasticbeanstalk.com/',
    headers: {
        "Content-Type": "application/json"
    }
})


client.interceptors.request.use(function (config) {
    const token = store.getState().auth.token;
    // console.log("auth token:" + token);
    config.headers.Authorization = token;
    return config;
});



export default client