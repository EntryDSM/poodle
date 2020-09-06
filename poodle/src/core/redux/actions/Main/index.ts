import ErrorType from '@/lib/utils/type';

export const SCHEDULES = 'main/SCHEDULES' as const;
export const SCHEDULES_SUCCESS = 'main/SCHEDULES_SUCCESS' as const;
export const SCHEDULES_FAILURE = 'main/SCHEDULES_FAILURE' as const;

export const schedules = () => ({
  type: SCHEDULES,
});

export type ScheduleId = 'application' | 'first_apply' | 'interview' | 'notice';

export type Schedule = {
  id: ScheduleId;
  start_date: string;
  end_date: string;
};

export const schedulesSuccess = (payload: Schedule[]) => ({
  type: SCHEDULES_SUCCESS,
  payload,
});

export const schedulesFailure = (e: ErrorType) => ({
  type: SCHEDULES_FAILURE,
  payload: e,
});

export type MainAction =
  | ReturnType<typeof schedules>
  | ReturnType<typeof schedulesSuccess>
  | ReturnType<typeof schedulesFailure>;
