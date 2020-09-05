import { call, put, takeLatest } from 'redux-saga/effects';
import { SET_STATUS_URL, GET_PDF_URL } from '@/lib/api/ServerUrl';
import {
  getPdfToServer,
  getDataToServer,
  previewStateToRequest,
  setDataToServer,
  pdfResponseToState,
} from '@/lib/api/ApplicationApplyApi';
import { PREVIEW_CALL, SUBMIT_CALL } from '../../actions/Preview';
import { modalOff, BLUECHECKMODAL } from '../../actions/Modal';
import { PAGE } from '../../actions/SearchSchool';
import ErrorType from '@/lib/utils/type';

const submitRequest = () =>
  setDataToServer(SET_STATUS_URL, previewStateToRequest(true));

function* submitSavaSaga() {
  const SUCCESS = `${SUBMIT_CALL}_SUCCESS`;
  const FAILURE = `${SUBMIT_CALL}_FAILURE`;
  try {
    yield call(submitRequest);
    yield put({
      type: SUCCESS,
    });
    yield put({
      type: PAGE,
      payload: { page: '' },
    });
  } catch (error) {
    yield put({
      type: FAILURE,
      payload: error.response.data,
    });
  }
  yield put(modalOff(BLUECHECKMODAL));
}

const getPdfSaga = function* () {
  const SUCCESS = `${PREVIEW_CALL}_SUCCESS`;
  const FAILURE = `${PREVIEW_CALL}_FAILURE`;
  try {
    const response = yield call(getPdfToServer, GET_PDF_URL);
    const state = pdfResponseToState(response);
    yield put({
      type: SUCCESS,
      payload: state,
    });
  } catch (error) {
    yield put({
      type: FAILURE,
      payload: { error: error.response.data as ErrorType },
    });
  }
};

export default function* previewSaga() {
  yield takeLatest(SUBMIT_CALL, submitSavaSaga);
  yield takeLatest(PREVIEW_CALL, getPdfSaga);
}
