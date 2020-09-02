import {
  RESET,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  HeaderAction,
  LOGOUT,
  LOGIN_ERROR_RESET,
  LOGIN,
  RE_GENERATE_TOKEN_SUCCESS,
  RE_GENERATE_TOKEN_FAILURE,
  RE_GENERATE_TOKEN,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER,
} from '../../actions/Header';
import ErrorType, { errorInitialState } from '@/lib/utils/type';
import { Token, User } from '@/lib/api/auth';
import { clearLocalStorageAboutToken } from '@/lib/utils/function';

const tokenInitialState = {
  access_token: localStorage.getItem('accessToken') || '',
  refresh_token: localStorage.getItem('refreshToken') || '',
  token_type: '',
};

const userInitialState = {
  name: null,
  sex: null,
  birth_date: null,
  student_number: null,
  school_name: null,
  parent_name: null,
  school_tel: null,
  applicant_tel: null,
  parent_tel: null,
  address: null,
  detail_address: null,
  photo: null,
  post_code: null,
};

type HeaderState = {
  isLogin: boolean;
  token: Token;
  user: User;
  error: ErrorType;
  getUserError: ErrorType;
};

const initialStateWithLocalStorage: HeaderState = {
  isLogin: true,
  token: tokenInitialState,
  user: userInitialState,
  error: errorInitialState,
  getUserError: errorInitialState,
};

const initialState = {
  isLogin: false,
  token: {
    access_token: '',
    refresh_token: '',
    token_type: '',
  },
  user: userInitialState,
  error: errorInitialState,
  getUserError: errorInitialState,
};

export default function header(
  state: HeaderState = initialStateWithLocalStorage,
  action: HeaderAction,
) {
  switch (action.type) {
    case RESET:
      clearLocalStorageAboutToken();
      return initialState;
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        token: action.payload,
        error: errorInitialState,
        getUserError: errorInitialState,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT:
      clearLocalStorageAboutToken();
      return initialState;
    case LOGIN_ERROR_RESET:
      return {
        ...state,
        error: errorInitialState,
      };
    case RE_GENERATE_TOKEN:
      return state;
    case RE_GENERATE_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case RE_GENERATE_TOKEN_FAILURE:
      clearLocalStorageAboutToken();
      alert('로그인 유효기간이 만료되었습니다.');
      return initialState;
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLogin: true,
        user: action.payload,
        getUserError: errorInitialState,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        getUserError: action.payload,
      };
    default:
      return state;
  }
}
