import { combineReducers } from 'redux';
import Header from './Header';
import Loading from './Loading';
import Modal from './Modal';
import ChoiceTypeState from './ChoiceType';
import IntroductionState from './Introduction';
import InfoState from './Info';
import GradeState from './Grade';
import Join from './Join';
import SearchSchool from './SearchSchool';
import Preview from './Preview';
import ResetPassword from './ResetPassword';
import Mypage from './Mypage';
import Main from './Main';

const rootReducer = combineReducers({
  Join,
  Header,
  Loading,
  Modal,
  ChoiceTypeState,
  IntroductionState,
  InfoState,
  GradeState,
  SearchSchool,
  Preview,
  ResetPassword,
  Mypage,
  Main,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
