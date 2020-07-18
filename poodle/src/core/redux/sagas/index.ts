import { all } from 'redux-saga/effects';
import HeaderSaga from './Header';
import typeSaga from './type';
import infoSaga from './info';
import introductionSaga from './introduction';
import GradeSaga from './grade';
import JoinSaga from './Join';

export default function* rootSaga() {
  yield all([
    infoSaga(),
    typeSaga(),
    HeaderSaga(),
    introductionSaga(),
    GradeSaga(),
    JoinSaga(),
  ]);
}
