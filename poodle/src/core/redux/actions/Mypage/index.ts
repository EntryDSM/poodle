import ErrorType from '@/lib/utils/type';
import { UserStatus, FirstPassStatus, FinalPassStatus } from '@/lib/api/mypage';

export const PROCESS = 'mypage/PROCESS' as const;
export const PROCESS_SUCCESS = 'mypage/PROCESS_SUCCESS' as const;
export const PROCESS_FAILURE = 'mypage/PROCESS_FAILURE' as const;

export const USER_STATUS = 'mypage/USER_STATUS' as const;
export const USER_STATUS_SUCCESS = 'mypage/USER_STATUS_SUCCESS' as const;
export const USER_STATUS_FAILURE = 'mypage/USER_STATUS_FAILURE' as const;

export const GET_PDF = 'mypage/GET_PDF' as const;
export const GET_PDF_SUCCESS = 'mypage/GET_PDF_SUCCESS' as const;
export const GET_PDF_FAILURE = 'mypage/GET_PDF_FAILURE' as const;

export const GET_FIRST_PASS_STATUS = 'mypage/GET_FIRST_PASS_STATUS' as const;
export const GET_FIRST_PASS_STATUS_SUCCESS = 'mypage/GET_FIRST_PASS_STATUS_SUCCESS' as const;
export const GET_FIRST_PASS_STATUS_FAILURE = 'mypage/GET_FIRST_PASS_STATUS_FAILURE' as const;

export const GET_FINAL_PASS_STATUS = 'mypage/GET_FINAL_PASS_STATUS' as const;
export const GET_FINAL_PASS_STATUS_SUCCESS = 'mypage/GET_FINAL_PASS_STATUS_SUCCESS' as const;
export const GET_FINAL_PASS_STATUS_FAILURE = 'mypage/GET_FINAL_PASS_STATUS_FAILURE' as const;

export const RESET_MYPAGE = 'mypage/RESET_MYPAGE' as const;

export const process = () => ({
  type: PROCESS,
});

export type Process = {
  type: boolean;
  info: boolean;
  score: boolean;
  document: boolean;
};

export const processSuccess = (payload: Process) => ({
  type: PROCESS_SUCCESS,
  payload,
});

export const processFailure = (e: ErrorType) => ({
  type: PROCESS_FAILURE,
  payload: e,
});

export const userStatus = () => ({
  type: USER_STATUS,
});

export const userStatusSuccess = (userStatus: UserStatus) => ({
  type: USER_STATUS_SUCCESS,
  payload: userStatus,
});

export const userStatusFailure = (error: ErrorType) => ({
  type: USER_STATUS_FAILURE,
  payload: error,
});

export const getPdf = () => ({
  type: GET_PDF,
});

export const getPdfSuccess = (payload: Blob) => ({
  type: GET_PDF_SUCCESS,
  payload,
});

export const getPdfFailure = (error: ErrorType) => ({
  type: GET_PDF_FAILURE,
  payload: error,
});

export const getFirstPassStatus = () => ({
  type: GET_FIRST_PASS_STATUS,
});

export const getFirstPassStatusSuccess = (payload: FirstPassStatus) => ({
  type: GET_FIRST_PASS_STATUS_SUCCESS,
  payload,
});

export const getFirstPassStatusFailure = (error: ErrorType) => ({
  type: GET_FIRST_PASS_STATUS_FAILURE,
  payload: error,
});

export const getFinalPassStatus = () => ({
  type: GET_FINAL_PASS_STATUS,
});

export const getFinalPassStatusSuccess = (payload: FinalPassStatus) => ({
  type: GET_FINAL_PASS_STATUS_SUCCESS,
  payload,
});

export const getFinalPassStatusFailure = (error: ErrorType) => ({
  type: GET_FINAL_PASS_STATUS_FAILURE,
  payload: error,
});

export const resetMypage = () => ({
  type: RESET_MYPAGE,
});

export type MypageAction =
  | ReturnType<typeof process>
  | ReturnType<typeof processSuccess>
  | ReturnType<typeof processFailure>
  | ReturnType<typeof userStatusSuccess>
  | ReturnType<typeof userStatusFailure>
  | ReturnType<typeof getPdf>
  | ReturnType<typeof getPdfSuccess>
  | ReturnType<typeof getPdfFailure>
  | ReturnType<typeof getFirstPassStatusSuccess>
  | ReturnType<typeof getFirstPassStatusFailure>
  | ReturnType<typeof getFinalPassStatusSuccess>
  | ReturnType<typeof getFinalPassStatusFailure>
  | ReturnType<typeof resetMypage>;
