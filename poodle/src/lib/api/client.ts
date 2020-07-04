import axios from 'axios';

const client = axios.create({
  baseURL: process.env.SERVER_URL,
});

export default client;