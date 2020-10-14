import axios from 'axios';
const COOKIE_CURRENT_TEXT = 'XSRF-TOKEN=';
const csrfToken = document.cookie.split(COOKIE_CURRENT_TEXT)[2];
const csrfHeader = { 'X-XSRF-TOKEN': 'asdf' };
const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
const getClientWithAccessTokenHeader = (
  isGet: boolean,
  contentType?: string,
) => {
  const buffer = isGet
    ? {
        'Content-Type': contentType ? contentType : 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      }
    : {
        'Content-Type': contentType ? contentType : 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        ...csrfHeader,
      };
  console.log(buffer);
  return buffer;
};
export const getClientWithAccessToken = (
  isGet: boolean,
  contentType?: string,
) =>
  axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { ...getClientWithAccessTokenHeader(isGet, contentType) },
  });

export const getClientWithRefreshToken = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
      'X-Refresh-Token': localStorage.getItem('refreshToken'),
    },
  });
};

export default client;
