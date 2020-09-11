import { call, debounce, takeLatest } from 'redux-saga/effects';
import { GRADE_URL } from '@/lib/api/ServerUrl';
import {
  createSaveSaga,
  createProxySaga,
  createGetSaga,
  createMovePageSaga,
} from '@/lib/utils/saga';
import {
  gradeStateToRequest,
  gradeStateToGedRequest,
  gradeResponseToState,
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
  GRADE_CALL,
  GET_GRADE_CALL,
  SetScore,
} from '../../actions/Grade';
import { isScoreRangeAble } from '@/lib/utils/function';

const PAGENAME = 'Grade';
const ACTIONNAME = 'GRADE';
const DELAY_TIME = 3000;

const getStateFunc = (state: RootState): RootState['GradeState'] =>
  state.GradeState;

const defaultSaveSaga = createSaveSaga(
  gradeStateToRequest,
  GRADE_URL,
  `${PAGENAME}/${ACTIONNAME}`,
  getStateFunc,
);

const gedSaveSaga = function* (action: SetScore) {
  const saveSaga = createSaveSaga(
    gradeStateToGedRequest,
    `${GRADE_URL}/ged`,
    `${PAGENAME}/${ACTIONNAME}`,
    getStateFunc,
  );
  if (isScoreRangeAble(parseInt(action.payload.score))) {
    yield call(saveSaga, action);
  }
};

const getDataSaga = createGetSaga(
  GRADE_URL,
  `${PAGENAME}/GET_${ACTIONNAME}`,
  gradeResponseToState,
);

const defaultSaveAndMovePage = createMovePageSaga(
  gradeStateToRequest,
  GRADE_URL,
  `${PAGENAME}/${ACTIONNAME}`,
  getStateFunc,
  'introduction',
);

const gedSaveSagaAndMovePage = createMovePageSaga(
  gradeStateToGedRequest,
  `${GRADE_URL}/ged`,
  `${PAGENAME}/${ACTIONNAME}`,
  getStateFunc,
  'introduction',
);

const proxySaga = createProxySaga(
  gedSaveSaga,
  defaultSaveSaga,
  (state: RootState) => state.GradeState,
);
const movePageProxySaga = createProxySaga(
  gedSaveSagaAndMovePage,
  defaultSaveAndMovePage,
  (state: RootState) => state.GradeState,
);

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
  yield takeLatest(GRADE_CALL, movePageProxySaga);
  yield takeLatest(GET_GRADE_CALL, getDataSaga);
}
