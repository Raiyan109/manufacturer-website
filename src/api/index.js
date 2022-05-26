import axios from 'axios'


const fetcher = axios.create({
    baseURL: 'https://stormy-sea-79672.herokuapp.com',
});

export default fetcher