import client from './client';

export const sendEmail = (email: string) =>
  client.post('/email/password/verify', {
    email,
  });

export const verifyCode = (data: { email: string; code: string }) =>
  client.put('/email/verify', data);

export const resetPassword = (data: { email: string; password: string }) =>
  client.post('/user/password/reset?/api없어요', data);
