import { combineReducers } from 'redux';
import header from './header';
import loading from './loading';
import modal from './modal';
import join from './join';

const rootReducer = combineReducers({
  header,
  loading,
  modal,
  join,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
