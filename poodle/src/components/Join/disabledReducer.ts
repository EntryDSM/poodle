export const disabledInitialState = {
  email: true,
  code: true,
  password: true,
  passwordCheck: true,
};
const SET_DISABLED_EMAIL = 'join/SET_DISABLED_EMAIL' as const;
const SET_DISABLED_CODE = 'join/SET_DISABLED_CODE' as const;
const SET_DISABLED_PASSWORD = 'join/SET_DISABLED_PASSWORD' as const;
const SET_DISABLED_PASSWORD_CHECK = 'join/SET_DISABLED_PASSWORD_CHECK' as const;
const RESET_DISABLED_STATE = 'join/RESET_DISABLED_STATE' as const;

export const setDisabledEmail = (payload: boolean) => ({
  type: SET_DISABLED_EMAIL,
  payload,
});
export const setDisabledCode = (payload: boolean) => ({
  type: SET_DISABLED_CODE,
  payload,
});
export const setDisabledPassword = (payload: boolean) => ({
  type: SET_DISABLED_PASSWORD,
  payload,
});
export const setDisabledPasswordCheck = (
  payload: boolean
) => ({
  type: SET_DISABLED_PASSWORD_CHECK,
  payload,
});
export const resetDisabledState = () => ({
  type: RESET_DISABLED_STATE,
});

export type DisabledAction =
  | ReturnType<typeof setDisabledEmail>
  | ReturnType<typeof setDisabledCode>
  | ReturnType<typeof setDisabledPassword>
  | ReturnType<typeof setDisabledPasswordCheck>
  | ReturnType<typeof resetDisabledState>;

export type DisabledtInitialState = {
  email: boolean;
  code: boolean;
  password: boolean;
  passwordCheck: boolean;
};

export const disabledReducer = (
  state: DisabledtInitialState = disabledInitialState,
  action: DisabledAction
) => {
  switch (action.type) {
    case SET_DISABLED_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_DISABLED_CODE:
      return {
        ...state,
        email: true,
        code: action.payload,
      };
    case SET_DISABLED_PASSWORD:
      return {
        ...state,
        code: true,
        password: action.payload,
      };
    case SET_DISABLED_PASSWORD_CHECK:
      return {
        ...state,
        passwordCheck: action.payload,
      };
    case RESET_DISABLED_STATE:
      return disabledInitialState;
    default:
      return state;
  }
};
