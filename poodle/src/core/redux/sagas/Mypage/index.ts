import { PROCESS } from '../../actions/Mypage';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '@/lib/utils/saga/createRequestSaga';
import { getProcess } from '@/lib/api/mypage';

const getProcessSaga = createRequestSaga(PROCESS, getProcess);

export default function* mypageSaga() {
  yield takeLatest(PROCESS, getProcessSaga);
}
