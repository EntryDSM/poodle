import { put, call } from 'redux-saga/effects';
import {
  LOGIN,
  RE_GENERATE_TOKEN,
  RE_GENERATE_TOKEN_SUCCESS,
  RE_GENERATE_TOKEN_FAILURE,
  reGenerateToken,
  GET_USER,
} from '../../actions/Header';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '@/lib/utils/saga/createRequestSaga';
import * as authCtrl from '@/lib/api/auth';

const loginSaga = createRequestSaga(LOGIN, authCtrl.login);
const reGenerateTokenSaga = function* ({
  payload,
}: ReturnType<typeof reGenerateToken>) {
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
};
const getUserSaga = createRequestSaga(GET_USER, authCtrl.getUser);

export default function* headerSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(RE_GENERATE_TOKEN, reGenerateTokenSaga);
  yield takeLatest(GET_USER, getUserSaga);
}
