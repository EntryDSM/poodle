import {
  PROCESS_SUCCESS,
  PROCESS_FAILURE,
  Process,
  MypageAction,
  USER_STATUS_SUCCESS,
  USER_STATUS_FAILURE,
  GET_DOCUMENT_SUCCESS,
  GET_DOCUMENT_FAILURE,
  RESET_MYPAGE,
} from '../../actions/Mypage';
import ErrorType, { errorInitialState } from '@/lib/utils/type';
import { UserStatus } from '@/lib/api/mypage';

type MypageState = {
  process: Process;
  processError: ErrorType;
  userStatus: UserStatus;
  userStatueError: ErrorType;
  document: Blob;
  getDocumentError: ErrorType;
};

const userStatusInitialState: UserStatus = {
  name: '',
  sex: 'FEMALE',
  paid: false,
  printed_application_arrived: false,
  passed_first_apply: false,
  passed_interview: false,
  final_submit: false,
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
  document: new Blob(),
  getDocumentError: errorInitialState,
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
    case GET_DOCUMENT_SUCCESS:
      return {
        ...state,
        getDocumentError: errorInitialState,
        document: action.payload,
      };
    case GET_DOCUMENT_FAILURE:
      return {
        ...state,
        getDocumentError: action.payload,
      };
    case RESET_MYPAGE:
      return initialState;
    default:
      return state;
  }
}
