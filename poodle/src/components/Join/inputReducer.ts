export const inputInitialState = {
  email: '',
  code: '',
  password: '',
  passwordCheck: '',
};
const SET_INPUT_EMAIL = 'join/SET_INPUT_EMAIL' as const;
const SET_INPUT_CODE = 'join/SETSET_INPUT_CODE_CODE' as const;
const SET_INPUT_PASSWORD = 'join/SET_INPUT_PASSWORD' as const;
const SET_INPUT_PASSWORD_CHECK = 'join/SET_INPUT_PASSWORD_CHECK' as const;

export const setInputEmail = (payload: string) => ({
  type: SET_INPUT_EMAIL,
  payload,
});
export const setInputCode = (payload: string) => ({
  type: SET_INPUT_CODE,
  payload,
});
export const setInputPassword = (payload: string) => ({
  type: SET_INPUT_PASSWORD,
  payload,
});
export const setInputPasswordCheck = (payload: string) => ({
  type: SET_INPUT_PASSWORD_CHECK,
  payload,
});

export type InputAction =
  | ReturnType<typeof setInputEmail>
  | ReturnType<typeof setInputCode>
  | ReturnType<typeof setInputPassword>
  | ReturnType<typeof setInputPasswordCheck>;

export type InputInitialState = {
  email: string;
  code: string;
  password: string;
  passwordCheck: string;
};

export const inputReducer = (
  state: InputInitialState = inputInitialState,
  action: InputAction
) => {
  switch (action.type) {
    case SET_INPUT_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_INPUT_CODE:
      return {
        ...state,
        code: action.payload,
      };
    case SET_INPUT_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SET_INPUT_PASSWORD_CHECK:
      return {
        ...state,
        passwordCheck: action.payload,
      };
    default:
      return state;
  }
};
