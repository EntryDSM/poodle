import {
  START_LOADING,
  FINISH_LOADING,
  LoadingAction,
} from '../../actions/Loading';
import { LOGIN } from '../../actions/Header';
import { SEND_EMAIL, VERIFY_CODE, JOIN } from '../../actions/Join';
import {
  SEND_EMAIL as RESET_SEND_EMAIL,
  VERIFY_CODE as RESET_VERIFY_CODE,
  RESET_PASSWORD,
} from '../../actions/ResetPassword';
import { PROCESS, GET_DOCUMENT } from '../../actions/Mypage';
import { SCHEDULES } from '../../actions/Main';

type LoadingState = {
  [LOGIN]: boolean;
  [SEND_EMAIL]: boolean;
  [VERIFY_CODE]: boolean;
  [JOIN]: boolean;
  [RESET_SEND_EMAIL]: boolean;
  [RESET_VERIFY_CODE]: boolean;
  [RESET_PASSWORD]: boolean;
  [PROCESS]: boolean;
  [SCHEDULES]: boolean;
  [GET_DOCUMENT]: boolean;
};

const initialState: LoadingState = {
  [LOGIN]: false,
  [SEND_EMAIL]: false,
  [VERIFY_CODE]: false,
  [JOIN]: false,
  [RESET_SEND_EMAIL]: false,
  [RESET_VERIFY_CODE]: false,
  [RESET_PASSWORD]: false,
  [PROCESS]: false,
  [SCHEDULES]: false,
  [GET_DOCUMENT]: false,
};

export default function loading(
  state: LoadingState = initialState,
  action: LoadingAction,
) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        [action.payload]: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        [action.payload]: false,
      };
    default:
      return state;
  }
}
