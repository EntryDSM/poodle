import client from './client';

export const getProcess = () =>
  client.get('/process/me', {
    headers: {
      Authorization: localStorage.getItem('accessToken'),
    },
  });
