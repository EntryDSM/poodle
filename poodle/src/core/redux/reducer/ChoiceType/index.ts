import ErrorType from '@/lib/utils/type/ErrorType';
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
}

const initialState: State = {
  qualificationExam: false,
  applyType: '',
  district: '',
  graduationStatus: '',
  graduationYear: '2020',
  additionalType: 'NOT_APPLICABLE',
  error: null,
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
    default: {
      return state;
    }
  }
};

export default ChoiceTypeState;
