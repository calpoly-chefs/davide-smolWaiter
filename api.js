import axios from 'axios';

// TODO update token to be a dynamic token from localstorage or state
// axios is HTTP client for accessing and sending data to a database
const client = axios.create({
    baseURL: 'http://littlechef-env.r8cggprmdw.us-west-1.elasticbeanstalk.com/',
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZW15In0.2vJkjEAcVkUz8k5c3Ds4eGOz6dCIpjbH4Dx3noqIqm8'
    }
})

export default client