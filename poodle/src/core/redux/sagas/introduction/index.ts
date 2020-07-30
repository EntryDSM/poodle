import { debounce, takeLatest } from 'redux-saga/effects';
import {
  selfIntroductionStateToRequest,
  studyPlanStateToRequest,
  selfIntroductionResponseToState,
  studyPlanResponseToState,
} from '@/lib/api/ApplicationApplyApi';
import { INTRODUCTION_URL } from '@/lib/api/ServerUrl';
import {
  createGetSaga,
  createMovePageSaga,
  createSaveSaga,
} from '@/lib/utils/saga';
import {
  STUDY_PLAN,
  SELF_INTRODUCTION,
  GET_SELF_INTRODUCTION_CALL,
  GET_STUDY_PLAN_CALL,
  SELF_INTRODUCTION_CALL,
  STUDY_PLAN_CALL,
} from '../../actions/Introduction';
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
  `${PAGENAME}/${INTRODUCTION_ACTIONNAME}`,
  getStateFunc,
);

const studyplanSaveSaga = createSaveSaga(
  studyPlanStateToRequest,
  INTRODUCTION_URL,
  `${PAGENAME}/${STUDY_PLAN_ACTIONNAME}`,
  getStateFunc,
);

const getIntroductionSaga = createGetSaga(
  INTRODUCTION_URL,
  `${PAGENAME}/GET_${INTRODUCTION_ACTIONNAME}`,
  selfIntroductionResponseToState,
);

const studyplanSaveAndMovePageSaga = createMovePageSaga(
  studyPlanStateToRequest,
  INTRODUCTION_URL,
  `${PAGENAME}/${STUDY_PLAN_ACTIONNAME}`,
  getStateFunc,
  'preview',
);

const introductionSaveAndMovePageSaga = createMovePageSaga(
  selfIntroductionStateToRequest,
  INTRODUCTION_URL,
  `${PAGENAME}/${INTRODUCTION_ACTIONNAME}`,
  getStateFunc,
  'preview',
);

const getStudyPlan = createGetSaga(
  INTRODUCTION_URL,
  `${PAGENAME}/GET_${STUDY_PLAN_ACTIONNAME}`,
  studyPlanResponseToState,
);

export default function* introductionSaga() {
  yield debounce(DELAY_TIME, SELF_INTRODUCTION, introductionSaveSaga);
  yield debounce(DELAY_TIME, STUDY_PLAN, studyplanSaveSaga);
  yield takeLatest(GET_SELF_INTRODUCTION_CALL, getIntroductionSaga);
  yield takeLatest(GET_STUDY_PLAN_CALL, getStudyPlan);
  yield takeLatest(SELF_INTRODUCTION_CALL, introductionSaveAndMovePageSaga);
  yield takeLatest(STUDY_PLAN_CALL, studyplanSaveAndMovePageSaga);
}
