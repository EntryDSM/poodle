import client, {
  getClientWithAccessToken,
  getClientWithRefreshToken,
} from './client';

export interface Token {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export const login = (data: { email: string; password: string }) =>
  client.post<Token>('/auth', data);

export interface User {
  grade_type: 'GED' | 'GRADUATED' | 'UNGRADUATED' | '';
  name: string | null;
  sex: 'MALE' | 'FEMALE' | null;
  birth_date: string | null;
  student_number: string | null;
  school_name: string | null;
  parent_name: string | null;
  school_tel: string | null;
  applicant_tel: string | null;
  parent_tel: string | null;
  address: string | null;
  detail_address: string | null;
  photo: string | null;
  post_code: string | null;
}

export const getUser = () => getClientWithAccessToken().get<User>('/users/me');

export const reGenerateToken = () =>
  getClientWithRefreshToken().put<Token>('/auth');
