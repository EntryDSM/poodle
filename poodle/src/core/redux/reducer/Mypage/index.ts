import {
  PROCESS_SUCCESS,
  PROCESS_FAILURE,
  Process,
  MypageAction,
  USER_STATUS_SUCCESS,
  USER_STATUS_FAILURE,
  GET_PDF_SUCCESS,
  GET_PDF_FAILURE,
  RESET_MYPAGE,
  GET_FIRST_PASS_STATUS_SUCCESS,
  GET_FIRST_PASS_STATUS_FAILURE,
  GET_FINAL_PASS_STATUS_SUCCESS,
  GET_FINAL_PASS_STATUS_FAILURE,
} from '../../actions/Mypage';
import ErrorType, { errorInitialState } from '@/lib/utils/type';
import { UserStatus } from '@/lib/api/mypage';

type MypageState = {
  process: Process;
  processError: ErrorType;
  userStatus: UserStatus;
  userStatueError: ErrorType;
  pdf: Blob;
  getPdfError: ErrorType;
  isPassedFirst: boolean;
  isPassedFinal: boolean;
  getFirstPassStatusError: ErrorType;
  getFinalPassStatusError: ErrorType;
};

const userStatusInitialState: UserStatus = {
  name: '',
  sex: 'FEMALE',
  paid: false,
  printed_application_arrived: false,
  final_submit: false,
  submitted_at: '',
};

const initialState: MypageState = {
  process: {
    type: false,
    info: false,
    score: false,
    document: false,
  },
  processError: errorInitialState,
  userStatus: userStatusInitialState,
  userStatueError: errorInitialState,
  pdf: new Blob(),
  getPdfError: errorInitialState,
  isPassedFirst: false,
  isPassedFinal: false,
  getFirstPassStatusError: errorInitialState,
  getFinalPassStatusError: errorInitialState,
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
    case USER_STATUS_SUCCESS:
      return {
        ...state,
        userStatus: action.payload,
        userStatueError: errorInitialState,
      };
    case USER_STATUS_FAILURE:
      return {
        ...state,
        userStatueError: action.payload,
      };
    case GET_PDF_SUCCESS:
      return {
        ...state,
        getPdfError: errorInitialState,
        pdf: action.payload,
      };
    case GET_PDF_FAILURE:
      return {
        ...state,
        getPdfError: action.payload,
      };
    case GET_FIRST_PASS_STATUS_SUCCESS:
      return {
        ...state,
        isPassedFirst: action.payload.is_passed,
        getFirstPassStatusError: errorInitialState,
      };
    case GET_FIRST_PASS_STATUS_FAILURE:
      return {
        ...state,
        getFirstPassStatusError: action.payload,
      };
    case GET_FINAL_PASS_STATUS_SUCCESS:
      return {
        ...state,
        isPassedFirst: action.payload.is_passed,
        getFinalPassStatusError: errorInitialState,
      };
    case GET_FINAL_PASS_STATUS_FAILURE:
      return {
        ...state,
        getFinalPassStatusError: action.payload,
      };
    case RESET_MYPAGE:
      return initialState;
    default:
      return state;
  }
}
