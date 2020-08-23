import {
  PROCESS_SUCCESS,
  PROCESS_FAILURE,
  Process,
  MypageAction,
} from '../../actions/Mypage';
import ErrorType, { errorInitialState } from '@/lib/utils/type';

type MypageState = {
  process: Process;
  processError: ErrorType;
};

const initialState: MypageState = {
  process: {
    type: false,
    info: false,
    score: false,
    document: false,
  },
  processError: errorInitialState,
};

export default function mypage(
  state: MypageState = initialState,
  action: MypageAction,
) {
  switch (action.type) {
    case PROCESS_SUCCESS:
      return {
        ...state,
        process: action.payload,
        processError: errorInitialState,
      };
    case PROCESS_FAILURE:
      return {
        ...state,
        processError: action.payload,
      };
    default:
      return state;
  }
}
