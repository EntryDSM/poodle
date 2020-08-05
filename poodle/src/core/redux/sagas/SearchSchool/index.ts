import { put, select, takeLatest, call } from 'redux-saga/effects';
import {
  getDataToServer,
  getSearchSchoolUrl,
} from '@/lib/api/ApplicationApplyApi';
import {
  GetSchoolCall,
  GET_SCHOOL_CALL,
  GET_SCHOOL_FAILURE,
  GET_SCHOOL_SUCCESS,
  Page,
  PAGE,
} from '../../actions/SearchSchool';
import { RootState } from '../../reducer';
import { startLoading, finishLoading } from '@/core/redux/actions/Loading';
import ErrorType from '@/lib/utils/type/ErrorType';
import { searchSchoolResponseType } from '@/lib/api/ApiType';

const getStateFunc = (state: RootState): RootState['SearchSchool'] =>
  state.SearchSchool;

function* searchSchool(action: GetSchoolCall) {
  yield put(startLoading(action.type));
  const { SchoolInfo } = yield select(getStateFunc);
  const getSchoolToServer = async (url: string) => {
    const response = await getDataToServer<searchSchoolResponseType>(url);
    return response;
  };
  try {
    const response: searchSchoolResponseType = yield call(
      getSchoolToServer,
      action.payload.url,
    );
    const newSchoolInfo = [...SchoolInfo, ...response.content];
    yield put({
      type: GET_SCHOOL_SUCCESS,
      payload: newSchoolInfo,
    });
  } catch (response) {
    const error: ErrorType = {
      message: '',
      response: {
        status: 500,
      },
    };
    yield put({
      type: GET_SCHOOL_FAILURE,
      payload: { error },
    });
  }
  yield put(finishLoading(action.type));
}

function* pageChangeSaga(action: Page) {
  const { eduOffice, schoolSearchInput } = yield select(getStateFunc);
  const url = getSearchSchoolUrl(
    eduOffice,
    schoolSearchInput,
    action.payload.page,
    10,
  );
  yield put({ type: GET_SCHOOL_CALL, payload: { url } });
}

export default function* searchSchoolSaga() {
  yield takeLatest(GET_SCHOOL_CALL, searchSchool);
  yield takeLatest(PAGE, pageChangeSaga);
}
