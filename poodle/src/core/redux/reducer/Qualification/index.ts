import { QUALIFICATION, QualificationType } from '../../actions/Qualification';

type State = {
  isQualification: boolean;
};

const stringBooleanToBoolean = (str: string | null) => {
  if (str === 'true') {
    return true;
  }
  return false;
};
const localStorageQualification = () => {
  console.log('it works');
  return stringBooleanToBoolean(localStorage.getItem('isQualificationExam'));
};

const initalState = {
  isQualification: localStorageQualification(),
};

const QualificationState = (
  state: State = initalState,
  action: QualificationType,
): State => {
  if (action.type === QUALIFICATION) {
    return {
      ...state,
      isQualification: action.payload.isQualification,
    };
  }
  return state;
};

export default QualificationState;
