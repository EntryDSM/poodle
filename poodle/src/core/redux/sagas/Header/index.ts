import { LOGIN } from '../../actions/Header';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '@/lib/utils/saga/createRequestSaga';

import * as authCtrl from '@/lib/api/auth';
const loginSaga = createRequestSaga(LOGIN, authCtrl.login);

export default function* headerSaga() {
  yield takeLatest(LOGIN, loginSaga);
}
