import {
  put,
  call,
  select,
} from 'redux-saga/effects';
import { setFunc } from '@/lib/api/ApplicationApplyApi';

const createSaveSaga = (
    stateToRequest: (state: any) => any,
    url: string,
    pageName: string,
    actionName: string,
    getStateFunc: (state: any) => any,
) => {
    const SUCCESS = `${pageName}/${actionName}_SUCCESS`;
    const FAILURE = `${pageName}/${actionName}_FAILURE`;
    return function * saveSaga() {
      const state = yield select(getStateFunc);
      const request = stateToRequest(state);
      try {
        console.log(request)
        const response = yield call(setFunc, url, request);
        yield put({
          type: SUCCESS,
          payload: response,
        })
      } catch(error){
        yield put({
          type: FAILURE,
          payload: error,
          error: true,
        })
      }
    }
}

export default createSaveSaga;
