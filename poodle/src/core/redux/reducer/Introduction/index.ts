import ErrorType, { errorInitialState } from '@/lib/utils/type';
import {
  SELF_INTRODUCTION,
  STUDY_PLAN,
  IntroductionActionType,
  SELF_INTRODUCTION_SUCCESS,
  STUDY_PLAN_SUCCESS,
  SELF_INTRODUCTION_FAILURE,
  STUDY_PLAN_FAILURE,
  GET_SELF_INTRODUCTION_SUCCESS,
  GET_STUDY_PLAN_SUCCESS,
  GET_STUDY_PLAN_FAILURE,
  GET_SELF_INTRODUCTION_FAILURE,
} from '../../actions/Introduction';

export interface State {
  selfIntroduction: string;
  studyPlan: string;
  error: ErrorType | null;
  successDate: Date | null;
  setSelfIntroductionError: ErrorType;
  getSelfIntroductionError: ErrorType;
  setStudyPlanError: ErrorType;
  getStudyPlanError: ErrorType;
  pageMove: boolean;
}

const initialState: State = {
  selfIntroduction: '',
  studyPlan: '',
  error: null,
  successDate: null,
  setSelfIntroductionError: errorInitialState,
  getSelfIntroductionError: errorInitialState,
  setStudyPlanError: errorInitialState,
  getStudyPlanError: errorInitialState,
  pageMove: false,
};

const IntroductionState = (
  state: State = initialState,
  action: IntroductionActionType,
): State => {
  switch (action.type) {
    case SELF_INTRODUCTION: {
      return {
        ...state,
        selfIntroduction: action.payload.selfIntroduction,
      };
    }
    case STUDY_PLAN: {
      return {
        ...state,
        studyPlan: action.payload.studyPlan,
      };
    }
    case GET_SELF_INTRODUCTION_SUCCESS: {
      return {
        ...state,
        selfIntroduction: action.payload.selfIntroduction,
      };
    }
    case SELF_INTRODUCTION_SUCCESS: {
      return {
        ...state,
        successDate: action.payload.date,
        pageMove: action.payload.pageMove,
      };
    }
    case STUDY_PLAN_SUCCESS: {
      return {
        ...state,
        successDate: action.payload.date,
        pageMove: action.payload.pageMove,
      };
    }
    case SELF_INTRODUCTION_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        setStudyPlanError: errorInitialState,
        getSelfIntroductionError: errorInitialState,
        setSelfIntroductionError: action.payload.error,
        getStudyPlanError: errorInitialState,
        pageMove: false,
      };
    }
    case STUDY_PLAN_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        setStudyPlanError: action.payload.error,
        getSelfIntroductionError: errorInitialState,
        setSelfIntroductionError: errorInitialState,
        getStudyPlanError: errorInitialState,
        pageMove: false,
      };
    }
    case GET_STUDY_PLAN_SUCCESS: {
      return {
        ...state,
        studyPlan: action.payload.studyPlan,
      };
    }
    case GET_STUDY_PLAN_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        setStudyPlanError: errorInitialState,
        getSelfIntroductionError: errorInitialState,
        setSelfIntroductionError: errorInitialState,
        getStudyPlanError: action.payload.error,
      };
    }
    case GET_SELF_INTRODUCTION_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        setStudyPlanError: errorInitialState,
        getSelfIntroductionError: action.payload.error,
        setSelfIntroductionError: errorInitialState,
        getStudyPlanError: errorInitialState,
      };
    }
    default: {
      return state;
    }
  }
};

export default IntroductionState;
