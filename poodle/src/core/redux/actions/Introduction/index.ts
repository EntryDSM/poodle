import ErrorType from '@/lib/utils/type/ErrorType';

export const SELF_INTRODUCTION = 'Introduction/SELF_INTRODUCTION' as const;
export const STUDY_PLAN = 'Introduction/STUDY_PLAN' as const;
export const STUDY_PALN_SUCCESS = 'Introduction/SET_STUDY_PALN_SUCCESS' as const;
export const STUDY_PLAN_FAILURE = 'Introduction/SET_STUDY_PLAN_FAILURE' as const;
export const SELF_INTRODUCTION_FAILURE = 'Introduction/SELF_INTRODUCTION_FAILURE' as const;
export const SELF_INTRODUCTION_SUCCESS = 'Introduction/SELF_INTRODUCTION_SUCCESS' as const;
export const GET_SELF_INTRODUCTION = 'Introduction/GET_SELF_INTRODUCTION' as const;
export const GET_STUDY_PLAN = 'Introduction/GET_SELF_INTRODUCTION' as const;

export interface SetSelfIntoduction {
  type: typeof SELF_INTRODUCTION;
  payload: { selfIntroduction: string };
}

export interface SetStudyPlan {
  type: typeof STUDY_PLAN;
  payload: { studyPlan: string };
}

export interface StudyPlanSuccess {
  type: typeof STUDY_PALN_SUCCESS;
}

export interface StudyPlanFailure {
  type: typeof STUDY_PLAN_FAILURE;
  payload: { error: ErrorType };
}

export interface SelfIntroductionSuccess {
  type: typeof SELF_INTRODUCTION_SUCCESS;
}

export interface SelfIntroductionFailure {
  type: typeof SELF_INTRODUCTION_FAILURE;
  payload: { error: ErrorType };
}

export interface GetSelfIntroduction {
  type: typeof GET_SELF_INTRODUCTION;
}

export interface GetStudyPlan {
  type: typeof GET_STUDY_PLAN;
}

export type IntroductionActionType =
  | SetStudyPlan
  | SetSelfIntoduction
  | StudyPlanFailure
  | StudyPlanSuccess
  | SelfIntroductionFailure
  | SelfIntroductionSuccess
  | GetSelfIntroduction
  | GetStudyPlan;

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

export const studyPlanSuccess = (): IntroductionActionType => ({
  type: STUDY_PALN_SUCCESS,
});

export const selfIntroductionSuccess = (): IntroductionActionType => ({
  type: SELF_INTRODUCTION_SUCCESS,
});

export const getStudyPlan = (): IntroductionActionType => ({
  type: GET_STUDY_PLAN,
});

export const getSelfIntroduction = (): IntroductionActionType => ({
  type: GET_SELF_INTRODUCTION,
});

export const studyPlanFailure = (payload: {
  error: ErrorType;
}): IntroductionActionType => ({
  type: STUDY_PLAN_FAILURE,
  payload,
});

export const selfIntroductionFailure = (payload: {
  error: ErrorType;
}): IntroductionActionType => ({
  type: STUDY_PLAN_FAILURE,
  payload,
});
