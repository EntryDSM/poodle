import axios from 'axios';

const client = axios.create({

export default client;
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default client;
