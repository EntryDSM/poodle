import { getDataToServer } from '@/lib/api/ApplicationApplyApi';
import { put } from 'redux-saga/effects';

const createGetSaga = <ResponseType>(
  url: string,
  responseToStateFunc: (response: ResponseType) => any,
  action: string,
) => {
  return async function* getSelfIntroduction() {
    const response = await getDataToServer<ResponseType>(url);
    const state = responseToStateFunc(response);
    yield put({
      type: action,
      payload: state,
    });
  };
};

export default createGetSaga;
