import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  HeaderAction,
  LOGOUT,
  LOGIN_ERROR_RESET,
} from '../../actions/header';

type HeaderState = {
  isLogin: boolean;
  user: {
    accessToken: string;
    refreshToken: string;
  };
  error: {
    response: {
      code: number;
    };
  };
};

const initialState: HeaderState = {
  isLogin: false,
  user: {
    accessToken: '',
    refreshToken: '',
  },
  error: {
    response: {
      code: 0,
    },
  },
};

export default function header(
  state: HeaderState = initialState,
  action: HeaderAction,
) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        user: action.payload,
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
        error: {
          response: {
            code: 0,
          },
        },
      };
    case LOGIN_ERROR_RESET:
      return {
        ...state,
        error: {
          response: {
            code: 0,
          },
        },
      };
    default:
      return state;
  }
}
