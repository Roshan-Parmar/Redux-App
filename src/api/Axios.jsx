import axios from 'axios';

console.log(axios.isCancel('something'));

const instance = axios.create(
    {
        baseURL : "http://localhost:5000/"
    }
);

export default instance;