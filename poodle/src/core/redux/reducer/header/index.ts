import { 
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    HeaderAction
} from '../../actions/header';


type HeaderState = {
    isLogin: boolean,
    error: {
        login: string
    },
    user: {
        userName: string
    },
}

const initialState: HeaderState = {
    isLogin: false,
    error: {
        login: ''
    },
    user: {
        userName: ''
    },
}

export default function header(state: HeaderState = initialState, action: HeaderAction) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                error: {
                    login: ''
                },
                user: action.payload,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: {
                    ...state.error,
                    login: action.payload
                },
                user: {
                    userName: ''
                }
            }
        default:
            return state;
    }
}