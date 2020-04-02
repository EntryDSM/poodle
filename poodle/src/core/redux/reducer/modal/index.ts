import { MODALON, MODALOFF, MODALCLEAR, ModalAction,
    LOGINMODAL, RESETMODAL, YELLOWCHECKMODAL, BLUECHECKMODAL,
    REDERRORMODAL, WARNINGMODAL

} from '../../actions/modal';

type ModalState = {
    [LOGINMODAL]: boolean,
    [RESETMODAL]: boolean,
    [YELLOWCHECKMODAL]: boolean,
    [BLUECHECKMODAL]: boolean,
    [REDERRORMODAL]: boolean,
    [WARNINGMODAL]: boolean,
}

const initialState: ModalState = {
    [LOGINMODAL]: false,
    [RESETMODAL]: false,
    [YELLOWCHECKMODAL]: false,
    [YELLOWCHECKMODAL]: false,
    [BLUECHECKMODAL]: false,
    [REDERRORMODAL]: false,
    [WARNINGMODAL]: false,
}

export default function modal(state: ModalState = initialState, action: ModalAction) {
    switch (action.type) {
        case MODALON:
            return {
                ...state,
                [action.payload]: true
            }
        case MODALOFF:
            return {
                ...state,
                [action.payload]: false
            }
        case MODALCLEAR:
            return initialState;
        default:
            return state;
    }
}