import { getClientWithAccessToken } from './client';

export const getProcess = () => getClientWithAccessToken().get('/process/me');

export interface UserStatus {
  name: string;
  sex: 'MALE' | 'FEMALE';
  paid: boolean;
  printed_application_arrived: boolean;
  final_submit: boolean;
  submitted_at: string;
}

export interface FirstPassStatus {
  passed: boolean;
}

export interface FinalPassStatus {
  passed: boolean;
}

export const getUserStatus = () =>
  getClientWithAccessToken().get<UserStatus>('/users/me/status');

export const getDocument = () =>
  getClientWithAccessToken('application/pdf').get<Blob>(
    '/grade/application/final',
    {
      responseType: 'blob',
    },
  );

export const getFirstPassStatus = () =>
  getClientWithAccessToken().get<FirstPassStatus>('/users/me/pass/first');

export const getFinalPassStatus = () =>
  getClientWithAccessToken().get<FinalPassStatus>('/users/me/pass/final');
