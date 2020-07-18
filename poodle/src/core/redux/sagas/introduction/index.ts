import { debounce, takeLatest } from 'redux-saga/effects';
import {
  selfIntroductionResponseToState,
  selfIntroductionStateToRequest,
  studyPlanResponseToState,
  studyPlanStateToRequest,
} from '@/lib/api/ApplicationApplyApi';
import { INTRODUCTION_URL } from '@/lib/api/ServerUrl';
import { createSaveSaga, createGetSaga } from '@/lib/utils/saga';
import {
  STUDY_PLAN,
  SELF_INTRODUCTION,
  GET_STUDY_PLAN,
  GET_SELF_INTRODUCTION,
} from '../../actions/Introduction';
import { RootState } from '../../reducer';
import {
  selfIntroductionServerType,
  studyPlanServerType,
} from '@/lib/api/ApiType';

const PAGENAME = 'Introduction';
const SELF_INTRODUCTION_ACTIONNAME = 'SELF_INTRODUCTION';
const STUDY_PLAN_ACTIONNAME = 'STUDY_PLAN';
const DELAY_TIME = 3000;

const getStateFunc = (state: RootState): RootState['IntroductionState'] =>
  state.IntroductionState;

const introductionSaveSaga = createSaveSaga(
  selfIntroductionStateToRequest,
  INTRODUCTION_URL,
  PAGENAME,
  SELF_INTRODUCTION_ACTIONNAME,
  getStateFunc,
);

const studyplanSaveSaga = createSaveSaga(
  studyPlanStateToRequest,
  INTRODUCTION_URL,
  PAGENAME,
  STUDY_PLAN_ACTIONNAME,
  getStateFunc,
);

const getStudyPlan = createGetSaga<studyPlanServerType>(
  INTRODUCTION_URL,
  studyPlanResponseToState,
  STUDY_PLAN,
);

const getSelfIntroduction = createGetSaga<selfIntroductionServerType>(
  INTRODUCTION_URL,
  selfIntroductionResponseToState,
  SELF_INTRODUCTION,
);

export default function* introductionSaga() {
  yield debounce(DELAY_TIME, SELF_INTRODUCTION, introductionSaveSaga);
  yield debounce(DELAY_TIME, STUDY_PLAN, studyplanSaveSaga);
  yield takeLatest(GET_STUDY_PLAN, getStudyPlan);
  yield takeLatest(GET_SELF_INTRODUCTION, getSelfIntroduction);
}
