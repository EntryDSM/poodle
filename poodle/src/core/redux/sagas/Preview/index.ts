import { takeLatest } from 'redux-saga/effects';
import { SET_STATUS_URL, GET_PDF_URL } from '@/lib/api/ServerUrl';
import {
  getDataToServer,
  previewStateToRequest,
  setDataToServer,
} from '@/lib/api/ApplicationApplyApi';
import {} from '@/lib/utils/saga';
import { RootState } from '../../reducer';
import { PREVIEW, PREVIEW_CALL, SUBMIT_CALL } from '../../actions/Preview';
import createRequestSaga from '@/lib/utils/saga/createRequestSaga';

const DELAY_TIME = 3000;

const submitRequest = () =>
  setDataToServer(SET_STATUS_URL, previewStateToRequest(true));

const submitSavaSaga = createRequestSaga(SUBMIT_CALL, submitRequest);

export default function* previewSaga() {
  yield takeLatest(SUBMIT_CALL, submitSavaSaga);
}
