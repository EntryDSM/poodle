import { all } from 'redux-saga/effects';
import headerSaga from './header';
import joinSaga from './join'

export default function* rootSaga() {
    yield all([headerSaga(), joinSaga()]);
}