import ErrorType from '@/lib/utils/type';
import { State } from '../../reducer/ChoiceType';

export const APPLYTYPE = 'ChoiceType/APPLYTYPE' as const;
export const DISTRICT = 'ChoiceType/DISTRICT' as const;
export const GRADUATION_YEAR = 'ChoiceType/GRADUATIONSTATUS_YEAR' as const;
export const GRADUATION_MONTH = 'ChoiceType/GRADUATIONSTATUS_MONTH' as const;
export const GRADUATION_STATUS = 'ChoiceType/GRADUATION_STATUS' as const;
export const ISQUALIFICATION = 'ChoiceType/ISQUALIFICATION' as const;
export const ALL = 'ChoiceType/ALL' as const;
export const ADDITIONALTYPE = 'ChoiceType/ADDITIONALTYPE' as const;
export const GED_SUCCESS_YEAR = 'ChoiceType/GED_SUCCESS_YEAR' as const;
export const GED_SUCCESS_MONTH = 'ChoiceType/GED_SUCCESS_MONTH' as const;
export const GED_SUCCESS_DATE = 'ChoiceType/GED_SUCCESS_DATE' as const;

export const GET_TYPE_CALL = 'ChoiceType/GET_TYPE_CALL' as const;
export const GET_TYPE_FAILURE = 'ChoiceType/GET_TYPE_FAILURE' as const;
export const GET_TYPE_SUCCESS = 'ChoiceType/GET_TYPE_SUCCESS' as const;

export const TYPE_SUCCESS = 'ChoiceType/TYPE_SUCCESS' as const;
export const TYPE_FAILURE = 'ChoiceType/TYPE_FAILURE' as const;
export const TYPE_CALL = 'ChoiceType/TYPE_CALL' as const;

export type AdditionalType =
  | 'NATIONAL_MERIT'
  | 'PRIVILEGED_ADMISSION'
  | 'NOT_APPLICABLE';
export type GraduationStatusType = 'UNGRADUATED' | 'GRADUATED' | 'GED';

export interface SetApplyType {
  type: typeof APPLYTYPE;
  payload: { type: string };
}

export interface SetDistrict {
  type: typeof DISTRICT;
  payload: { district: string };
}

export interface SetGraduationStatus {
  type: typeof GRADUATION_STATUS;
  payload: { status: GraduationStatusType };
}

export interface SetGraduationYear {
  type: typeof GRADUATION_YEAR;
  payload: { year: string };
}

export interface SetGraduationMonth {
  type: typeof GRADUATION_MONTH;
  payload: { month: string };
}

export interface TypeSuccess {
  type: typeof TYPE_SUCCESS;
  payload: Date;
}

export interface TypeFailure {
  type: typeof TYPE_FAILURE;
  payload: { error: ErrorType };
}

export interface SetAll {
  type: typeof ALL;
  payload: { all: State };
}

export interface SetAdditionalType {
  type: typeof ADDITIONALTYPE;
  payload: { additionalType: AdditionalType };
}

export interface TypeCall {
  type: typeof TYPE_CALL;
  payload: { pageMove: boolean };
}

export interface GetTypeSuccess {
  type: typeof GET_TYPE_SUCCESS;
  payload: State;
}

export interface GetTypeFailure {
  type: typeof GET_TYPE_FAILURE;
  payload: { error: ErrorType };
}

export interface GetTypeCall {
  type: typeof GET_TYPE_CALL;
}

export interface SetGEDSuccessYear {
  type: typeof GED_SUCCESS_YEAR;
  payload: { year: string };
}

export interface SetGEDSuccessMonth {
  type: typeof GED_SUCCESS_MONTH;
  payload: { month: string };
}

export interface setIsQualification {
  type: typeof ISQUALIFICATION;
  payload: { qualification: boolean };
}

export type ChoiceTypeActionType =
  | SetApplyType
  | SetDistrict
  | SetGraduationStatus
  | SetGraduationYear
  | SetGraduationMonth
  | TypeSuccess
  | TypeFailure
  | SetAll
  | SetAdditionalType
  | TypeCall
  | GetTypeFailure
  | GetTypeSuccess
  | GetTypeCall
  | SetGEDSuccessYear
  | SetGEDSuccessMonth
  | setIsQualification;

export const setApplyType = (payload: {
  type: string;
}): ChoiceTypeActionType => ({
  type: APPLYTYPE,
  payload,
});
export const setDistrict = (payload: {
  district: string;
}): ChoiceTypeActionType => ({
  type: DISTRICT,
  payload,
});
export const setGraduationStatus = (payload: {
  status: GraduationStatusType;
}): ChoiceTypeActionType => ({
  type: GRADUATION_STATUS,
  payload,
});
export const setGraduationYear = (payload: {
  year: string;
}): ChoiceTypeActionType => ({
  type: GRADUATION_YEAR,
  payload,
});

export const setGraduationMonth = (payload: {
  month: string;
}): ChoiceTypeActionType => ({
  type: GRADUATION_MONTH,
  payload,
});

export const typeSuccess = (payload: Date): ChoiceTypeActionType => ({
  type: TYPE_SUCCESS,
  payload,
});

export const typeFailure = (payload: {
  error: ErrorType;
}): ChoiceTypeActionType => ({
  type: TYPE_FAILURE,
  payload,
});

export const setAll = (payload: { all: State }): ChoiceTypeActionType => ({
  type: ALL,
  payload,
});

export const setAdditionalType = (payload: {
  additionalType: AdditionalType;
}): ChoiceTypeActionType => ({
  type: ADDITIONALTYPE,
  payload,
});

export const getTypeSuccess = (payload: State): ChoiceTypeActionType => ({
  type: GET_TYPE_SUCCESS,
  payload,
});

export const getTypeFailure = (payload: {
  error: ErrorType;
}): ChoiceTypeActionType => ({
  type: TYPE_FAILURE,
  payload,
});

export const getTypeCall = (): ChoiceTypeActionType => ({
  type: GET_TYPE_CALL,
});

export const typeCall = (payload: {
  pageMove: boolean;
}): ChoiceTypeActionType => ({
  type: TYPE_CALL,
  payload,
});

export const setGEDSuccessYear = (payload: {
  year: string;
}): ChoiceTypeActionType => ({
  type: GED_SUCCESS_YEAR,
  payload,
});

export const setGEDSuccessMonth = (payload: {
  month: string;
}): ChoiceTypeActionType => ({
  type: GED_SUCCESS_MONTH,
  payload,
});

export const setIsQualification = (payload: { qualification: boolean }) => ({
  type: ISQUALIFICATION,
  payload,
});
