import { debounce } from 'redux-saga/effects';
import {
  selfIntroductionStateToRequest,
  studyPlanStateToRequest,
} from '@/lib/api/ApplicationApplyApi';
import { INTRODUCTION_URL } from '@/lib/api/ServerUrl';
import { createSaveSaga } from '@/lib/utils/saga';
import { STUDY_PLAN, SELF_INTRODUCTION } from '../../actions/Introduction';
import { RootState } from '../../reducer';

const PAGENAME = 'Introduction';
const INTRODUCTION_ACTIONNAME = 'INTRODUCTION';
const STUDY_PLAN_ACTIONNAME = 'STUDY_PLAN';
const DELAY_TIME = 3000;

const getStateFunc = (state: RootState): RootState['IntroductionState'] =>
  state.IntroductionState;

const introductionSaveSaga = createSaveSaga(
  selfIntroductionStateToRequest,
  INTRODUCTION_URL,
  PAGENAME,
  INTRODUCTION_ACTIONNAME,
  getStateFunc,
);

const studyplanSaveSaga = createSaveSaga(
  studyPlanStateToRequest,
  INTRODUCTION_URL,
  PAGENAME,
  STUDY_PLAN_ACTIONNAME,
  getStateFunc,
);

export default function* introductionSaga() {
  yield debounce(DELAY_TIME, SELF_INTRODUCTION, introductionSaveSaga);
  yield debounce(DELAY_TIME, STUDY_PLAN, studyplanSaveSaga);
}
