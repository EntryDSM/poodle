import {
  START_LOADING,
  FINISH_LOADING,
  LoadingAction,
} from '../../actions/Loading';
import { LOGIN } from '../../actions/Header';
import { SEND_EMAIL, VERIFY_CODE, JOIN } from '../../actions/Join';

type LoadingState = {
  [LOGIN]: boolean;
  [SEND_EMAIL]: boolean;
  [VERIFY_CODE]: boolean;
  [JOIN]: boolean;
};

const initialState: LoadingState = {
  [LOGIN]: false,
  [SEND_EMAIL]: false,
  [VERIFY_CODE]: false,
  [JOIN]: false,
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
