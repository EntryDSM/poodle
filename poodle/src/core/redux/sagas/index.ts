import { all } from 'redux-saga/effects';
import headerSaga from './header';
import typeSaga from './type';
import infoSaga from './info';
import introductionSaga from './introduction';
import GradeSaga from './grade';
import joinSaga from './join';

export default function* rootSaga() {
  yield all([
    infoSaga(),
    typeSaga(),
    headerSaga(),
    introductionSaga(),
    GradeSaga(),
    joinSaga(),
  ]);
}
