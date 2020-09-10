import { SEND_EMAIL, VERIFY_CODE, JOIN } from '../../actions/Join';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '@/lib/utils/saga/createRequestSaga';
import * as joinCtrl from '@/lib/api/join';

const emailSendSaga = createRequestSaga(SEND_EMAIL, joinCtrl.emailSend);
const verifyCodeSaga = createRequestSaga(VERIFY_CODE, joinCtrl.verifyCode);
const joinSaga = createRequestSaga(JOIN, joinCtrl.join);

export default function* headerSaga() {
  yield takeLatest(SEND_EMAIL, emailSendSaga);
  yield takeLatest(VERIFY_CODE, verifyCodeSaga);
  yield takeLatest(JOIN, joinSaga);
}
