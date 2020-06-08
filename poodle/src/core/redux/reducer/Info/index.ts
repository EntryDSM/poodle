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
    InfoActionType,
} from '../../actions/Info';

export interface State {
    name: string,
    gender: string,
    birthday: string,
    number: string,
    middleSchool: string,
    protectorName: string,
    picture: File | null,
    schoolPhoneNum: string,
    protectorPhoneNum: string,
    phoneNum: string,
    address: string,
}

const initialState: State = {
    name: "",
    gender: "",
    birthday: "",
    number: "",
    middleSchool: "",
    protectorName: "",
    picture: null,
    schoolPhoneNum: "",
    protectorPhoneNum: "",
    phoneNum: "",
    address: "",
};

const InfoState = (
    state: State = initialState,
    action: InfoActionType,
): State => {
    switch(action.type){
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
                address: action.payload.address ,
            }
        }
        default: {
            return state;
        }
    }
}

export default InfoState;