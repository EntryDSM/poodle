import ErrorType from '@/lib/utils/type';
import {
  SELF_INTRODUCTION,
  STUDY_PLAN,
  IntroductionActionType,
} from '../../actions/Introduction';

export interface State {
  selfIntroduction: string;
  studyPlan: string;
  error: ErrorType | null;
}

const initialState: State = {
  selfIntroduction: '',
  studyPlan: '',
  error: null,
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
    default: {
      return state;
    }
  }
};

export default IntroductionState;
