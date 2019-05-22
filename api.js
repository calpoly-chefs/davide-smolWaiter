import axios from 'axios';

// axios is HTTP client for accessing and sending data to a database
const client = axios.create({
    baseURL: 'http://littlechef-env.r8cggprmdw.us-west-1.elasticbeanstalk.com/',
    headers: {
        "Content-Type": "application/json"
    }
})

export default client