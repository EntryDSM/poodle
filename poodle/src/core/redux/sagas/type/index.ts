import { debounce, put, takeLatest } from 'redux-saga/effects';
import {
  typeStateToRequest,
  typeResponseToState,
} from '@/lib/api/ApplicationApplyApi';
import { USERTYPE_URL } from '@/lib/api/ServerUrl';
import {
  createGetSaga,
  createMovePageSaga,
  createSaveSaga,
} from '@/lib/utils/saga';
import {
  APPLYTYPE,
  DISTRICT,
  GRADUATION_STATUS,
  GRADUATION_YEAR,
  ADDITIONALTYPE,
  GET_TYPE_CALL,
  TYPE_CALL,
} from '../../actions/ChoiceType';
import { setQualification } from '../../actions/Qualification';
import { RootState } from '../../reducer';
import { State } from '../../reducer/ChoiceType';

const actionArray = [
  APPLYTYPE,
  DISTRICT,
  GRADUATION_YEAR,
  GRADUATION_STATUS,
  ADDITIONALTYPE,
];
const PAGENAME = 'ChoiceType';
const ACTIONNAME = 'TYPE';
const DELAY_TIME = 3000;

const getStateFunc = (state: RootState): State => state.ChoiceTypeState;

const saveSaga = createSaveSaga(
  typeStateToRequest,
  USERTYPE_URL,
  `${PAGENAME}/${ACTIONNAME}`,
  getStateFunc,
);

const getDataSava = createGetSaga(
  USERTYPE_URL,
  `GET_${PAGENAME}/${ACTIONNAME}`,
  typeResponseToState,
);

const saveAndMovePageSaga = createMovePageSaga(
  typeStateToRequest,
  USERTYPE_URL,
  `${PAGENAME}/${ACTIONNAME}`,
  getStateFunc,
  'info',
);

const isGED = (status: string) => status === 'ged';

const booleanToStringBoolean = (flag: boolean) => (flag ? 'true' : 'false');

function* statusChangeSaga(action: any) {
  const status = isGED(action.payload.status);
  window.localStorage.setItem(
    'isQualificationExam',
    booleanToStringBoolean(status),
  );
  yield put(
    setQualification({ isQualification: isGED(action.payload.status) }),
  );
}

export default function* typeSaga() {
  yield debounce(DELAY_TIME, actionArray, saveSaga);
  yield takeLatest(TYPE_CALL, saveAndMovePageSaga);
  yield takeLatest(GET_TYPE_CALL, getDataSava);
  yield takeLatest(GRADUATION_STATUS, statusChangeSaga);
}
