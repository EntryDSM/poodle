import client from './client';

export const sendEmail = (email: string) =>
  client.post(`/users/email/password/verify?email=${email}`, {});

export const verifyCode = (data: { email: string; auth_cod: string }) =>
  client.put('/users/email/verify', data);

export const resetPassword = (data: { email: string; password: string }) =>
  client.put('/users/password', data);
