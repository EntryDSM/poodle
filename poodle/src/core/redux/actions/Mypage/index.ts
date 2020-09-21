import ErrorType from '@/lib/utils/type';
import { UserStatus } from '@/lib/api/mypage';

export const PROCESS = 'mypage/PROCESS' as const;
export const PROCESS_SUCCESS = 'mypage/PROCESS_SUCCESS' as const;
export const PROCESS_FAILURE = 'mypage/PROCESS_FAILURE' as const;

export const USER_STATUS = 'mypage/USER_STATUS' as const;
export const USER_STATUS_SUCCESS = 'mypage/USER_STATUS_SUCCESS' as const;
export const USER_STATUS_FAILURE = 'mypage/USER_STATUS_FAILURE' as const;

export const GET_PDF = 'mypage/GET_PDF' as const;
export const GET_PDF_SUCCESS = 'mypage/GET_PDF_SUCCESS' as const;
export const GET_PDF_FAILURE = 'mypage/GET_PDF_FAILURE' as const;

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

export const getPdfError = (error: ErrorType) => ({
  type: GET_PDF_FAILURE,
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
  | ReturnType<typeof getPdfError>
  | ReturnType<typeof resetMypage>;
