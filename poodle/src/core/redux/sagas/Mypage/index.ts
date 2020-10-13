import {
  PROCESS,
  USER_STATUS,
  GET_PDF,
  GET_FIRST_PASS_STATUS,
  GET_FINAL_PASS_STATUS,
} from '../../actions/Mypage';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '@/lib/utils/saga/createRequestSaga';
import {
  getProcess,
  getUserStatus,
  getDocument,
  getFirstPassStatus,
  getFinalPassStatus,
} from '@/lib/api/mypage';

const getProcessSaga = createRequestSaga(PROCESS, getProcess);
const getUserStatusSaga = createRequestSaga(USER_STATUS, getUserStatus);
const getDocumentSaga = createRequestSaga(GET_PDF, getDocument);

const getFirstPassStatusSaga = createRequestSaga(
  GET_FIRST_PASS_STATUS,
  getFirstPassStatus,
);

const getFinalPassStatusSaga = createRequestSaga(
  GET_FINAL_PASS_STATUS,
  getFinalPassStatus,
);

export default function* mypageSaga() {
  yield takeLatest(PROCESS, getProcessSaga);
  yield takeLatest(USER_STATUS, getUserStatusSaga);
  yield takeLatest(GET_PDF, getDocumentSaga);
  yield takeLatest(GET_FIRST_PASS_STATUS, getFirstPassStatusSaga);
  yield takeLatest(GET_FINAL_PASS_STATUS, getFinalPassStatusSaga);
}
