import { select, call } from 'redux-saga/effects';
import createSaveSaga from './createSaveSaga';

const createProxySaga = (
  gedSaveSaga: any,
  defaultSaveSaga: any,
  getStateFunc: (state: any, ...args: any[]) => void,
) => {
  return function* (action?: any) {
    const state = yield select(getStateFunc);
    if (state.gradeType === 'GED') {
      yield call(gedSaveSaga, action);
      return;
    }
    yield call(defaultSaveSaga, action);
  };
};

export default createProxySaga;
