import client from './client';

export const emailSend = (email: string) =>
  client.post(`/user/email/verify?email=${email}`);

export const verifyCode = (data: { email: string; code: string }) =>
  client.put('/user/email/verify', data);

export const join = (data: { email: string; password: string }) =>
  client.post('/user', data);
