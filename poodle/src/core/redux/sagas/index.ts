import { all } from 'redux-saga/effects';
import HeaderSaga from './Header';
import TypeSaga from './Type';
import InfoSaga from './Info';
import IntroductionSaga from './Introduction';
import GradeSaga from './Grade';
import JoinSaga from './Join';
import SearchShcool from './SearchSchool';
import ResetPasswordSaga from './ResetPassword';

export default function* rootSaga() {
  yield all([
    InfoSaga(),
    TypeSaga(),
    HeaderSaga(),
    IntroductionSaga(),
    GradeSaga(),
    JoinSaga(),
    SearchShcool(),
    ResetPasswordSaga(),
  ]);
}
