import client from './client';

export const emailSend = (email: string) =>
  client.post('/users/email/verify', {
    email,
  });

export const verifyCode = (data: { email: string; auth_code: string }) =>
  client.put('/users/email/verify', data);

export const join = (data: { email: string; password: string }) =>
  client.post('/users', data);
