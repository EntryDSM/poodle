import { 
    QUALIFACATION_EXAM, 
    APPLYTYPE, 
    DISTRICT, 
    GRADUATION_STATUS, 
    GRADUATION_YEAR, 
    NATIONAL_MERIT,
    SPECIAL_ADMISSION,
    ChoiceTypeActionType,
} from '../../actions/ChoiceType';

export interface State {
    qualifacationExam: boolean,
    applyType: string,
    district: string,
    graduationStatus: string,
    graduationYear: string,
    isNationalMerit: boolean,
    isSpecialAdminssion: boolean,
};

const initialState: State = {
    qualifacationExam: false,
    applyType: "",
    district: "",
    graduationStatus: "",
    graduationYear: "",
    isNationalMerit: false,
    isSpecialAdminssion: false,
};

const ChoiceTypeState = (
    state: State = initialState,
    action: ChoiceTypeActionType,
): State => {
    switch(action.type){
        case QUALIFACATION_EXAM : {
            return {
                ...state,
                qualifacationExam: action.payload,
            }
        }
        case APPLYTYPE: {
            return {
                ...state,
                applyType: action.payload,
            }
        }
        case DISTRICT: {
            return {
                ...state,
                district: action.payload,
            }
        }
        case GRADUATION_YEAR: {
            return {
                ...state,
                graduationYear: action.payload,
            }
        }
        case GRADUATION_STATUS: {
            return {
                ...state,
                graduationStatus: action.payload,
            }
        }
        case NATIONAL_MERIT: {
            return {
                ...state,
                isNationalMerit: action.payload,
            }
        }
        case SPECIAL_ADMISSION: {
            return {
                ...state,
                isSpecialAdminssion: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

export default ChoiceTypeState;