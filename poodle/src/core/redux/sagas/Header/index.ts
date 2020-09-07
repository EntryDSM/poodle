import { put, call, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import {
  LOGIN,
  RE_GENERATE_TOKEN,
  RE_GENERATE_TOKEN_SUCCESS,
  RE_GENERATE_TOKEN_FAILURE,
  reGenerateToken,
  GET_USER,
} from '../../actions/Header';
import createRequestSaga from '@/lib/utils/saga/createRequestSaga';
import * as authCtrl from '@/lib/api/auth';

let flag = false;

const loginSaga = createRequestSaga(LOGIN, authCtrl.login);
const reGenerateTokenSaga = function* ({
  payload,
}: ReturnType<typeof reGenerateToken>) {
  if (flag) {
    yield delay(1000);
    yield call(payload.callback, payload.callbackParams);
    return;
  }
  flag = true;
  try {
    const response = yield call(authCtrl.reGenerateToken);
    yield put({
      type: RE_GENERATE_TOKEN_SUCCESS,
      payload: response.data,
    });
    yield call(payload.callback, payload.callbackParams);
  } catch (e) {
    yield put({
      type: RE_GENERATE_TOKEN_FAILURE,
    });
  }
  flag = false;
};
const getUserSaga = createRequestSaga(GET_USER, authCtrl.getUser);

export default function* headerSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeEvery(RE_GENERATE_TOKEN, reGenerateTokenSaga);
  yield takeLatest(GET_USER, getUserSaga);
}
