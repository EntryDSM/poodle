import ErrorType from '@/lib/utils/type';
import { UserStatus } from '@/lib/api/mypage';

export const PROCESS = 'mypage/PROCESS' as const;
export const PROCESS_SUCCESS = 'mypage/PROCESS_SUCCESS' as const;
export const PROCESS_FAILURE = 'mypage/PROCESS_FAILURE' as const;

export const USER_STATUS = 'mypage/USER_STATUS' as const;
export const USER_STATUS_SUCCESS = 'mypage/USER_STATUS_SUCCESS' as const;
export const USER_STATUS_FAILURE = 'mypage/USER_STATUS_FAILURE' as const;

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

export type MypageAction =
  | ReturnType<typeof process>
  | ReturnType<typeof processSuccess>
  | ReturnType<typeof processFailure>
  | ReturnType<typeof userStatusSuccess>
  | ReturnType<typeof userStatusFailure>;
