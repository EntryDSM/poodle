import { debounce, select, call } from 'redux-saga/effects';
import {
  infoStateToRequest,
  infoStateToGedRequest,
} from '@/lib/api/ApplicationApplyApi';
import { USERINFO_URL } from '@/lib/api/ServerUrl';
import { createSaveSaga, createProxySaga } from '@/lib/utils/saga';
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
    isTextAble(state.number) &&
    isTextAble(state.gradeNumber) &&
    isTextAble(state.classNumber)
  ) {
    return true;
  }
  return false;
}

function isTextAble(text: string) {
  return text.length > 0;
}

export default function* typeSaga() {
  yield debounce(DELAY_TIME, actionArray, proxySaga);
  yield debounce(DELAY_TIME, numberActionArray, numberChangeSaga);
}
