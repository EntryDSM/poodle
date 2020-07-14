import { State } from '../../reducer/Grade';

export const SERVICE_TIME = 'Grade/SERVICE_TIME' as const;
export const ABSENT_DAY = 'Grade/ABSENT_DAY' as const;
export const CUTCLASS_DAY = 'Grade/CUTCLASS' as const;
export const LEAVELATE_DAY = 'Grade/LEAVELATE_DAY' as const;
export const PERCEPTION_DAY = 'Grade/PERCEPTION_DAY' as const;
export const GRADE = 'Grade/GRADE' as const;
export const SCORE = 'Grade/SCORE' as const;
export const GRADE_SUCCESS = 'Grade/GRADE_SUCCESS' as const;
export const GRADE_FAILURE = 'Grade/GRADE_FAILURE' as const;
export const ALL = 'Grade/ALL' as const;
export type ScoreType = 'A' | 'B' | 'C' | 'D' | 'E' | 'X';

export type SubjectType =
  | 'korean'
  | 'math'
  | 'science'
  | 'english'
  | 'tech'
  | 'history'
  | 'society';

export interface GradeType {
  subject: SubjectType;
  grade: number;
  semester: number;
  score: ScoreType;
}

export interface SetServiceTime {
  type: typeof SERVICE_TIME;
  payload: { serviceTime: string };
}

export interface SetAbsentDay {
  type: typeof ABSENT_DAY;
  payload: { absentDay: string };
}

export interface SetCutClassDay {
  type: typeof CUTCLASS_DAY;
  payload: { cutClassDay: string };
}

export interface SetLeaveLateDay {
  type: typeof LEAVELATE_DAY;
  payload: { leaveLateDay: string };
}

export interface SetPerceptionDay {
  type: typeof PERCEPTION_DAY;
  payload: { perceptionDay: string };
}

export interface SetGrade {
  type: typeof GRADE;
  payload: { grade: GradeType[] };
}

export interface SetScore {
  type: typeof SCORE;
  payload: { score: string };
}

export interface GradeSuccess {
  type: typeof GRADE_SUCCESS;
  payload: { data: Object };
}

export interface GradeFailure {
  type: typeof GRADE_FAILURE;
  payload: { error: Error };
  error: boolean;
}

export interface SetAll {
  type: typeof ALL;
  payload: { all: State };
}

export type GradeActionType =
  | SetServiceTime
  | SetAbsentDay
  | SetCutClassDay
  | SetLeaveLateDay
  | SetPerceptionDay
  | SetGrade
  | SetScore
  | GradeSuccess
  | GradeFailure
  | SetAll;

export const setServiceTime = (payload: {
  serviceTime: string;
}): GradeActionType => ({
  type: SERVICE_TIME,
  payload,
});

export const setAbsentDay = (payload: {
  absentDay: string;
}): GradeActionType => ({
  type: ABSENT_DAY,
  payload,
});
export const setCutClassDay = (payload: {
  cutClassDay: string;
}): GradeActionType => ({
  type: CUTCLASS_DAY,
  payload,
});
export const setLeaveLateDay = (payload: {
  leaveLateDay: string;
}): GradeActionType => ({
  type: LEAVELATE_DAY,
  payload,
});
export const setPerceptionDay = (payload: {
  perceptionDay: string;
}): GradeActionType => ({
  type: PERCEPTION_DAY,
  payload,
});
export const setGrade = (payload: { grade: GradeType[] }): GradeActionType => ({
  type: GRADE,
  payload,
});

export const setScore = (payload: { score: string }): GradeActionType => ({
  type: SCORE,
  payload,
});

export const gradeSuccess = (payload: { data: Object }): GradeActionType => ({
  type: GRADE_SUCCESS,
  payload,
});

export const gradeFailure = (payload: { error: Error }): GradeActionType => ({
  type: GRADE_FAILURE,
  payload,
  error: true,
});

export const setAll = (payload: { all: State }): GradeActionType => ({
  type: ALL,
  payload,
});
