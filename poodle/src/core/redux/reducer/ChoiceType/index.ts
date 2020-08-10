import ErrorType from '@/lib/utils/type';
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
  GED_SUCCESS_DATE,
  GED_SUCCESS_MONTH,
  GED_SUCCESS_YEAR,
} from '../../actions/ChoiceType';
import { AdditionalType } from '../../actions/ChoiceType';

export interface State {
  qualificationExam: boolean;
  applyType: string;
  district: string;
  graduationStatus: string;
  graduationYear: string;
  additionalType: AdditionalType;
  error: ErrorType | null;
  gedSuccessYear: string;
  gedSuccessMonth: string;
  gedSuccessDate: string;
}

const initialState: State = {
  qualificationExam: false,
  applyType: '',
  district: '',
  graduationStatus: '',
  graduationYear: '2020',
  additionalType: 'NOT_APPLICABLE',
  error: null,
  gedSuccessDate: '1',
  gedSuccessMonth: '1',
  gedSuccessYear: '2020',
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
    case GRADUATION_STATUS: {
      return {
        ...state,
        graduationStatus: action.payload.status,
      };
    }
    case TYPE_SUCCESS: {
      return state;
    }
    case TYPE_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
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
      return action.payload.response;
    }
    case GET_TYPE_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case TYPE_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case GED_SUCCESS_DATE: {
      return {
        ...state,
        gedSuccessDate: action.payload.date,
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
    default: {
      return state;
    }
  }
};

export default ChoiceTypeState;
