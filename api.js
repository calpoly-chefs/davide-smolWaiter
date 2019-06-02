import axios from 'axios';

const token = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZW15PDNhbGZyZWRvIn0.kntgSPfTz7CXtruRuKokcSjxapIj7Z2h2TfIGlSgSng`;

// TODO update token to be a dynamic token from localstorage or state
// axios is HTTP client for accessing and sending data to a database
const client = axios.create({
    baseURL: 'http://littlechef-env.r8cggprmdw.us-west-1.elasticbeanstalk.com/',
    headers: {
        "Content-Type": "application/json",
        "Authorization": token
    }
})

export default client