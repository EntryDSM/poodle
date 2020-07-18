import { State } from '@/core/redux/reducer/Info';
import ErrorType from '@/lib/utils/type/ErrorType';

export const NAME = 'Info/NAME' as const;
export const GENDER = 'Info/GENDER' as const;
export const BIRTHDAY = 'Info/BIRTHDAY' as const;
export const NUMBER = 'Info/NUMBER' as const;
export const CLASS_NUMBER = 'Info/CLASS_NUMBER' as const;
export const GRADE_NUMBER = 'Info/GRADE_NUMBER' as const;
export const MIDDLESCHOOL = 'Info/MIDDLESCHOOL' as const;
export const PROTECTOR_NAME = 'Info/PROTECTOR_NAME' as const;
export const PICTURE = 'Info/PICTURE' as const;
export const SCHOOL_PHONE_NUM = 'Info/SCHOOL_PHONE_NUM' as const;
export const PROTECTOR_PHONE_NUM = 'Info/PROTECTOR_PHONE_NUM' as const;
export const PHONE_NUM = 'Info/PHONE_NUM' as const;
export const ADDRESS = 'Info/ADDRESS' as const;
export const POST_NUM = 'Info/POST_NUM' as const;
export const ADDRESS_DETAIL = 'Info/ADDRESS_DETAIL' as const;
export const INFO_SUCCESS = 'Info/INFO_SUCCESS' as const;
export const INFO_FAILURE = 'Info/INFO_FAILURE' as const;
export const ALL = 'Info/ALL' as const;
export const GET_INFO = 'Info/GET_INFO' as const;

export interface SetName {
  type: typeof NAME;
  payload: { name: string };
}

export interface SetGender {
  type: typeof GENDER;
  payload: { gender: string };
}

export interface SetBirthday {
  type: typeof BIRTHDAY;
  payload: { birthday: string };
}

export interface SetNumber {
  type: typeof NUMBER;
  payload: { number: string };
}

export interface SetClassNumber {
  type: typeof CLASS_NUMBER;
  payload: { classNumber: string };
}

export interface SetGradeNumber {
  type: typeof GRADE_NUMBER;
  payload: { gradeNumber: string };
}

export interface SetMiddleSchool {
  type: typeof MIDDLESCHOOL;
  payload: { schoolName: string };
}

export interface SetProtectorName {
  type: typeof PROTECTOR_NAME;
  payload: { protectorName: string };
}

export interface SetPicture {
  type: typeof PICTURE;
  payload: { picture: string };
}

export interface SetSchoolPhoneNum {
  type: typeof SCHOOL_PHONE_NUM;
  payload: { schoolPhoneNum: string };
}

export interface SetProtectorPhoneNum {
  type: typeof PROTECTOR_PHONE_NUM;
  payload: { protectorPhoneNum: string };
}

export interface SetPhoneNum {
  type: typeof PHONE_NUM;
  payload: { phoneNum: string };
}

export interface SetAddress {
  type: typeof ADDRESS;
  payload: { address: string };
}

export interface SetPostNum {
  type: typeof POST_NUM;
  payload: { postNum: string };
}

export interface SetDetailAddress {
  type: typeof ADDRESS_DETAIL;
  payload: { detailAddress: string };
}
export interface InfoSuccess {
  type: typeof INFO_SUCCESS;
}

export interface InfoFailure {
  type: typeof INFO_FAILURE;
  payload: { error: ErrorType };
}

export interface SetAll {
  type: typeof ALL;
  payload: { all: State };
}

export interface GetInfo {
  type: typeof GET_INFO;
}

export type InfoActionType =
  | SetName
  | SetNumber
  | SetGradeNumber
  | SetClassNumber
  | SetAddress
  | SetBirthday
  | SetGender
  | SetPhoneNum
  | SetSchoolPhoneNum
  | SetMiddleSchool
  | SetProtectorPhoneNum
  | SetProtectorName
  | SetPicture
  | SetPostNum
  | SetDetailAddress
  | InfoFailure
  | InfoSuccess
  | SetAll
  | GetInfo;

export const setName = (payload: { name: string }): InfoActionType => ({
  type: NAME,
  payload,
});

export const setClassNumber = (payload: {
  classNumber: string;
}): InfoActionType => ({
  type: CLASS_NUMBER,
  payload,
});

export const setGradeNumber = (payload: {
  gradeNumber: string;
}): InfoActionType => ({
  type: GRADE_NUMBER,
  payload,
});

export const setNumber = (payload: { number: string }): InfoActionType => ({
  type: NUMBER,
  payload,
});

export const setAddress = (payload: { address: string }): InfoActionType => ({
  type: ADDRESS,
  payload,
});

export const setBirthday = (payload: { birthday: string }): InfoActionType => ({
  type: BIRTHDAY,
  payload,
});

export const setGender = (payload: { gender: string }): InfoActionType => ({
  type: GENDER,
  payload,
});

export const setPhoneNum = (payload: { phoneNum: string }): InfoActionType => ({
  type: PHONE_NUM,
  payload,
});

export const setSchoolPhoneNum = (payload: {
  schoolPhoneNum: string;
}): InfoActionType => ({
  type: SCHOOL_PHONE_NUM,
  payload,
});

export const setMiddleSchool = (payload: {
  schoolName: string;
}): InfoActionType => ({
  type: MIDDLESCHOOL,
  payload,
});

export const setProtectorPhoneNum = (payload: {
  protectorPhoneNum: string;
}): InfoActionType => ({
  type: PROTECTOR_PHONE_NUM,
  payload,
});

export const setProtectorName = (payload: {
  protectorName: string;
}): InfoActionType => ({
  type: PROTECTOR_NAME,
  payload,
});

export const setPicture = (payload: { picture: string }): InfoActionType => ({
  type: PICTURE,
  payload,
});

export const setDetailAddress = (payload: {
  detailAddress: string;
}): InfoActionType => ({
  type: ADDRESS_DETAIL,
  payload,
});

export const setPostNum = (payload: { postNum: string }): InfoActionType => ({
  type: POST_NUM,
  payload,
});

export const infoSuccess = (): InfoActionType => ({
  type: INFO_SUCCESS,
});

export const infoFailure = (payload: { error: ErrorType }): InfoActionType => ({
  type: INFO_FAILURE,
  payload,
});

export const setAll = (payload: { all: State }): InfoActionType => ({
  type: ALL,
  payload,
});

export const getInfo = () => (): InfoActionType => ({
  type: GET_INFO,
});
