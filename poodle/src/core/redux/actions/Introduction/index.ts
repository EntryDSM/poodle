export const SELF_INTRODUCTION = "Introduction/SELF_INTRODUCTION";
export const STUDY_PLAN = "Introduction/STUDY_PLAN";

export interface SetSelfIntoduction {
    type: typeof SELF_INTRODUCTION,
    payload: string,
}

export interface SetStudyPlan {
    type: typeof STUDY_PLAN,
    payload: string,
}

export type IntroductionActionType = 
    | SetStudyPlan
    | SetSelfIntoduction;

export const setSelfIntoduction = (
    selfIntroduction: string,
) => ({
    type: SELF_INTRODUCTION,
    payload: selfIntroduction,
})

export const setStudyPlan = (
    studyPlan: string,
) => ({
    type: STUDY_PLAN,
    payload: studyPlan,
})