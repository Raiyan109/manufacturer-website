import axios from 'axios'


const fetcher = axios.create({
    // baseURL: 'https://assignment12-server-chi.vercel.app/',
    baseURL: 'https://manufacturer-app-server.vercel.app/',
});

export default fetcher