import { put, call, select } from 'redux-saga/effects';
import { setDataToServer } from '@/lib/api/ApplicationApplyApi';
import ErrorType from '../type';

const createMovePageSaga = (
  stateToRequest: (state: any) => any,
  url: string,
  type: string,
  getStateFunc: (state: any) => any,
  nextPage: string,
) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* movePageSaga(action?: any) {
    const state = yield select(getStateFunc);
    const request = stateToRequest(state);
    try {
      const response = yield call(setDataToServer, url, request);
      yield put({
        type: SUCCESS,
        payload: {
          pageMove: action.payload.pageMove,
          date: new Date(),
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

export default createMovePageSaga;
