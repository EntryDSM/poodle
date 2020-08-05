import { combineReducers } from 'redux';
import Header from './Header';
import Loading from './Loading';
import Modal from './Modal';
import ChoiceTypeState from './ChoiceType';
import IntroductionState from './Introduction';
import InfoState from './Info';
import GradeState from './Grade';
import QualificationState from './Qualification';
import PageState from './Page';
import Join from './Join';
import SearchSchool from './SearchSchool';

const rootReducer = combineReducers({
  Join,
  Header,
  Loading,
  Modal,
  ChoiceTypeState,
  IntroductionState,
  InfoState,
  GradeState,
  QualificationState,
  PageState,
  SearchSchool,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
