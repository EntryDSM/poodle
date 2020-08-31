import ErrorType from '@/lib/utils/type';
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
}

const initialState: State = {
  selfIntroduction: '',
  studyPlan: '',
  error: null,
  successDate: null,
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
        successDate: action.payload,
      };
    }
    case STUDY_PLAN_SUCCESS: {
      return {
        ...state,
        successDate: action.payload,
      };
    }
    case SELF_INTRODUCTION_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case STUDY_PLAN_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
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
      };
    }
    case GET_SELF_INTRODUCTION_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default IntroductionState;
