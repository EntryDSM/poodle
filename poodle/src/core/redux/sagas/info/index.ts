import { debounce, select, call, takeLatest } from 'redux-saga/effects';
import {
  infoStateToRequest,
  infoStateToGedRequest,, infoResponseToState
} from '@/lib/api/ApplicationApplyApi';
import {
  userInfoServerType,
} from '@/lib/api/ApiType';
import { USERINFO_URL } from '@/lib/api/ServerUrl';
import { createSaveSaga, createProxySaga, createGetSaga } from '@/lib/utils/saga';
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
  ALL,
  GET_INFO,
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
  ACTIONNAME,
  PAGENAME,
  getStateFunc,
);

const gedSaveSaga = createSaveSaga(
  infoStateToGedRequest,
  USERINFO_URL,
  ACTIONNAME,
  PAGENAME,
  getStateFunc,
);

const getInfoSaga = createGetSaga<userInfoServerType>(
  USERINFO_URL,
  infoResponseToState,
  ALL,
)

const proxySaga = createProxySaga(gedSaveSaga, defaultSaveSaga);

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
  yield takeLatest(GET_INFO,getInfoSaga)
}
