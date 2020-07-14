import {
  SERVICE_TIME,
  ABSENT_DAY,
  CUTCLASS_DAY,
  LEAVELATE_DAY,
  PERCEPTION_DAY,
  GRADE,
  SCORE,
  GradeActionType,
  GradeType,
  GRADE_FAILURE,
  GRADE_SUCCESS,
  ALL,
} from '../../actions/Grade';

export interface State {
  serviceTime: string;
  absentDay: string;
  cutClassDay: string;
  leaveLateDay: string;
  perceptionDay: string;
  grade: GradeType[];
  score: string;
}

export const initialState: State = {
  serviceTime: '',
  absentDay: '',
  cutClassDay: '',
  leaveLateDay: '',
  perceptionDay: '',
  grade: [],
  score: '',
};

const GradeState = (
  state: State = initialState,
  action: GradeActionType,
): State => {
  switch (action.type) {
    case SERVICE_TIME: {
      return {
        ...state,
        serviceTime: action.payload.serviceTime,
      };
    }
    case ABSENT_DAY: {
      return {
        ...state,
        absentDay: action.payload.absentDay,
      };
    }
    case CUTCLASS_DAY: {
      return {
        ...state,
        cutClassDay: action.payload.cutClassDay,
      };
    }
    case LEAVELATE_DAY: {
      return {
        ...state,
        leaveLateDay: action.payload.leaveLateDay,
      };
    }
    case PERCEPTION_DAY: {
      return {
        ...state,
        perceptionDay: action.payload.perceptionDay,
      };
    }
    case GRADE: {
      return {
        ...state,
        grade: action.payload.grade,
      };
    }
    case SCORE: {
      return {
        ...state,
        score: action.payload.score,
      };
    }
    case GRADE_SUCCESS: {
      return state;
    }
    case GRADE_FAILURE: {
      return state;
    }
    case ALL: {
      return action.payload.all;
    }
    default: {
      return state;
    }
  }
};

export default GradeState;
