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
}

const initialState: State = {
  name: '',
  gender: '',
  birthday: '',
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
      return state;
    }
    case INFO_FAILURE: {
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

export default InfoState;
