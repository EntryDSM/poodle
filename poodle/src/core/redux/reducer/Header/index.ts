import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  HeaderAction,
  LOGOUT,
  LOGIN_ERROR_RESET,
  LOGIN,
} from '../../actions/Header';
import ErrorType, { errorInitialState } from '@/lib/utils/type';

type HeaderState = {
  isLogin: boolean;
  user: {
    accessToken: string;
    refreshToken: string;
  };
  error: ErrorType;
};

const initialState: HeaderState = {
  isLogin: false,
  user: {
    accessToken: '',
    refreshToken: '',
  },
  error: errorInitialState,
};

export default function header(
  state: HeaderState = initialState,
  action: HeaderAction,
) {
  switch (action.type) {
    case LOGIN:
      return initialState;
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        user: action.payload,
        error: errorInitialState,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT:
      return {
        isLogin: false,
        user: {
          accessToken: '',
          refreshToken: '',
        },
        error: errorInitialState,
      };
    case LOGIN_ERROR_RESET:
      return {
        ...state,
        error: errorInitialState,
      };
    default:
      return state;
  }
}
