import { combineReducers } from 'redux';
import header from './header';
import loading from './loading';
import modal from './modal';
import ChoiceTypeState from './ChoiceType';
import IntroductionState from './Introduction';
import InfoState from './Info';
import GradeState from './Grade';
import QualificationState from './Qualification';

const rootReducer = combineReducers({
  header,
  loading,
  modal,
  ChoiceTypeState,
  IntroductionState,
  InfoState,
  GradeState,
  QualificationState,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
