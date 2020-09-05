import { PROCESS, USER_STATUS } from '../../actions/Mypage';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '@/lib/utils/saga/createRequestSaga';
import { getProcess, getUserStatus } from '@/lib/api/mypage';

const getProcessSaga = createRequestSaga(PROCESS, getProcess);
const getUserStatusSaga = createRequestSaga(USER_STATUS, getUserStatus);

export default function* mypageSaga() {
  yield takeLatest(PROCESS, getProcessSaga);
  yield takeLatest(USER_STATUS, getUserStatusSaga);
}
