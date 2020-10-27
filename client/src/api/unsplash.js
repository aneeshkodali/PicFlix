import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID D4th6eWbfY2O7Z4CQJn3Kbbu18jAXDhhqMtJRl_XqJ8'
    }
});