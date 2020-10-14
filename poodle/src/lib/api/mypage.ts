import { getClientWithAccessToken } from './client';

export const getProcess = () =>
  getClientWithAccessToken(true).get('/process/me');

export interface UserStatus {
  name: string;
  sex: 'MALE' | 'FEMALE';
  paid: boolean;
  printed_application_arrived: boolean;
  final_submit: boolean;
  submitted_at: string;
}

export interface FirstPassStatus {
  is_passed: boolean;
}

export interface FinalPassStatus {
  is_passed: boolean;
}

export const getUserStatus = () =>
  getClientWithAccessToken(true).get<UserStatus>('/users/me/status');

export const getDocument = () =>
  getClientWithAccessToken(true, 'application/pdf').get<Blob>(
    '/grade/application/final',
    {
      responseType: 'blob',
    },
  );

export const getFirstPassStatus = () =>
  getClientWithAccessToken(true).get<FirstPassStatus>('/users/me/pass/first');

export const getFinalPassStatus = () =>
  getClientWithAccessToken(true).get<FinalPassStatus>('/users/me/pass/final');
