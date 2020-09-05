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
import { finishLoading, startLoading } from '../../actions/Loading';
import ErrorType from '@/lib/utils/type';

let flag = false;

const loginSaga = function* (action: any) {
  const SUCCESS = `${LOGIN}_SUCCESS`;
  const FAILURE = `${LOGIN}_FAILURE`;
  yield put(startLoading(LOGIN));
  try {
    const response = yield call(authCtrl.login, action.payload);
    yield put({
      type: SUCCESS,
      payload: response.data,
    });
    window.location.href = '/';
  } catch (e) {
    if (e.response?.data) {
      yield put({
        type: FAILURE,
        payload: e.response.data as ErrorType,
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: `TypeError: Cannot read property 'data' of undefined`,
          status: 500,
        } as ErrorType,
      });
    }
  }
  yield put(finishLoading(LOGIN));
};
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
