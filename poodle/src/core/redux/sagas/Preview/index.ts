import { call, put, takeLatest } from 'redux-saga/effects';
import { SET_STATUS_URL, GET_PDF_URL } from '@/lib/api/ServerUrl';
import {
  getDataToServer,
  previewStateToRequest,
  setDataToServer,
} from '@/lib/api/ApplicationApplyApi';
import { createGetSaga } from '@/lib/utils/saga';
import { PREVIEW_CALL, SUBMIT_CALL } from '../../actions/Preview';
import { modalOff, BLUECHECKMODAL } from '../../actions/Modal';
import ErrorType from '@/lib/utils/type';
import { PAGE } from '../../actions/SearchSchool';

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

const getPdfSaga = createGetSaga(GET_PDF_URL, PREVIEW_CALL, () => {});

export default function* previewSaga() {
  yield takeLatest(SUBMIT_CALL, submitSavaSaga);
  yield takeLatest(PREVIEW_CALL, getPdfSaga);
}
