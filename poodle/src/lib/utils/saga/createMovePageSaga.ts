import { put, call, select } from 'redux-saga/effects';
import { setDataToServer } from '@/lib/api/ApplicationApplyApi';
import { PAGE_MOVE, PageType } from '@/core/redux/actions/Page';
import ErrorType from '../type';

const createMovePageSaga = (
  stateToRequest: (state: any) => any,
  url: string,
  type: string,
  getStateFunc: (state: any) => any,
  nextPage: PageType,
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
        payload: response.data,
      });
      yield put({
        type: PAGE_MOVE,
        payload: { page: nextPage },
      });
    } catch (response) {
      const error: ErrorType = {
        message: '',
        response: {
          status: 500,
        },
      };
      yield put({
        type: FAILURE,
        payload: { error },
      });
    }
  };
};

export default createMovePageSaga;
