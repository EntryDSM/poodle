import { SCHEDULES } from '../../actions/Main';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '@/lib/utils/saga/createRequestSaga';
import { getSchedules } from '@/lib/api/main';

const getSchedulesSaga = createRequestSaga(SCHEDULES, getSchedules);

export default function* mainSaga() {
  yield takeLatest(SCHEDULES, getSchedulesSaga);
}
