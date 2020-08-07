import { debounce, select, call, takeLatest } from 'redux-saga/effects';
import {
  infoStateToRequest,
  infoStateToGedRequest,
  infoResponseToState,
} from '@/lib/api/ApplicationApplyApi';
import { USERINFO_URL } from '@/lib/api/ServerUrl';
import {
  createSaveSaga,
  createProxySaga,
  createGetSaga,
  createMovePageSaga,
} from '@/lib/utils/saga';
import { RootState } from '../../reducer';
import {
  NAME,
  GENDER,
  NUMBER,
  PHONE_NUM,
  PICTURE,
  POST_NUM,
  ADDRESS,
  ADDRESS_DETAIL,
  PROTECTOR_NAME,
  PROTECTOR_PHONE_NUM,
  SCHOOL_PHONE_NUM,
  MIDDLESCHOOL,
  BIRTHDAY,
  GRADE_NUMBER,
  CLASS_NUMBER,
  INFO_CALL,
  GET_INFO_CALL,
} from '../../actions/Info';

const actionArray = [
  NAME,
  GENDER,
  PHONE_NUM,
  PICTURE,
  POST_NUM,
  ADDRESS_DETAIL,
  ADDRESS,
  PROTECTOR_PHONE_NUM,
  PROTECTOR_NAME,
  SCHOOL_PHONE_NUM,
  MIDDLESCHOOL,
  BIRTHDAY,
];
const numberActionArray = [CLASS_NUMBER, GRADE_NUMBER, NUMBER];
const PAGENAME = 'Info';
const ACTIONNAME = 'INFO';
const DELAY_TIME = 3000;

const getStateFunc = (state: RootState): RootState['InfoState'] =>
  state.InfoState;

const defaultSaveSaga = createSaveSaga(
  infoStateToRequest,
  USERINFO_URL,
  `${PAGENAME}/${ACTIONNAME}`,
  getStateFunc,
);

const gedSaveSaga = createSaveSaga(
  infoStateToGedRequest,
  USERINFO_URL,
  `${PAGENAME}/${ACTIONNAME}`,
  getStateFunc,
);

const defaultSaveAndMovePageSaga = createMovePageSaga(
  infoStateToRequest,
  USERINFO_URL,
  `${PAGENAME}/${ACTIONNAME}`,
  getStateFunc,
  'grade',
);

const gedSaveAndMovePageSaga = createMovePageSaga(
  infoStateToGedRequest,
  USERINFO_URL,
  `${PAGENAME}/${ACTIONNAME}`,
  getStateFunc,
  'grade',
);

const proxySaga = createProxySaga(gedSaveSaga, defaultSaveSaga);
const movePageProxySaga = createProxySaga(
  gedSaveAndMovePageSaga,
  defaultSaveAndMovePageSaga,
);

const getInfoSaga = createGetSaga(
  USERINFO_URL,
  `${PAGENAME}/GET_${ACTIONNAME}`,
  infoResponseToState,
);

function* numberChangeSaga() {
  const state = yield select(getStateFunc);
  if (!isNumberStateAble(state)) {
    return;
  }
  yield call(proxySaga);
}

function isNumberStateAble(state: RootState['InfoState']) {
  if (
    isEmptyCheck(state.number) &&
    isEmptyCheck(state.gradeNumber) &&
    isEmptyCheck(state.classNumber)
  ) {
    return true;
  }
  return false;
}

function isEmptyCheck(text: string) {
  return text.length > 0;
}

export default function* typeSaga() {
  yield debounce(DELAY_TIME, actionArray, proxySaga);
  yield debounce(DELAY_TIME, numberActionArray, numberChangeSaga);
  yield takeLatest(GET_INFO_CALL, getInfoSaga);
  yield takeLatest(INFO_CALL, movePageProxySaga);
}
