import { 
    START_LOADING,
    FINISH_LOADING,
    LoadingAction
} from '../../actions/loading';
import { LOGIN } from '../../actions/header';

type LoadingState = {
    [LOGIN]: boolean
};

const initialState: LoadingState = {
    [LOGIN]: false
};

export default function loading(state: LoadingState = initialState, action: LoadingAction) {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                [action.payload]: true,
            };
        case FINISH_LOADING:
            return {
                ...state,
                [action.payload]: false
            }
        default: 
            return state;
    }
};