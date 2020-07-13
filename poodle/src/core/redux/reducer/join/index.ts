import {
  SEND_EMAIL,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE,
  JoinAction,
  VERIFY_CODE_SUCCESS,
  VERIFY_CODE_FAILURE,
  VERIFY_CODE,
  JOIN_VALUE_RESET,
  JOIN_SUCCESS,
  JOIN_FAILURE,
} from '../../actions/join';
import ErrorType from '@/lib/utils/type/ErrorType';

type JoinState = {
  sendEmailSuccess: boolean;
  sendEmailError: ErrorType;
  verifyCodeSuccess: boolean;
  verifyCodeError: ErrorType;
  joinSuccess: boolean;
  joinError: ErrorType;
};

const errorInitialState = {
  message: '',
  response: {
    status: 0,
  },
};

const initialState: JoinState = {
  sendEmailSuccess: false,
  sendEmailError: errorInitialState,
  verifyCodeSuccess: false,
  verifyCodeError: errorInitialState,
  joinSuccess: false,
  joinError: errorInitialState,
};

export default function join(
  state: JoinState = initialState,
  action: JoinAction
) {
  switch (action.type) {
    case SEND_EMAIL:
      return {
        ...state,
        sendEmailSuccess: false,
        sendEmailError: errorInitialState,
      };
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        sendEmailSuccess: true,
        sendEmailError: errorInitialState,
        verifyCodeError: errorInitialState,
      };
    case SEND_EMAIL_FAILURE:
      return {
        ...state,
        sendEmailSuccess: false,
        sendEmailError: action.payload,
        verifyCodeError: errorInitialState,
      };
    case VERIFY_CODE:
      return {
        ...state,
        sendEmailSuccess: false,
        verifyCodeSuccess: false,
        verifyCodeError: errorInitialState,
      };
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
    case JOIN_VALUE_RESET:
      return initialState;

    case JOIN_SUCCESS:
      return {
        ...state,
        joinSuccess: true,
        joinError: errorInitialState,
      };
    case JOIN_FAILURE:
      return {
        ...state,
        joinSuccess: false,
        joinError: action.payload,
      };
    default:
      return state;
  }
}
