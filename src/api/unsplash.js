import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID QYS7V7wA2tPQuXj4MpTrWGvehrp4tAk83f7n1aOhEVw'
    }    
});