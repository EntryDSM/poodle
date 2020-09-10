import { all } from 'redux-saga/effects';
import HeaderSaga from './Header';
import TypeSaga from './Type';
import InfoSaga from './Info';
import IntroductionSaga from './Introduction';
import GradeSaga from './Grade';
import JoinSaga from './Join';
import SearchShcool from './SearchSchool';
import previewSaga from './Preview';
import ResetPasswordSaga from './ResetPassword';
import MypageSaga from './Mypage';
import MainSaga from './Main';

export default function* rootSaga() {
  yield all([
    InfoSaga(),
    TypeSaga(),
    HeaderSaga(),
    IntroductionSaga(),
    GradeSaga(),
    JoinSaga(),
    SearchShcool(),
    previewSaga(),
    ResetPasswordSaga(),
    MypageSaga(),
    MainSaga(),
  ]);
}
