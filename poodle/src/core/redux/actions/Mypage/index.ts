import ErrorType from '@/lib/utils/type';

export const PROCESS = 'mypage/PROCESS' as const;
export const PROCESS_SUCCESS = 'mypage/PROCESS_SUCCESS' as const;
export const PROCESS_FAILURE = 'mypage/PROCESS_FAILURE' as const;

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

export type MypageAction =
  | ReturnType<typeof process>
  | ReturnType<typeof processSuccess>
  | ReturnType<typeof processFailure>;
