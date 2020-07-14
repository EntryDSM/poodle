import { RootState } from '@/core/redux/reducer';
import { GradeType, SubjectType, ScoreType } from '@/core/redux/actions/Grade';
import client from './client';
import {
  userTypeServerType,
  gradeServerType,
  userInfoServerType,
  selfIntroductionServerType,
  studyPlanServerType,
  SubjectsType,
  gedInfoServerType,
  gedGradeServerType,
} from './ApiType';
import { GRADESEMESTERLIST } from '../../components/Grade/constance';

type ErrorType = { response: { status: number } };

export const errorTypeCheck = (error: ErrorType): void => {
  if (error.response?.status === 401 || error.response?.status === 403) {
    console.log('token expired');
  } else {
    console.log('unknown error');
  }
};

export const getDataToServer = async <ResponseType>(
  url: string,
): Promise<ResponseType> => {
  const response: ResponseType = await client.get(url);
  return response;
};

export const setDataToServer = async <RequestType>(
  url: string,
  payload: RequestType,
) => {
  const response = await client.patch(url, payload);
  return response;
};

export const typeStateToRequest = (
  state: RootState['ChoiceTypeState'],
): userTypeServerType => {
  const {
    qualificationExam,
    graduationStatus,
    graduationYear,
    district,
    applyType,
    additionalType,
  } = state;
  return {
    grade_type: getGradeType(qualificationExam, graduationStatus),
    apply_type: applyType,
    is_daejeon: isDaejeon(district),
    additional_type: additionalType,
    graduate_year: graduationYear,
  };
};

export const typeResponseToState = ({
  is_daejeon,
  grade_type,
  additional_type,
  apply_type,
  graduate_year,
}: userTypeServerType): RootState['ChoiceTypeState'] => ({
  qualificationExam: isGED(grade_type),
  applyType: apply_type,
  district: getDistrictStringToisDaejeon(is_daejeon),
  graduationStatus: grade_type,
  graduationYear: graduate_year,
  additionalType: additional_type,
});

const isGED = (grade_type: string) => {
  if (grade_type === 'ged') {
    return true;
  }
  return false;
};

const isDaejeon = (district: string) => {
  if (district === '대전') {
    return true;
  }
  return false;
};

const getGradeType = (qualifacationExam: boolean, graduationStatus: string) => {
  if (qualifacationExam) return 'ged';
  return graduationStatus;
};

const getDistrictStringToisDaejeon = (is_daejeon: boolean) => {
  if (is_daejeon) {
    return '대전';
  }
  return '전국';
};

export const infoStateToRequest = (
  state: RootState['InfoState'],
): userInfoServerType => ({
  name: state.name,
  sex: state.gender,
  student_number: infoStateToRequestStudentNumber(state),
  parent_name: state.protectorName,
  parent_tel: state.protectorPhoneNum,
  school_name: state.schoolPhoneNum,
  applicant_tel: state.phoneNum,
  school_tel: state.schoolPhoneNum,
  photo: state.picture,
  birth_date: infoDateStringToStateDateString(state.birthday),
  address: state.address,
  detail_address: state.detailAddress,
  post_code: state.postNum,
});

export const infoStateToGedRequest = (
  state: RootState['InfoState'],
): gedInfoServerType => ({
  applicant_tel: state.name,
  parent_tel: state.protectorPhoneNum,
  address: state.address,
  photo: state.picture,
  post_code: state.postNum,
  parent_name: state.protectorName,
  name: state.name,
  sex: state.gender,
  birth_date: state.birthday,
});

const infoDateStringToStateDateString = (str: string) => {
  const splitedString = str.split('-');
  const changedMonth = checkSingleTextAddZero(splitedString[1]);
  const changedDay = checkSingleTextAddZero(splitedString[2]);
  return `${splitedString[0]}-${changedMonth}-${changedDay}`;
};

const infoStateToRequestStudentNumber = (state: RootState['InfoState']) => {
  const changedClassNum = checkSingleTextAddZero(state.classNumber);
  const changedNumber = checkSingleTextAddZero(state.number);
  const grade = state.gradeNumber;
  return `${grade}${changedClassNum}${changedNumber}`;
};

const isSingleText = (text: string) => {
  if (text.length > 1) {
    return false;
  }
  return true;
};

const checkSingleTextAddZero = (text: string) => {
  if (isSingleText(text)) {
    return `0${text}`;
  }
  return text;
};

export const infoResponseToState = (
  response: userInfoServerType,
): RootState['InfoState'] => ({
  name: response.name,
  gender: response.sex,
  number: infoStringToNumber(response.student_number),
  protectorName: response.parent_name,
  protectorPhoneNum: response.parent_tel,
  schoolPhoneNum: response.school_tel,
  phoneNum: response.applicant_tel,
  middleSchool: response.school_name,
  birthday: infoRequestDateStringToStateDateString(response.birth_date),
  postNum: response.post_code,
  address: response.address,
  detailAddress: response.detail_address,
  picture: response.photo,
  gradeNumber: infoStringToGradeNumber(response.student_number),
  classNumber: infoStringToClassNumber(response.student_number),
});

const infoRequestDateStringToStateDateString = (requestDateString: string) => {
  const splitedStringArray = requestDateString.split('-');
  const year = splitedStringArray[0];
  const month = cutZeroToString(splitedStringArray[1]);
  const day = cutZeroToString(splitedStringArray[2]);
  return `${year}-${month}-${day}`;
};

const cutZeroToString = (str: string) => {
  const splitedString = str.split('');
  if (splitedString[0] === '0') {
    return splitedString[1];
  }
  return str;
};

const infoStringToGradeNumber = (str: string) => str.split('')[0];

const infoStringToClassNumber = (str: string) => {
  const splitString = str.split('');
  if (splitString[1] === '0') {
    return splitString[2];
  }
  return `${splitString[1]}${splitString[2]}`;
};

const infoStringToNumber = (str: string) => {
  const splitString = str.split('');
  if (splitString[3] === '0') {
    return splitString[4];
  }
  return `${splitString[3]}${splitString[4]}`;
};

const gradeArrayToString = (
  gradeList: GradeType[],
  subject: SubjectType,
): string => {
  const filteredGradeList = gradeList.filter(
    grade => grade.subject === subject,
  );
  const sortedGradeList = gradeSort(filteredGradeList);
  const stringedGradeList = sortedGradeList.reduce(
    (str: string, grade: GradeType) => str + grade.score,
    '',
  );
  return stringedGradeList;
};

const gradeSort = (gradeList: GradeType[]) => {
  const buf = gradeList.sort(gradeSortCompareFunc);
  return buf;
};

const responseToSubjects = (response: gradeServerType) => {
  const subjects: SubjectsType = {
    korean: response.korean,
    math: response.math,
    science: response.science,
    society: response.social,
    history: response.history,
    tech: response.tech_and_home,
    english: response.english,
  };
  return subjects;
};

export const gradeResponseToState = (
  response: gradeServerType,
): RootState['GradeState'] => {
  const subjects = responseToSubjects(response);
  return {
    serviceTime: response.volanteer_time.toString(),
    absentDay: response.full_cut_count.toString(),
    perceptionDay: response.late_count.toString(),
    cutClassDay: response.period_cut_count.toString(),
    leaveLateDay: response.early_leave_count.toString(),
    grade: responseGradeToStateGrade(subjects),
    score: response.ged_average_score.toString(),
  };
};

const responseGradeToStateGrade = (response: SubjectsType): GradeType[] => {
  const entriedObj = objectToString(response);
  let grade: GradeType[] = [];
  entriedObj.map(([key, value]) => {
    const typeChangeKey = key as SubjectType;
    const stringToArray = convertStringToArray(value);
    const newGrade = stringArrayToGradeArray(stringToArray, typeChangeKey);
    grade = [...grade, ...newGrade];
  });
  return grade;
};

const convertStringToArray = (gradeString: string) => {
  const splitedStringArray: ScoreType[] = gradeString.split('') as ScoreType[];
  return splitedStringArray;
};
const stringArrayToGradeArray = (
  splitedStringArray: string[],
  subject: SubjectType,
) => {
  const buf = [];
  for (let i = 0; i < splitedStringArray.length; i++) {
    const { grade, semester } = GRADESEMESTERLIST[i];
    const typeChangeScore = splitedStringArray[i] as ScoreType;
    const newGrade = {
      grade,
      semester,
      score: typeChangeScore,
      subject,
    };
    buf.push(newGrade);
  }
  return buf;
};
const objectToString = (obj: Object) => {
  const entriedObj = Object.entries(obj);
  return entriedObj;
};

const gradeSortCompareFunc = (current: GradeType, next: GradeType) => {
  if (current.grade < next.grade) {
    return -1;
  }
  if (current.grade > next.grade) {
    return 1;
  }
  if (current.semester < next.semester) {
    return -1;
  }
  return 1;
};

export const gradeStateToRequest = (
  state: RootState['GradeState'],
): gradeServerType => ({
  volanteer_time: Number(state.serviceTime),
  full_cut_count: Number(state.absentDay),
  period_cut_count: Number(state.cutClassDay),
  early_leave_count: Number(state.leaveLateDay),
  late_count: Number(state.perceptionDay),
  korean: gradeArrayToString(state.grade, 'korean'),
  social: gradeArrayToString(state.grade, 'society'),
  history: gradeArrayToString(state.grade, 'history'),
  math: gradeArrayToString(state.grade, 'math'),
  science: gradeArrayToString(state.grade, 'science'),
  tech_and_home: gradeArrayToString(state.grade, 'tech'),
  english: gradeArrayToString(state.grade, 'english'),
  ged_average_score: Number(state.score),
});

export const gradeStateToGedRequest = (
  state: RootState['GradeState'],
): gedGradeServerType => ({
  ged_average_score: Number(state.score),
});

export const selfIntroductionStateToRequest = (
  state: RootState['IntroductionState'],
): selfIntroductionServerType => ({
  self_introduction: state.selfIntroduction,
});

export const studyPlanStateToRequest = (
  state: RootState['IntroductionState'],
): studyPlanServerType => ({
  study_plan: state.studyPlan,
});

export const selfIntroductionResponseToState = (
  response: selfIntroductionServerType,
): { selfIntroduction: string } => ({
  selfIntroduction: response.self_introduction,
});

export const studyPlanResponseToState = (
  response: studyPlanServerType,
): { studyPlan: string } => ({
  studyPlan: response.study_plan,
});
