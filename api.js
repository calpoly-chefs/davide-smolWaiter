import axios from 'axios';
import store from "./state/configureStore"

// axios is HTTP client for accessing and sending data to a database
const client = axios.create({
    // userToken = this.props.auth.token;
    baseURL: 'http://littlechef-env.r8cggprmdw.us-west-1.elasticbeanstalk.com/',
    headers: {
        "Content-Type": "application/json"
    }
})

// attaches the authorization header to all requests
client.interceptors.request.use(function (config) {
    const token = store.getState().auth.token;
    // console.log("auth token:" + token);
    config.headers.Authorization = token;
    return config;
});

export default client