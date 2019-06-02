import axios from 'axios';
import store from "./state/configureStore"

loadToken = async () => {
    // userToken = await AsyncStorage.getItem('userToken')
    // userToken = this.props.auth.token
    console.log(userToken)
    return userToken
}



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
    // const token = this.loadToken()
    // const token = store.getState().auth.token;
    const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZW15PDNhbGZyZWRvIn0.kntgSPfTz7CXtruRuKokcSjxapIj7Z2h2TfIGlSgSng";
    config.headers.Authorization = token;
    return config;
});

// client.defaults.headers.common['Authorization'] = token
console.log("auth token:" + store.getState().auth.token)


export default client