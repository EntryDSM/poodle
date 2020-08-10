import ErrorType from '@/lib/utils/type';

export const LOGIN = 'header/LOGIN' as const;
export const LOGIN_SUCCESS = 'header/LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'header/LOGIN_FAILURE' as const;
export const LOGOUT = 'header/LOGOUT' as const;
export const LOGIN_ERROR_RESET = 'header/LOGIN_ERROR_RESET' as const;

export const login = (payload: { email: string; password: string }) => ({
  type: LOGIN,
  payload,
});
export const loginSuccess = (user: {
  accessToken: string;
  refreshToken: string;
}) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});
export const loginFailure = (e: {
  response: {
    code: number;
  };
}) => ({
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

export type HeaderAction =
  | ReturnType<typeof login>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>
  | ReturnType<typeof logout>
  | ReturnType<typeof loginErrorReset>;
