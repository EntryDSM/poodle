import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '@/core/redux/actions/Loading';
import ErrorType from '../type';

export default function createRequestSaga(type: any, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* (action: any) {
    yield put(startLoading(type));
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e.response.data as ErrorType,
      });
    }
    yield put(finishLoading(type));
  };
}
