import ErrorType from '@/lib/utils/type';

export const SEND_EMAIL = 'resetPassword/SEND_EMAIL' as const;
export const SEND_EMAIL_SUCCESS = 'resetPassword/SEND_EMAIL_SUCCESS' as const;
export const SEND_EMAIL_FAILURE = 'resetPassword/SEND_EMAIL_FAILURE' as const;

export const RESET_STATE = 'resetPassword/RESET_STATE' as const;

export const VERIFY_CODE = 'resetPassword/VERIFY_CODE' as const;
export const VERIFY_CODE_SUCCESS = 'resetPassword/VERIFY_CODE_SUCCESS' as const;
export const VERIFY_CODE_FAILURE = 'resetPassword/VERIFY_CODE_FAILURE' as const;

export const RESET_PASSWORD = 'resetPassword/RESET_PASSWORD' as const;
export const RESET_PASSWORD_SUCCESS = 'resetPassword/RESET_PASSWORD_SUCCESS' as const;
export const RESET_PASSWORD_FAILURE = 'resetPassword/RESET_PASSWORD_FAILURE' as const;

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

export const resetState = () => ({
  type: RESET_STATE,
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

export const resetPassword = (data: { email: string; password: string }) => ({
  type: RESET_PASSWORD,
  payload: data,
});

export const resetPasswordSuccess = () => ({
  type: RESET_PASSWORD_SUCCESS,
});

export const resetPasswordFailure = (e: ErrorType) => ({
  type: RESET_PASSWORD_FAILURE,
  payload: e,
  error: true,
});

export type ResetPasswordAction =
  | ReturnType<typeof sendEmail>
  | ReturnType<typeof sendEmailSuccess>
  | ReturnType<typeof sendEmailFailure>
  | ReturnType<typeof resetState>
  | ReturnType<typeof verifyCode>
  | ReturnType<typeof verifyCodeSuccess>
  | ReturnType<typeof verifyCodeFailure>
  | ReturnType<typeof resetPassword>
  | ReturnType<typeof resetPasswordSuccess>
  | ReturnType<typeof resetPasswordFailure>;
