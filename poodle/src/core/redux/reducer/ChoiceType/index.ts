import ErrorType, { errorInitialState } from '@/lib/utils/type';
import {
  APPLYTYPE,
  DISTRICT,
  GRADUATION_STATUS,
  GRADUATION_YEAR,
  ChoiceTypeActionType,
  TYPE_FAILURE,
  TYPE_SUCCESS,
  ALL,
  ADDITIONALTYPE,
  GET_TYPE_FAILURE,
  GET_TYPE_SUCCESS,
  GED_SUCCESS_MONTH,
  GED_SUCCESS_YEAR,
  GRADUATION_MONTH,
  ISQUALIFICATION,
  PAGEMOVE,
} from '../../actions/ChoiceType';
import { AdditionalType } from '../../actions/ChoiceType';

export interface State {
  qualificationExam: boolean;
  applyType: string;
  district: string;
  graduationStatus: string;
  graduationYear: string;
  graduationMonth: string;
  additionalType: AdditionalType;
  error: ErrorType | null;
  gedSuccessYear: string;
  gedSuccessMonth: string;
  successTime: Date | null;
  getTypeError: ErrorType;
  setTypeError: ErrorType;
  setTypeAndMovePageError: ErrorType;
  pageMove: boolean;
}

const initialState: State = {
  qualificationExam: false,
  applyType: '',
  district: '',
  graduationStatus: '',
  graduationYear: '2020',
  graduationMonth: '1',
  additionalType: 'NOT_APPLICABLE',
  error: null,
  gedSuccessMonth: '1',
  gedSuccessYear: '2020',
  successTime: null,
  getTypeError: errorInitialState,
  setTypeError: errorInitialState,
  setTypeAndMovePageError: errorInitialState,
  pageMove: false,
};

const ChoiceTypeState = (
  state: State = initialState,
  action: ChoiceTypeActionType,
): State => {
  switch (action.type) {
    case APPLYTYPE: {
      return {
        ...state,
        applyType: action.payload.type,
      };
    }
    case DISTRICT: {
      return {
        ...state,
        district: action.payload.district,
      };
    }
    case GRADUATION_YEAR: {
      return {
        ...state,
        graduationYear: action.payload.year,
      };
    }
    case GRADUATION_MONTH: {
      return {
        ...state,
        graduationMonth: action.payload.month,
      };
    }
    case GRADUATION_STATUS: {
      return {
        ...state,
        graduationStatus: action.payload.status,
      };
    }
    case ALL: {
      return {
        ...state,
        qualificationExam: action.payload.all.qualificationExam,
        applyType: action.payload.all.applyType,
        district: action.payload.all.district,
        graduationStatus: action.payload.all.graduationStatus,
        graduationYear: action.payload.all.graduationYear,
        additionalType: action.payload.all.additionalType,
      };
    }
    case ADDITIONALTYPE: {
      return {
        ...state,
        additionalType: action.payload.additionalType,
      };
    }
    case GET_TYPE_SUCCESS: {
      return action.payload;
    }
    case TYPE_SUCCESS: {
      return {
        ...state,
        successTime: action.payload.date,
        pageMove: action.payload.pageMove,
      };
    }
    case GET_TYPE_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        getTypeError: action.payload.error,
        setTypeError: errorInitialState,
      };
    }
    case TYPE_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        setTypeError: action.payload.error,
        getTypeError: errorInitialState,
        pageMove: false,
      };
    }
    case GED_SUCCESS_MONTH: {
      return {
        ...state,
        gedSuccessMonth: action.payload.month,
      };
    }
    case GED_SUCCESS_YEAR: {
      return {
        ...state,
        gedSuccessYear: action.payload.year,
      };
    }
    case ISQUALIFICATION: {
      return {
        ...state,
        qualificationExam: action.payload.qualification,
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

export default ChoiceTypeState;
