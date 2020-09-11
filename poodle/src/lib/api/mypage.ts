import { getClientWithAccessToken } from './client';

export const getProcess = () => getClientWithAccessToken().get('/process/me');

export interface UserStatus {
  name: string;
  sex: 'MALE' | 'FEMALE';
  paid: boolean;
  printed_application_arrived: boolean;
  passed_first_apply: boolean;
  passed_interview: boolean;
  final_submit: boolean;
  submitted_at: string;
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
