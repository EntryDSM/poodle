import { select , call } from 'redux-saga/effects';
import { RootState } from '@/core/redux/reducer';
import createSaveSaga from './createSaveSaga';

type SaveSagaType = ReturnType<typeof createSaveSaga>;

const getQualificationStateFunc = (state: RootState): RootState["QualificattionState"] => {
    return state.QualificattionState
}

const createProxySaga= (gedSaveSaga: SaveSagaType, defaultSaveSaga: SaveSagaType) => {
    return function* () {
        const isQualification: RootState["QualificattionState"] = yield select(getQualificationStateFunc);
        if(isQualification.isQualification){
          yield call(gedSaveSaga);
          return;
        }
        yield call(defaultSaveSaga);
    }
} 

export default createProxySaga;