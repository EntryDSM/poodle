import ErrorType from '@/lib/utils/type';

export const SELF_INTRODUCTION = 'Introduction/SELF_INTRODUCTION' as const;
export const STUDY_PLAN = 'Introduction/STUDY_PLAN' as const;

export const STUDY_PLAN_SUCCESS = 'Introduction/STUDY_PLAN_SUCCESS' as const;
export const STUDY_PLAN_FAILURE = 'Introduction/STUDY_PLAN_FAILURE' as const;
export const STUDY_PLAN_CALL = 'Introduction/STUDY_PLAN_CALL' as const;
export const GET_STUDY_PLAN_SUCCESS = 'Introduction/GET_STUDY_PLAN_SUCCESS' as const;
export const GET_STUDY_PLAN_FAILURE = 'Introduction/GET_STUDY_PLAN_FAILURE' as const;
export const GET_STUDY_PLAN_CALL = 'Introduction/GET_STUDY_PLAN_CALL' as const;
export const SUCCESS_DATE = 'Introduction/SUCCESS_DATE' as const;
export const PAGEMOVE = 'Introduction/PAGEMOVE' as const;

export const SELF_INTRODUCTION_SUCCESS = 'Introduction/SELF_INTRODUCTION_SUCCESS' as const;
export const SELF_INTRODUCTION_FAILURE = 'Introduction/SELF_INTRODUCTION_FAILURE' as const;
export const SELF_INTRODUCTION_CALL = 'Introduction/SELF_INTRODUCTION_CALL' as const;
export const GET_SELF_INTRODUCTION_SUCCESS = 'Introduction/GET_SELF_INTRODUCTION_SUCCESS' as const;
export const GET_SELF_INTRODUCTION_FAILURE = 'Introduction/GET_SELF_INTRODUCTION_FAILURE' as const;
export const GET_SELF_INTRODUCTION_CALL = 'Introduction/GET_SELF_INTRODUCTION_CALL' as const;

export interface SetSelfIntoduction {
  type: typeof SELF_INTRODUCTION;
  payload: { selfIntroduction: string };
}

export interface SetStudyPlan {
  type: typeof STUDY_PLAN;
  payload: { studyPlan: string };
}

export interface SelfIntroductionCall {
  type: typeof SELF_INTRODUCTION_CALL;
  payload: { pageMove: boolean };
}

export interface SelfIntroductionFailure {
  type: typeof SELF_INTRODUCTION_FAILURE;
  payload: { error: ErrorType };
}

export interface SelfIntroductionSuccess {
  type: typeof SELF_INTRODUCTION_SUCCESS;
  payload: {
    date: Date;
    pageMove: boolean;
  };
}

export interface GetSelfIntroductionCall {
  type: typeof GET_SELF_INTRODUCTION_CALL;
}

export interface GetSelfIntroductionFailure {
  type: typeof GET_SELF_INTRODUCTION_FAILURE;
  payload: { error: ErrorType };
}

export interface GetSelfIntroductionSuccess {
  type: typeof GET_SELF_INTRODUCTION_SUCCESS;
  payload: { selfIntroduction: string };
}

export interface StudyPlanCall {
  type: typeof STUDY_PLAN_CALL;
  payload: { pageMove: boolean };
}

export interface StudyPlanFailure {
  type: typeof STUDY_PLAN_FAILURE;
  payload: { error: ErrorType };
}

export interface StudyPlanSuccess {
  type: typeof STUDY_PLAN_SUCCESS;
  payload: {
    date: Date;
    pageMove: boolean;
  };
}

export interface GetStudyPlanCall {
  type: typeof GET_STUDY_PLAN_CALL;
}

export interface GetStudyPlanFailure {
  type: typeof GET_STUDY_PLAN_FAILURE;
  payload: { error: ErrorType };
}

export interface GetStudyPlanSuccess {
  type: typeof GET_STUDY_PLAN_SUCCESS;
  payload: { studyPlan: string };
}

export interface PageMove {
  type: typeof PAGEMOVE;
  payload: { pageMove: boolean };
}

export interface SetSuccessDate {
  type: typeof SUCCESS_DATE;
  payload: { successDate: Date | null };
}

export type IntroductionActionType =
  | SetStudyPlan
  | SetSelfIntoduction
  | SelfIntroductionCall
  | SelfIntroductionFailure
  | SelfIntroductionSuccess
  | GetSelfIntroductionCall
  | GetSelfIntroductionFailure
  | GetSelfIntroductionSuccess
  | GetStudyPlanCall
  | GetStudyPlanFailure
  | GetStudyPlanSuccess
  | StudyPlanCall
  | StudyPlanFailure
  | StudyPlanSuccess
  | PageMove
  | SetSuccessDate;

export const setSelfIntoduction = (payload: {
  selfIntroduction: string;
}): IntroductionActionType => ({
  type: SELF_INTRODUCTION,
  payload,
});

export const setStudyPlan = (payload: {
  studyPlan: string;
}): IntroductionActionType => ({
  type: STUDY_PLAN,
  payload,
});

export const selfIntroductionCall = (payload: {
  pageMove: boolean;
}): IntroductionActionType => ({
  type: SELF_INTRODUCTION_CALL,
  payload,
});

export const selfIntroductionFailure = (payload: {
  error: ErrorType;
}): IntroductionActionType => ({
  type: SELF_INTRODUCTION_FAILURE,
  payload,
});

export const selfIntroductionSuccess = (payload: {
  date: Date;
  pageMove: boolean;
}): IntroductionActionType => ({
  type: SELF_INTRODUCTION_SUCCESS,
  payload,
});

export const getSelfIntroductionCall = (): IntroductionActionType => ({
  type: GET_SELF_INTRODUCTION_CALL,
});

export const getSelfIntroductionFailure = (payload: {
  error: ErrorType;
}): IntroductionActionType => ({
  type: GET_SELF_INTRODUCTION_FAILURE,
  payload,
});

export const getSelfIntroductionSuccess = (payload: {
  selfIntroduction: string;
}): IntroductionActionType => ({
  type: GET_SELF_INTRODUCTION_SUCCESS,
  payload,
});

export const studyPlanCall = (payload: {
  pageMove: boolean;
}): IntroductionActionType => ({
  type: STUDY_PLAN_CALL,
  payload,
});

export const studyPlanFailure = (payload: {
  error: ErrorType;
}): IntroductionActionType => ({
  type: STUDY_PLAN_FAILURE,
  payload,
});

export const studyPlanSuccess = (payload: {
  date: Date;
  pageMove: boolean;
}): IntroductionActionType => ({
  type: STUDY_PLAN_SUCCESS,
  payload,
});

export const getStudyPlanCall = (): IntroductionActionType => ({
  type: GET_STUDY_PLAN_CALL,
});

export const getStudyPlanFailure = (payload: {
  error: ErrorType;
}): IntroductionActionType => ({
  type: GET_STUDY_PLAN_FAILURE,
  payload,
});

export const getStudyPlanSuccess = (payload: {
  studyPlan: string;
}): IntroductionActionType => ({
  type: GET_STUDY_PLAN_SUCCESS,
  payload,
});

export const pageMove = (payload: { pageMove: boolean }) => ({
  type: PAGEMOVE,
  payload,
});

export const setSuccessDate = (payload: { successDate: Date | null }) => ({
  type: SUCCESS_DATE,
  payload,
});
