import { combineReducers } from 'redux';
import header from './header';
import loading from './loading';
import modal from './modal';

const rootReducer = combineReducers({
    header,
    loading,
    modal,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;