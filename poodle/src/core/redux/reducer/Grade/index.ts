import ErrorType, { errorInitialState } from '@/lib/utils/type';
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
  GET_GRADE_FAILURE,
  GET_GRADE_SUCCESS,
  PAGEMOVE,
} from '../../actions/Grade';
import { setInitalGradeState } from '@/lib/api/ApplicationApplyApi';
import { GraduationStatusType } from '../../actions/ChoiceType';

export interface State {
  serviceTime: string;
  absentDay: string;
  cutClassDay: string;
  leaveLateDay: string;
  perceptionDay: string;
  grade: GradeType[];
  score: string;
  error: ErrorType | null;
  successTime: Date | null;
  getGradeError: ErrorType;
  setGradeError: ErrorType;
  gradeType: GraduationStatusType | '';
  pageMove: boolean;
}

export const initialState: State = {
  serviceTime: '',
  absentDay: '',
  cutClassDay: '',
  leaveLateDay: '',
  perceptionDay: '',
  grade: setInitalGradeState(),
  score: '',
  error: null,
  successTime: null,
  getGradeError: errorInitialState,
  setGradeError: errorInitialState,
  gradeType: '',
  pageMove: false,
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
      return {
        ...state,
        successTime: action.payload.date,
        setGradeError: errorInitialState,
        getGradeError: errorInitialState,
        pageMove: action.payload.pageMove,
        error: null,
      };
    }
    case ALL: {
      return action.payload.all;
    }
    case GRADE_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        setGradeError: action.payload.error,
        getGradeError: errorInitialState,
        pageMove: false,
      };
    }
    case GET_GRADE_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        getGradeError: action.payload.error,
        setGradeError: errorInitialState,
      };
    }
    case GET_GRADE_SUCCESS: {
      return {
        ...action.payload,
        setGradeError: errorInitialState,
        getGradeError: errorInitialState,
        error: null,
      };
    }
    case PAGEMOVE: {
      return {
        ...state,
        pageMove: action.payload.pageMove,
      };
    }
    default: {
      return state;
    }
  }
};

export default GradeState;
