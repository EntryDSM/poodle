import ErrorType from '@/lib/utils/type';
import { Token, User } from '@/lib/api/auth';

export const RESET = 'header/RESET' as const;

export const LOGIN = 'header/LOGIN' as const;
export const LOGIN_SUCCESS = 'header/LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'header/LOGIN_FAILURE' as const;
export const LOGOUT = 'header/LOGOUT' as const;
export const LOGIN_ERROR_RESET = 'header/LOGIN_ERROR_RESET' as const;
export const RE_GENERATE_TOKEN = 'header/RE_GENERATE_TOKEN' as const;
export const RE_GENERATE_TOKEN_SUCCESS = 'header/RE_GENERATE_TOKEN_SUCCESS' as const;
export const RE_GENERATE_TOKEN_FAILURE = 'header/RE_GENERATE_TOKEN_FAILURE' as const;

export const GET_USER = 'header/GET_USER' as const;
export const GET_USER_SUCCESS = 'header/GET_USER_SUCCESS' as const;
export const GET_USER_FAILURE = 'header/GET_USER_FAILURE' as const;

export const GET_STATUS = 'header/GET_STATUS' as const;
export const GET_STATUS_FAILURE = 'header/GET_STATUS_FAILURE' as const;
export const GET_STATUS_SUCCESS = 'header/GET_STATUS_SUCCESS' as const;

export type StatusType = {
  name: string;
  sex: string;
  paid: boolean;
  printed_application_arrived: boolean;
  passed_first_apply: boolean;
  passed_interview: boolean;
  final_submit: boolean;
  submitted_at: Date | null;
};

export const reset = () => ({
  type: RESET,
});

export const login = (payload: { email: string; password: string }) => ({
  type: LOGIN,
  payload,
});

export const loginSuccess = (token: Token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (e: ErrorType) => ({
  type: LOGIN_FAILURE,
  payload: e,
  error: true,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginErrorReset = () => ({
  type: LOGIN_ERROR_RESET,
});

export const reGenerateToken = (payload: {
  callback: (params?: any) => void;
  callbackParams?: any;
}) => ({
  type: RE_GENERATE_TOKEN,
  payload,
});

export const reGenerateTokenSuccess = (payload: Token) => ({
  type: RE_GENERATE_TOKEN_SUCCESS,
  payload,
});

export const reGenerateTokenFailure = () => ({
  type: RE_GENERATE_TOKEN_FAILURE,
});

export const getUser = () => ({
  type: GET_USER,
});

export const getUserSuccess = (payload: User) => ({
  type: GET_USER_SUCCESS,
  payload,
});

export const getUserFailure = (e: ErrorType) => ({
  type: GET_USER_FAILURE,
  payload: e,
});

export const getStatus = () => ({
  type: GET_STATUS,
});

export const getStatusSuccess = (e: StatusType) => ({
  type: GET_STATUS_SUCCESS,
  payload: e,
});

export const getStatusFailure = (e: ErrorType) => ({
  type: GET_STATUS_FAILURE,
  payload: e,
});

export type HeaderAction =
  | ReturnType<typeof reset>
  | ReturnType<typeof login>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>
  | ReturnType<typeof logout>
  | ReturnType<typeof loginErrorReset>
  | ReturnType<typeof reGenerateToken>
  | ReturnType<typeof reGenerateTokenSuccess>
  | ReturnType<typeof reGenerateTokenFailure>
  | ReturnType<typeof getUser>
  | ReturnType<typeof getUserSuccess>
  | ReturnType<typeof getUserFailure>
  | ReturnType<typeof getStatus>
  | ReturnType<typeof getStatusSuccess>
  | ReturnType<typeof getStatusFailure>;
