export const SELF_INTRODUCTION = 'Introduction/SELF_INTRODUCTION' as const;
export const STUDY_PLAN = 'Introduction/STUDY_PLAN' as const;
export const STUDY_PALN_SUCCESS = 'Introduction/STUDY_PALN_SUCCESS' as const;
export const STUDY_PLAN_FAILURE = 'Introduction/STUDY_PLAN_FAILURE' as const;
export const SELF_INTRODUCTION_SUCCESS = 'Introduction/SELF_INTRODUCTION_SUCCESS' as const;
export const SELF_INTRODUCTION_FAILURE = 'Introduction/SELF_INTRODUCTION_FAILURE' as const;

export interface SetSelfIntoduction {
  type: typeof SELF_INTRODUCTION;
  payload: { selfIntroduction: string };
}

export interface SetStudyPlan {
  type: typeof STUDY_PLAN;
  payload: { studyPlan: string };
}

export type IntroductionActionType = SetStudyPlan | SetSelfIntoduction;

export const setSelfIntoduction = (payload: { selfIntroduction: string }) => ({
  type: SELF_INTRODUCTION,
  payload,
});

export const setStudyPlan = (payload: { studyPlan: string }) => ({
  type: STUDY_PLAN,
  payload,
});
