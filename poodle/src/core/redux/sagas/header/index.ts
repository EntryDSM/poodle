import {
    LOGIN,

} from '../../actions/header';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../../../lib/utils/saga/createRequestSaga';

const loginSaga = createRequestSaga(LOGIN, () => ({ data: { userName: 'woochanleee' } }));

export default function* headerSaga() {
    yield takeLatest(LOGIN, loginSaga);
};