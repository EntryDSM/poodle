import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getClientWithAccessToken = () =>
  axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
    },
  });

export const getClientWithRefreshToken = () =>
  axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
      'X-Refresh-Token': localStorage.getItem('refreshToken'),
    },
  });

export default client;
