import { put, call } from 'redux-saga/effects';
import { getDataToServer } from '@/lib/api/ApplicationApplyApi';
import ErrorType from '../type';
import { isAbleAccessToken } from '../function';
import { LOGOUT } from '@/core/redux/actions/Header';

const createGetSaga = (
  url: string,
  type: string,
  responseToState: (response: any) => any,
) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* saveSaga() {
    const isAbleToken = isAbleAccessToken();
    if (!isAbleToken) {
      yield put({
        type: LOGOUT,
      });
      return;
    }
    try {
      const response = yield call(getDataToServer, url);
      const state = responseToState(response);
      yield put({
        type: SUCCESS,
        payload: state,
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: { error: error.response.data as ErrorType },
      });
    }
  };
};

export default createGetSaga;
