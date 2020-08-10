import ErrorType from '@/lib/utils/type';

export const SEND_EMAIL = 'join/SEND_EMAIL' as const;
export const SEND_EMAIL_SUCCESS = 'join/SEND_EMAIL_SUCCESS' as const;
export const SEND_EMAIL_FAILURE = 'join/SEND_EMAIL_FAILURE' as const;

export const VERIFY_CODE = 'join/VERIFY_CODE' as const;
export const VERIFY_CODE_SUCCESS = 'join/VERIFY_CODE_SUCCESS' as const;
export const VERIFY_CODE_FAILURE = 'join/VERIFY_CODE_FAILURE' as const;

export const JOIN_VALUE_RESET = 'join/JOIN_VALUE_RESET' as const;

export const JOIN = 'join/JOIN' as const;
export const JOIN_SUCCESS = 'join/JOIN_SUCCESS' as const;
export const JOIN_FAILURE = 'join/JOIN_FAILURE' as const;

export const sendEmail = (payload: string) => ({
  type: SEND_EMAIL,
  payload,
});
export const sendEmailSuccess = () => ({
  type: SEND_EMAIL_SUCCESS,
});
export const sendEmailFailure = (e: ErrorType) => ({
  type: SEND_EMAIL_FAILURE,
  payload: e,
  error: true,
});

export const verifyCode = (payload: { email: string; code: string }) => ({
  type: VERIFY_CODE,
  payload,
});
export const verifyCodeSuccess = () => ({
  type: VERIFY_CODE_SUCCESS,
});
export const verifyCodeFailure = (e: ErrorType) => ({
  type: VERIFY_CODE_FAILURE,
  payload: e,
  error: true,
});

export const joinValueReset = () => ({
  type: JOIN_VALUE_RESET,
});

export const join = (payload: { email: string; password: string }) => ({
  type: JOIN,
  payload,
});

export const joinSuccess = () => ({
  type: JOIN_SUCCESS,
});

export const joinFailure = (e: ErrorType) => ({
  type: JOIN_FAILURE,
  payload: e,
  error: true,
});

export type JoinAction =
  | ReturnType<typeof sendEmail>
  | ReturnType<typeof sendEmailSuccess>
  | ReturnType<typeof sendEmailFailure>
  | ReturnType<typeof verifyCode>
  | ReturnType<typeof verifyCodeSuccess>
  | ReturnType<typeof verifyCodeFailure>
  | ReturnType<typeof joinValueReset>
  | ReturnType<typeof join>
  | ReturnType<typeof joinSuccess>
  | ReturnType<typeof joinFailure>;
