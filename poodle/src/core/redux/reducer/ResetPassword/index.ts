import {
  SEND_EMAIL,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE,
  RESET_STATE,
  VERIFY_CODE,
  VERIFY_CODE_SUCCESS,
  VERIFY_CODE_FAILURE,
  ResetPasswordAction,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from '../../actions/ResetPassword';
import ErrorType, { errorInitialState } from '@/lib/utils/type';

type ResetPasswordState = {
  sendEmailSuccess: boolean;
  sendEmailError: ErrorType;
  verifyCodeSuccess: boolean;
  verifyCodeError: ErrorType;
  resetPasswordSuccess: boolean;
  resetPasswordError: ErrorType;
};

const initialState: ResetPasswordState = {
  sendEmailSuccess: false,
  sendEmailError: errorInitialState,
  verifyCodeSuccess: false,
  verifyCodeError: errorInitialState,
  resetPasswordSuccess: false,
  resetPasswordError: errorInitialState,
};

export default function resetPassword(
  state: ResetPasswordState = initialState,
  action: ResetPasswordAction,
): ResetPasswordState {
  switch (action.type) {
    case SEND_EMAIL:
      return initialState;
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        sendEmailSuccess: true,
        sendEmailError: errorInitialState,
        verifyCodeSuccess: false,
        verifyCodeError: errorInitialState,
      };
    case SEND_EMAIL_FAILURE:
      return {
        ...state,
        sendEmailSuccess: false,
        sendEmailError: action.payload,
        verifyCodeError: errorInitialState,
      };
    case RESET_STATE:
      return initialState;
    case VERIFY_CODE:
      return initialState;
    case VERIFY_CODE_SUCCESS:
      return {
        ...state,
        verifyCodeSuccess: true,
        verifyCodeError: errorInitialState,
      };
    case VERIFY_CODE_FAILURE:
      return {
        ...state,
        verifyCodeSuccess: false,
        verifyCodeError: action.payload,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        resetPasswordError: errorInitialState,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: true,
        resetPasswordError: errorInitialState,
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        resetPasswordSuccess: false,
        resetPasswordError: action.payload,
      };
    default:
      return state;
  }
}
