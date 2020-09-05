import ErrorType, { errorInitialState } from '@/lib/utils/type';
import { GraduationStatusType } from '../../actions/ChoiceType';
import {
  NAME,
  GENDER,
  BIRTHDAY,
  NUMBER,
  MIDDLESCHOOL,
  PROTECTOR_NAME,
  PICTURE,
  SCHOOL_PHONE_NUM,
  PROTECTOR_PHONE_NUM,
  PHONE_NUM,
  ADDRESS,
  POST_NUM,
  ADDRESS_DETAIL,
  InfoActionType,
  INFO_FAILURE,
  INFO_SUCCESS,
  ALL,
  GRADE_NUMBER,
  CLASS_NUMBER,
  GET_INFO_SUCCESS,
  GET_INFO_FAILURE,
  SET_PICTURE_FAILURE,
  SET_PICTURE_SUCCESS,
  YEAR,
  MONTH,
  DAY,
  SCHOOL_CODE,
  PAGEMOVE,
} from '../../actions/Info';

export interface State {
  name: string;
  gender: string;
  birthday: string;
  number: string;
  middleSchool: string;
  protectorName: string;
  picture: string;
  schoolPhoneNum: string;
  protectorPhoneNum: string;
  phoneNum: string;
  address: string;
  postNum: string;
  detailAddress: string;
  classNumber: string;
  gradeNumber: string;
  error: ErrorType | null;
  successDate: Date | null;
  gradeType: GraduationStatusType | '';
  setInfoError: ErrorType;
  getInfoError: ErrorType;
  year: string;
  month: string;
  day: string;
  schoolCode: string;
  pageMove: boolean;
}

const initialState: State = {
  name: '',
  gender: '',
  birthday: '2000-01-01',
  number: '',
  middleSchool: '',
  protectorName: '',
  picture: '',
  schoolPhoneNum: '',
  protectorPhoneNum: '',
  phoneNum: '',
  address: '',
  postNum: '',
  detailAddress: '',
  classNumber: '',
  gradeNumber: '',
  error: null,
  successDate: null,
  gradeType: '',
  setInfoError: errorInitialState,
  getInfoError: errorInitialState,
  year: '2020',
  month: '01',
  day: '01',
  schoolCode: '',
  pageMove: false,
};

const InfoState = (
  state: State = initialState,
  action: InfoActionType,
): State => {
  switch (action.type) {
    case NAME: {
      return {
        ...state,
        name: action.payload.name,
      };
    }
    case GENDER: {
      return {
        ...state,
        gender: action.payload.gender,
      };
    }
    case BIRTHDAY: {
      return {
        ...state,
        birthday: action.payload.birthday,
      };
    }
    case NUMBER: {
      return {
        ...state,
        number: action.payload.number,
      };
    }
    case GRADE_NUMBER: {
      return {
        ...state,
        gradeNumber: action.payload.gradeNumber,
      };
    }
    case CLASS_NUMBER: {
      return {
        ...state,
        classNumber: action.payload.classNumber,
      };
    }
    case MIDDLESCHOOL: {
      return {
        ...state,
        middleSchool: action.payload.schoolName,
      };
    }
    case PROTECTOR_NAME: {
      return {
        ...state,
        protectorName: action.payload.protectorName,
      };
    }
    case PROTECTOR_PHONE_NUM: {
      return {
        ...state,
        protectorPhoneNum: action.payload.protectorPhoneNum,
      };
    }
    case SCHOOL_PHONE_NUM: {
      return {
        ...state,
        schoolPhoneNum: action.payload.schoolPhoneNum,
      };
    }
    case PHONE_NUM: {
      return {
        ...state,
        phoneNum: action.payload.phoneNum,
      };
    }
    case PICTURE: {
      return {
        ...state,
        picture: action.payload.picture,
      };
    }
    case ADDRESS: {
      return {
        ...state,
        address: action.payload.address,
      };
    }
    case POST_NUM: {
      return {
        ...state,
        postNum: action.payload.postNum,
      };
    }
    case ADDRESS_DETAIL: {
      return {
        ...state,
        detailAddress: action.payload.detailAddress,
      };
    }
    case INFO_SUCCESS: {
      return {
        ...state,
        successDate: action.payload.date,
        pageMove: action.payload.pageMove,
      };
    }
    case INFO_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        pageMove: false,
      };
    }
    case GET_INFO_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        getInfoError: action.payload.error,
        setInfoError: errorInitialState,
      };
    }
    case GET_INFO_SUCCESS: {
      return action.payload;
    }
    case ALL: {
      return action.payload.all;
    }
    case SET_PICTURE_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        getInfoError: errorInitialState,
        setInfoError: action.payload.error,
      };
    }
    case SET_PICTURE_SUCCESS: {
      return {
        ...state,
        picture: action.payload.url,
      };
    }
    case YEAR: {
      return {
        ...state,
        year: action.payload.year,
      };
    }
    case MONTH: {
      return {
        ...state,
        month: action.payload.month,
      };
    }
    case DAY: {
      return {
        ...state,
        day: action.payload.day,
      };
    }
    case SCHOOL_CODE: {
      return {
        ...state,
        schoolCode: action.payload.code,
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

export default InfoState;
