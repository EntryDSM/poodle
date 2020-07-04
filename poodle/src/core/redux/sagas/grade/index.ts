import {
  debounce, select, call,
} from 'redux-saga/effects';
import {
  SERVICE_TIME,
  ABSENT_DAY,
  CUTCLASS_DAY,
  LEAVELATE_DAY,
  PERCEPTION_DAY,
  GRADE,
  SCORE,
} from '../../actions/Grade';
import { GRADE_URL } from '@/lib/api/ServerUrl';
import {
  createSaveSaga,
  createProxySaga,
} from '@/lib/utils/saga';
import { RootState } from '../../reducer';
import { gradeStateToRequest, gradeStateToGedRequest } from '@/lib/api/ApplicationApplyApi';

const PAGENAME = "Grade";
const ACTIONNAME = "GRADE";
const DELAY_TIME = 3000;

const getStateFunc = (state: RootState): RootState["GradeState"] => {
  return state.GradeState;
}

const defaultSaveSaga = createSaveSaga(
  gradeStateToRequest,
  GRADE_URL,
  ACTIONNAME,
  PAGENAME,
  getStateFunc,
);

const gedSaveSaga = createSaveSaga(
  gradeStateToGedRequest,
  GRADE_URL,
  ACTIONNAME,
  PAGENAME,
  getStateFunc,
)

const proxySaga = createProxySaga(gedSaveSaga, defaultSaveSaga);

const actionArray = [SERVICE_TIME, ABSENT_DAY, CUTCLASS_DAY, LEAVELATE_DAY, PERCEPTION_DAY, GRADE, SCORE];


export default function* gradeSaga() {
  yield debounce(DELAY_TIME, actionArray, proxySaga);
}

