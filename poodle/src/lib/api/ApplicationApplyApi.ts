import { RootState } from '@/core/redux/reducer';
import { GradeType, SubjectType, ScoreType } from '@/core/redux/actions/Grade';
import client, { getClientWithAccessToken } from './client';
import ErrorType, { errorInitialState } from '@/lib/utils/type';
import {
  userTypeServerType,
  gradeServerType,
  userInfoServerType,
  selfIntroductionServerType,
  studyPlanServerType,
  SubjectsType,
  gedInfoServerType,
  gedGradeServerType,
  previewType,
  submitType,
  userTypeResponseType,
  selfIntroductionRequestType,
  studyPlanRequestType,
  userInfoResponseType,
  gradeResponseType,
} from './ApiType';
import { GRADESEMESTERLIST } from '@/components/Grade/constance';
import { PreviewState } from '@/core/redux/reducer/Preview';
import { GraduationStatusType } from '@/core/redux/actions/ChoiceType';

export const errorTypeCheck = (error: ErrorType): void => {
  if (error.status === 401 || error.status === 403) {
    console.log('token expired');
  } else {
    console.log('unknown error');
  }
};

export const nullAndNumberToString = (value: null | number): string => {
  try {
    if (value === null || value === undefined) return '';
    return value.toString();
  } catch (error) {
    console.log(error);
    return '';
  }
};

export const nullAbleStringToString = (value: null | string) => {
  if (!value) return '';
  return value;
};

export const stringToStringOrNull = (value: string): string | null => {
  if (value.length === 0) return null;
  return value;
};

export const strintToNumberOrNull = (value: string): number | null => {
  if (value.length === 0) return null;
  return parseInt(value);
};

export const getDataToServer = async <ResponseType>(
  url: string,
): Promise<ResponseType> => {
  const response = await getClientWithAccessToken().get<ResponseType>(url);
  return response.data;
};

export const setDataToServer = async <RequestType>(
  url: string,
  payload: RequestType,
) => {
  const response = await getClientWithAccessToken().patch(url, payload);
  return response;
};

export const setPostToServer = async <RequestType>(
  url: string,
  payload: RequestType,
) => {
  const response = await getClientWithAccessToken().post(url, payload);
  return response.data;
};

export const typeStateToRequest = (
  state: RootState['ChoiceTypeState'],
): userTypeServerType => {
  const {
    qualificationExam,
    graduationStatus,
    graduationYear,
    graduationMonth,
    district,
    applyType,
    additionalType,
    gedSuccessMonth,
    gedSuccessYear,
  } = state;
  console.log(qualificationExam, graduationStatus);
  const gradeType = getGradeType(qualificationExam, graduationStatus);
  return {
    grade_type: gradeType,
    apply_type: stringToStringOrNull(applyType),
    is_daejeon: isDaejeon(district),
    additional_type: additionalType,
    graduated_date:
      gradeType === 'GRADUATED'
        ? yearMonthToOne(graduationYear, graduationMonth)
        : null,
    ged_pass_date:
      gradeType === 'GED'
        ? yearMonthToOne(gedSuccessYear, gedSuccessMonth)
        : null,
  };
};

export const typeResponseToState = ({
  is_daejeon,
  grade_type,
  additional_type,
  apply_type,
  graduated_date,
  ged_pass_date,
}: userTypeResponseType): RootState['ChoiceTypeState'] => ({
  qualificationExam: isGED(grade_type),
  applyType: nullAbleStringToString(apply_type),
  district: getDistrictStringToisDaejeon(is_daejeon),
  graduationStatus: nullAbleStringToString(grade_type),
  graduationYear: getYearFromDateString(graduated_date),
  graduationMonth: getMonthFromDateString(graduated_date),
  additionalType: additional_type ? additional_type : 'NOT_APPLICABLE',
  error: null,
  gedSuccessMonth: getMonthFromDateString(ged_pass_date),
  gedSuccessYear: getYearFromDateString(ged_pass_date),
  successTime: null,
  getTypeError: errorInitialState,
  setTypeError: errorInitialState,
  setTypeAndMovePageError: errorInitialState,
  pageMove: false,
});

const isGED = (grade_type: string | null) => {
  if (grade_type === 'GED') {
    return true;
  }
  return false;
};

const isDaejeon = (district: string): boolean | null => {
  if (district.length === 0) return null;
  if (district === '대전') {
    return true;
  }
  return false;
};

const getGradeType = (
  qualifacationExam: boolean,
  graduationStatus: string,
): string | null => {
  if (graduationStatus === '') return null;
  else if (qualifacationExam) return 'GED';
  return graduationStatus;
};

const getDistrictStringToisDaejeon = (is_daejeon: boolean | null): string => {
  if (typeof is_daejeon === 'object') {
    return '';
  } else if (is_daejeon) {
    return '대전';
  }
  return '전국';
};

const yearMonthToOne = (year: string, month: string): string => {
  return `${year}-${month}`;
};

const getMonthFromDateString = (dateString: string | null): string => {
  if (!dateString) return '01';
  const splitedStringArray = dateString.split('-');
  return checkSingleTextAddZero(splitedStringArray[1]);
};

const getYearFromDateString = (dateString: string | null): string => {
  if (!dateString) return '2020';
  const splitedStringArray = dateString.split('-');
  return checkSingleTextAddZero(splitedStringArray[0]);
};

const getDayFromDateString = (dateString: string | null): string => {
  if (!dateString) return '01';
  const splitedStringArray = dateString.split('-');
  return checkSingleTextAddZero(splitedStringArray[2]);
};

export const infoStateToRequest = (
  state: RootState['InfoState'],
): userInfoServerType => {
  const dateString = `${state.year}-${state.month}-${state.day}`;
  return {
    name: stringToStringOrNull(state.name),
    sex: stringToStringOrNull(state.gender),
    student_number: infoStateToRequestStudentNumber(state),
    parent_name: stringToStringOrNull(state.protectorName),
    parent_tel: stringToStringOrNull(state.protectorPhoneNum),
    school_name: stringToStringOrNull(state.schoolPhoneNum),
    applicant_tel: stringToStringOrNull(state.phoneNum),
    school_tel: stringToStringOrNull(state.schoolPhoneNum),
    photo: stringToStringOrNull(state.picture),
    birth_date: infoDateStringToStateDateString(dateString),
    address: stringToStringOrNull(state.address),
    detail_address: stringToStringOrNull(state.detailAddress),
    post_code: stringToStringOrNull(state.postNum),
    school_code: stringToStringOrNull(state.schoolCode),
  };
};

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

const infoDateStringToStateDateString = (str: string): string | null => {
  const splitedString = str.split('-');
  console.log(splitedString);
  const changedMonth = checkSingleTextAddZero(splitedString[1]);
  const changedDay = checkSingleTextAddZero(splitedString[2]);
  return `${splitedString[0]}-${changedMonth}-${changedDay}`;
};

const infoStateToRequestStudentNumber = (
  state: RootState['InfoState'],
): string | null => {
  const changedClassNum = checkSingleTextAddZero(state.classNumber);
  const changedNumber = checkSingleTextAddZero(state.number);
  const grade = stringToStringOrNull(state.gradeNumber);
  if (!(grade && changedNumber && changedClassNum)) return null;
  return `${grade}${changedClassNum}${changedNumber}`;
};

const checkSingleTextAddZero = (text: string) => {
  console.log(text);
  return text.padStart(2, '0');
};

export const infoResponseToState = (
  response: userInfoResponseType,
): RootState['InfoState'] => ({
  name: nullAbleStringToString(response.name),
  gender: nullAbleStringToString(response.sex),
  number: infoStringToNumber(response.student_number),
  protectorName: nullAbleStringToString(response.parent_name),
  protectorPhoneNum: nullAbleStringToString(response.parent_tel),
  schoolPhoneNum: nullAbleStringToString(response.school_tel),
  phoneNum: nullAbleStringToString(response.applicant_tel),
  middleSchool: nullAbleStringToString(response.school_name),
  birthday: infoResponseDateStringToStateDateString(response.birth_date),
  postNum: nullAbleStringToString(response.post_code),
  address: nullAbleStringToString(response.address),
  detailAddress: nullAbleStringToString(response.detail_address),
  picture: nullAbleStringToString(response.photo),
  gradeNumber: infoStringToGradeNumber(response.student_number),
  classNumber: infoStringToClassNumber(response.student_number),
  error: null,
  successDate: null,
  gradeType: response.grade_type ? response.grade_type : 'GED',
  getInfoError: errorInitialState,
  setInfoError: errorInitialState,
  year: getYearFromDateString(response.birth_date),
  month: getMonthFromDateString(response.birth_date),
  day: getDayFromDateString(response.birth_date),
  schoolCode: nullAbleStringToString(response.school_code),
  pageMove: false,
});

const infoResponseDateStringToStateDateString = (
  requestDateString: string | null,
): string => {
  if (requestDateString === null) return '2000-01-01';
  return requestDateString;
};

const infoStringToGradeNumber = (str: string | null): string => {
  if (str === null) return '';
  return str.split('')[0];
};

const infoStringToClassNumber = (str: string | null) => {
  if (str === null) return '';
  const splitString = str.split('');
  if (splitString[1] === '0') {
    return splitString[2];
  }
  return `${splitString[1]}${splitString[2]}`;
};

const infoStringToNumber = (str: string | null): string => {
  if (str === null) return '';
  const splitString = str.split('');
  if (splitString[3] === '0') {
    return splitString[4];
  }
  return `${splitString[3]}${splitString[4]}`;
};

export const setInitalGradeState = () => {
  const initialSubjectGrade: SubjectsType = {
    korean: 'XXXXXX',
    science: 'XXXXXX',
    society: 'XXXXXX',
    math: 'XXXXXX',
    english: 'XXXXXX',
    history: 'XXXXXX',
    tech: 'XXXXXX',
  };
  return responseGradeToStateGrade(initialSubjectGrade);
};

const gradeArrayToString = (
  gradeList: GradeType[],
  subject: SubjectType,
  gradeType: GraduationStatusType,
): string => {
  const filteredGradeList = gradeList.filter(
    grade => grade.subject === subject,
  );
  const sortedGradeList = gradeSort(filteredGradeList);
  const stringedGradeList = sortedGradeList.reduce(
    (str: string, grade: GradeType) => str + grade.score,
    '',
  );
  if (gradeType === 'UNGRADUATED')
    return graduatedGradeStringToUngraduatedGradeString(stringedGradeList);
  else return stringedGradeList;
};

const graduatedGradeStringToUngraduatedGradeString = (gradeString: string) => {
  const splitedString = gradeString.split('');
  let buffer = '';
  splitedString[5] = 'X';
  splitedString.map(string => (buffer = buffer + string));
  return buffer;
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
  response: gradeResponseType,
): RootState['GradeState'] => {
  const subjects = responseToSubjects(response);
  console.log(response);
  return {
    serviceTime: nullAndNumberToString(response.volunteer_time),
    absentDay: nullAndNumberToString(response.full_cut_count),
    perceptionDay: nullAndNumberToString(response.late_count),
    cutClassDay: nullAndNumberToString(response.period_cut_count),
    leaveLateDay: nullAndNumberToString(response.early_leave_count),
    grade: responseGradeToStateGrade(subjects),
    score: nullAndNumberToString(response.ged_average_score),
    error: null,
    successTime: null,
    getGradeError: errorInitialState,
    setGradeError: errorInitialState,
    gradeType: response.grade_type ? response.grade_type : 'GED',
    pageMove: false,
  };
};

export const gradeIsAble = (response: SubjectsType) => {
  const entriedObj = objectToString(response);
  for (let i = 0; i < entriedObj.length; i++) {
    if (!entriedObj[i][1]) return false;
  }
  return true;
};

export const responseGradeToStateGrade = (
  response: SubjectsType,
): GradeType[] => {
  if (!gradeIsAble(response)) return setInitalGradeState();

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
  volunteer_time: strintToNumberOrNull(state.serviceTime),
  full_cut_count: strintToNumberOrNull(state.absentDay),
  period_cut_count: strintToNumberOrNull(state.cutClassDay),
  early_leave_count: strintToNumberOrNull(state.leaveLateDay),
  late_count: strintToNumberOrNull(state.perceptionDay),
  korean: gradeArrayToString(state.grade, 'korean', state.gradeType),
  social: gradeArrayToString(state.grade, 'society', state.gradeType),
  history: gradeArrayToString(state.grade, 'history', state.gradeType),
  math: gradeArrayToString(state.grade, 'math', state.gradeType),
  science: gradeArrayToString(state.grade, 'science', state.gradeType),
  tech_and_home: gradeArrayToString(state.grade, 'tech', state.gradeType),
  english: gradeArrayToString(state.grade, 'english', state.gradeType),
  ged_average_score: strintToNumberOrNull(state.score),
});

export const gradeStateToGedRequest = (
  state: RootState['GradeState'],
): gedGradeServerType => ({
  ged_average_score: Number(state.score),
});

export const selfIntroductionStateToRequest = (
  state: RootState['IntroductionState'],
): selfIntroductionRequestType => ({
  content: state.selfIntroduction,
});

export const studyPlanStateToRequest = (
  state: RootState['IntroductionState'],
): studyPlanRequestType => ({
  content: state.studyPlan,
});

export const selfIntroductionResponseToState = (
  response: selfIntroductionServerType,
): { selfIntroduction: string } => ({
  selfIntroduction: response.self_introduction
    ? response.self_introduction
    : '',
});

export const studyPlanResponseToState = (
  response: studyPlanServerType,
): { studyPlan: string } => ({
  studyPlan: response.plan ? response.plan : '',
});

export const getSearchSchoolUrl = (
  eduOffice: string,
  name: string,
  page: number,
  size: number,
) => {
  return `schools?eduOffice=${eduOffice}&name=${name}&page=${page}&size=${size}`;
};

export const previewStateToRequest = (isSubmit: boolean): submitType => {
  return {
    is_final_submit: isSubmit,
  };
};

export const pdfResponseToState = (response: previewType): PreviewState => {
  return {
    preview: '',
    // i will fix
    error: null,
    isSubmit: false,
    getPreviewError: errorInitialState,
    setUserStatus: errorInitialState,
  };
};
