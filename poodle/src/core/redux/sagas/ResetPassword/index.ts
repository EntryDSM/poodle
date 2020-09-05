import {
  SEND_EMAIL,
  VERIFY_CODE,
  RESET_PASSWORD,
} from '../../actions/ResetPassword';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '@/lib/utils/saga/createRequestSaga';
import * as resetPasswordCtrl from '@/lib/api/resetPassword';

const sendEmailSaga = createRequestSaga(
  SEND_EMAIL,
  resetPasswordCtrl.sendEmail,
);

const verifyCodeSaga = createRequestSaga(
  VERIFY_CODE,
  resetPasswordCtrl.verifyCode,
);

const resetSaga = createRequestSaga(
  RESET_PASSWORD,
  resetPasswordCtrl.resetPassword,
);

export default function* resetPasswordSaga() {
  yield takeLatest(SEND_EMAIL, sendEmailSaga);
  yield takeLatest(VERIFY_CODE, verifyCodeSaga);
  yield takeLatest(RESET_PASSWORD, resetSaga);
}
