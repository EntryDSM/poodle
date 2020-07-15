export const focusedInitialState = {
  email: false,
  code: false,
  password: false,
  passwordCheck: false
};
const SET_FOCUSED_EMAIL = 'join/SET_FOCUSED_EMAIL' as const;
const SET_FOCUSED_CODE = 'join/SET_FOCUSED_CODE' as const;
const SET_FOCUSED_PASSWORD = 'join/SET_FOCUSED_PASSWORD' as const;
const SET_FOCUSED_PASSWORD_CHECK = 'join/SET_FOCUSED_PASSWORD_CHECK' as const;
const RESET_FOCUSED_STATE = 'join/RESET_FOCUSED_STATE' as const;

export const setFocusedEmail = (payload: boolean) => ({
  type: SET_FOCUSED_EMAIL,
  payload
});
export const setFocusedCode = (payload: boolean) => ({
  type: SET_FOCUSED_CODE,
  payload
});
export const setFocusedPassword = (payload: boolean) => ({
  type: SET_FOCUSED_PASSWORD,
  payload
});
export const setFocusedPasswordCheck = (payload: boolean) => ({
  type: SET_FOCUSED_PASSWORD_CHECK,
  payload
});
export const resetFocusedState = () => ({
  type: RESET_FOCUSED_STATE
});

export type FocusedAction =
  | ReturnType<typeof setFocusedEmail>
  | ReturnType<typeof setFocusedCode>
  | ReturnType<typeof setFocusedPassword>
  | ReturnType<typeof setFocusedPasswordCheck>
  | ReturnType<typeof resetFocusedState>;

export type FocusedInitialState = {
  email: boolean;
  code: boolean;
  password: boolean;
  passwordCheck: boolean;
};

export const focusedReducer = (
  state: FocusedInitialState = focusedInitialState,
  action: FocusedAction
) => {
  switch (action.type) {
    case SET_FOCUSED_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case SET_FOCUSED_CODE:
      return {
        ...state,
        email: false,
        code: action.payload
      };
    case SET_FOCUSED_PASSWORD:
      return {
        ...state,
        email: false,
        code: false,
        password: action.payload
      };
    case SET_FOCUSED_PASSWORD_CHECK:
      return {
        ...state,
        email: false,
        code: false,
        passwordCheck: action.payload
      };
    case RESET_FOCUSED_STATE:
      return focusedInitialState;
    default:
      return state;
  }
};
