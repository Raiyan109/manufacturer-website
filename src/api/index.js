import axios from 'axios'

let URL;
switch (process.env.REACT_APP_ENVIRONMENT) {
    case "DEVELOPMENT":
        URL = 'http://localhost:5000/';
        break;
    case "PRODUCTION":
        URL = 'https://leviathan-server.vercel.app/';
        break;
    default:
        URL = 'http://localhost:5000/';
}
const fetcher = axios.create({
    baseURL: URL
});

export default fetcher