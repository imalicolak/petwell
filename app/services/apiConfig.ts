import axios from 'axios';

const api = axios.create({
    baseURL: 'https://petwell-3121e04f1bee.herokuapp.com'
});

export default api;