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
                name: action.payload,
            };
        }
        case GENDER: {
            return {
                ...state,
                gender: action.payload,
            };
        }
        case BIRTHDAY: {
            return {
                ...state,
                birthday: action.payload,
            };
        }
        case NUMBER: {
            return {
                ...state,
                number: action.payload,
            };
        }
        case MIDDLESCHOOL: {
            return {
                ...state,
                middleSchool: action.payload,
            };
        }
        case PROTECTOR_NAME: {
            return {
                ...state,
                protectorName: action.payload,
            };
        }
        case PROTECTOR_PHONE_NUM: {
            return {
                ...state,
                protectorPhoneNum: action.payload,
            };
        }
        case SCHOOL_PHONE_NUM: {
            return {
                ...state,
                schoolPhoneNum: action.payload,
            };
        }
        case PHONE_NUM: {
            return {
                ...state,
                phoneNum: action.payload,
            };
        }
        case PICTURE: {
            return {
                ...state,
                picture: action.payload,
            };
        }
        case ADDRESS: {
            return {
                ...state,
                address: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

export default InfoState;