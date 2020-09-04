import { select, call } from 'redux-saga/effects';
import createSaveSaga from './createSaveSaga';

type SaveSagaType = ReturnType<typeof createSaveSaga>;

const createProxySaga = (
  gedSaveSaga: SaveSagaType,
  defaultSaveSaga: SaveSagaType,
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
