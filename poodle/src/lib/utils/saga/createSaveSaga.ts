import { put, call, select } from 'redux-saga/effects';
import { setDataToServer } from '@/lib/api/ApplicationApplyApi';
import ErrorType from '../type';
import { LOGOUT } from '@/core/redux/actions/Header';
import { isAbleAccessToken } from '../function';

const createSaveSaga = (
  stateToRequest: (state: any) => any,
  url: string,
  type: string,
  getStateFunc: (state: any) => any,
) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* saveSaga(action?: any) {
    const state = yield select(getStateFunc);
    const request = stateToRequest(state);
    const isAbleToken = isAbleAccessToken();
    if (!isAbleToken) {
      yield put({
        type: LOGOUT,
      });
      return;
    }
    try {
      yield call(setDataToServer, url, request);
      yield put({
        type: SUCCESS,
        payload: {
          date: new Date(),
          pageMove: false,
        },
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: { error: error.response.data as ErrorType },
      });
    }
  };
};

export default createSaveSaga;
