import { debounce, takeLatest } from 'redux-saga/effects';
import { GRADE_URL } from '@/lib/api/ServerUrl';
import { createSaveSaga, createProxySaga, createGetSaga } from '@/lib/utils/saga';
import {
  gradeStateToRequest,
  gradeStateToGedRequest,, gradeResponseToState
} from '@/lib/api/ApplicationApplyApi';
import { RootState } from '../../reducer';
import {
  SERVICE_TIME,
  ABSENT_DAY,
  CUTCLASS_DAY,
  LEAVELATE_DAY,
  PERCEPTION_DAY,
  GRADE,
  SCORE,
  GET_GRADE,
  ALL,
} from '../../actions/Grade';
import { gradeServerType } from '@/lib/api/ApiType';

const PAGENAME = 'Grade';
const ACTIONNAME = 'GRADE';
const DELAY_TIME = 3000;

const getStateFunc = (state: RootState): RootState['GradeState'] =>
  state.GradeState;

const defaultSaveSaga = createSaveSaga(
  gradeStateToRequest,
  GRADE_URL,
  ACTIONNAME,
  PAGENAME,
  getStateFunc,
);

const gedSaveSaga = createSaveSaga(
  gradeStateToGedRequest,
  GRADE_URL,
  ACTIONNAME,
  PAGENAME,
  getStateFunc,
);

const getGradeSaga = createGetSaga<gradeServerType>(
  GRADE_URL,
  gradeResponseToState,
  ALL,
);

const proxySaga = createProxySaga(gedSaveSaga, defaultSaveSaga);

const actionArray = [
  SERVICE_TIME,
  ABSENT_DAY,
  CUTCLASS_DAY,
  LEAVELATE_DAY,
  PERCEPTION_DAY,
  GRADE,
  SCORE,
];

export default function* gradeSaga() {
  yield debounce(DELAY_TIME, actionArray, proxySaga);
  yield takeLatest(GET_GRADE,getGradeSaga)
}
