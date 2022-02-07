import axios from 'axios';

export const key = "1b960373529cf283fffe804e4ee7623f8baacb01";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;