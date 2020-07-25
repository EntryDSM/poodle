import { put, call, select } from 'redux-saga/effects';
import { setDataToServer } from '@/lib/api/ApplicationApplyApi';

const createSaveSaga = (
  stateToRequest: (state: any) => any,
  url: string,
  type: string,
  getStateFunc: (state: any) => any,
) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* saveSaga() {
    const state = yield select(getStateFunc);
    const request = stateToRequest(state);
    try {
      const response = yield call(setDataToServer, url, request);
      yield put({
        type: SUCCESS,
        payload: response,
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true,
      });
    }
  };
};

export default createSaveSaga;
