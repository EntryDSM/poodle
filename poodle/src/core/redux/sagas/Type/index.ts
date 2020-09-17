import { debounce, put, takeLatest } from 'redux-saga/effects';
import {
  typeStateToRequest,
  typeResponseToState,
} from '@/lib/api/ApplicationApplyApi';
import { USERTYPE_URL } from '@/lib/api/ServerUrl';
import {
  createGetSaga,
  createMovePageSaga,
  createSaveSaga,
} from '@/lib/utils/saga';
import {
  APPLYTYPE,
  DISTRICT,
  GRADUATION_STATUS,
  GRADUATION_YEAR,
  ADDITIONALTYPE,
  GET_TYPE_CALL,
  TYPE_CALL,
  GED_SUCCESS_MONTH,
  GED_SUCCESS_YEAR,
  setIsQualification,
  GRADUATION_MONTH,
} from '../../actions/ChoiceType';
import { RootState } from '../../reducer';
import { State } from '../../reducer/ChoiceType';

const actionArray = [
  APPLYTYPE,
  DISTRICT,
  GRADUATION_YEAR,
  GRADUATION_MONTH,
  GRADUATION_STATUS,
  ADDITIONALTYPE,
  GED_SUCCESS_MONTH,
  GED_SUCCESS_YEAR,
];
const PAGENAME = 'ChoiceType';
const ACTIONNAME = 'TYPE';
const DELAY_TIME = 3000;

const getStateFunc = (state: RootState): State => state.ChoiceTypeState;

const saveSaga = createSaveSaga(
  typeStateToRequest,
  USERTYPE_URL,
  `${PAGENAME}/${ACTIONNAME}`,
  getStateFunc,
);

const getDataSava = createGetSaga(
  USERTYPE_URL,
  `${PAGENAME}/GET_${ACTIONNAME}`,
  typeResponseToState,
);

const saveAndMovePageSaga = createMovePageSaga(
  typeStateToRequest,
  USERTYPE_URL,
  `${PAGENAME}/${ACTIONNAME}`,
  getStateFunc,
  'info',
);

const isGED = (status: string) => status === 'GED';

const booleanToStringBoolean = (flag: boolean) => (flag ? 'true' : 'false');

function* statusChangeSaga(action: any) {
  const status = isGED(action.payload.status);
  window.localStorage.setItem(
    'isQualificationExam',
    booleanToStringBoolean(status),
  );
  yield put(
    setIsQualification({ qualification: isGED(action.payload.status) }),
  );
}

export default function* typeSaga() {
  yield debounce(DELAY_TIME, actionArray, saveSaga);
  yield takeLatest(TYPE_CALL, saveAndMovePageSaga);
  yield takeLatest(GET_TYPE_CALL, getDataSava);
  yield takeLatest(GRADUATION_STATUS, statusChangeSaga);
}
