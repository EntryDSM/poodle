import { all } from 'redux-saga/effects';
import headerSaga from './header';

export default function* rootSaga() {
    yield all([headerSaga()]);
}