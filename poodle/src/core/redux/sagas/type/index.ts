import { debounce, put, takeLatest } from "redux-saga/effects";
import {
  APPLYTYPE,
  DISTRICT,
  GRADUATION_STATUS,
  GRADUATION_YEAR,
  ADDITIONALTYPE,
} from "../../actions/ChoiceType";
import { QUALIFICATION, setQualification } from "../../actions/Qualification";
import { typeStateToRequest } from "@/lib/api/ApplicationApplyApi";
import { RootState } from "../../reducer";
import { State } from "../../reducer/ChoiceType";
import { USERTYPE_URL } from "@/lib/api/ServerUrl";
import { createSaveSaga } from "@/lib/utils/saga";

const actionArray = [
  APPLYTYPE,
  DISTRICT,
  GRADUATION_YEAR,
  GRADUATION_STATUS,
  ADDITIONALTYPE,
];
const PAGENAME = "ChoiceType";
const ACTIONNAME = "TYPE";
const DELAY_TIME = 3000;

const getStateFunc = (state: RootState): State => {
  return state.ChoiceTypeState;
};

const saveSaga = createSaveSaga(
  typeStateToRequest,
  USERTYPE_URL,
  ACTIONNAME,
  PAGENAME,
  getStateFunc
);

const isGED = (status: string) => {
  return status === "ged" ? true : false;
};

const booleanToStringBoolean = (flag: boolean) => {
  return flag ? "true" : "false";
};

function* statusChangeSaga(action: any) {
  const status = isGED(action.payload.status);
  window.localStorage.setItem(
    "isQualificationExam",
    booleanToStringBoolean(status)
  );
  yield put(
    setQualification({ isQualification: isGED(action.payload.status) })
  );
}

export default function* typeSaga() {
  yield debounce(DELAY_TIME, actionArray, saveSaga);
  yield takeLatest(GRADUATION_STATUS, statusChangeSaga);
}
