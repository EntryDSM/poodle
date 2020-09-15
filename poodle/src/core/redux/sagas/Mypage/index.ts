import { PROCESS, USER_STATUS, GET_PDF } from '../../actions/Mypage';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '@/lib/utils/saga/createRequestSaga';
import { getProcess, getUserStatus, getDocument } from '@/lib/api/mypage';

const getProcessSaga = createRequestSaga(PROCESS, getProcess);
const getUserStatusSaga = createRequestSaga(USER_STATUS, getUserStatus);
const getDocumentSaga = createRequestSaga(GET_PDF, getDocument);

export default function* mypageSaga() {
  yield takeLatest(PROCESS, getProcessSaga);
  yield takeLatest(USER_STATUS, getUserStatusSaga);
  yield takeLatest(GET_PDF, getDocumentSaga);
}
