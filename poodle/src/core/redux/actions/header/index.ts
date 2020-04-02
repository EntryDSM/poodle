export const LOGIN = 'header/LOGIN' as const;
export const LOGIN_SUCCESS = 'header/LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'header/LOGIN_FAILURE' as const;

export const login = (payload: { email: string, password: string; }) => ({ type: LOGIN, payload });
export const loginSuccess = (user: { userName: string }) => ({ type: LOGIN_SUCCESS, payload: user });
export const loginFailure = (e: string) => ({ type: LOGIN_FAILURE, payload: e, error: true });

export type HeaderAction =
    | ReturnType<typeof login>
    | ReturnType<typeof loginSuccess>
    | ReturnType<typeof loginFailure>;