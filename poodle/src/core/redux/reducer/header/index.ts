import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_RESET,
  HeaderAction
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
    refreshToken: ''
  },
  error: {
    response: {
      code: 0
    }
  }
};

export default function header(
  state: HeaderState = initialState,
  action: HeaderAction
) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        user: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: {
          accessToken: '',
          refreshToken: ''
        },
        error: {
          ...action.payload,
          response: ''
        }
      };
    case LOGIN_RESET:
      return {
        ...state,
        isLogin: false,
        user: {
          accessToken: '',
          refreshToken: ''
        },
        error: {
          response: {
            code: 0
          }
        }
      };
    default:
      return state;
  }
}
