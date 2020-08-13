import { put, call } from 'redux-saga/effects';
import { getDataToServer } from '@/lib/api/ApplicationApplyApi';
import ErrorType from '../type';

const createGetSaga = (
  url: string,
  type: string,
  responseToState: (response: any) => any,
) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* saveSaga() {
    try {
      const response = yield call(getDataToServer, url);
      const state = responseToState(response);
      yield put({
        type: SUCCESS,
        payload: state,
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

export default createGetSaga;
