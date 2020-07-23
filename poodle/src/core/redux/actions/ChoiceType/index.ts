import ErrorType from '@/lib/utils/type/ErrorType';
import { State } from '../../reducer/ChoiceType';

export const APPLYTYPE = 'ChoiceType/APPLYTYPE' as const;
export const DISTRICT = 'ChoiceType/DISTRICT' as const;
export const GRADUATION_YEAR = 'ChoiceType/GRADUATIONSTATUS_YEAR' as const;
export const GRADUATION_STATUS = 'ChoiceType/GRADUATION_STATUS' as const;
export const ALL = 'ChoiceType/ALL' as const;
export const ADDITIONALTYPE = 'ChoiceType/ADDITIONALTYPE' as const;

export const GET_TYPE_CALL = 'ChoiceType/GET_TYPE_CALL' as const;
export const GET_TYPE_FAILURE = 'ChoiceType/GET_TYPE_FAILURE' as const;
export const GET_TYPE_SUCCESS = 'ChoiceType/GET_TYPE_SUCCESS' as const;

export const TYPE_SUCCESS = 'ChoiceType/TYPE_SUCCESS' as const;
export const TYPE_FAILURE = 'ChoiceType/TYPE_FAILURE' as const;
export const TYPE_CALL = 'ChoiceType/Type_TYPE_CALL' as const;

export type AdditionalType =
  | 'NATIONAL_MERIT'
  | 'PRIVILEGED_ADMISSION'
  | 'NOT_APPLICABLE';
export type GraduationStatusType = 'ungraduated' | 'graduated' | 'ged';

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

export interface TypeSuccess {
  type: typeof TYPE_SUCCESS;
  payload: { response: State };
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
  payload: { state: State };
}

export interface GetTypeSuccess {
  type: typeof TYPE_SUCCESS;
  payload: { response: State };
}

export interface GetTypeFailure {
  type: typeof TYPE_FAILURE;
  payload: { error: ErrorType };
}

export interface GetTypeCall {
  type: typeof TYPE_CALL;
}

export type ChoiceTypeActionType =
  | SetApplyType
  | SetDistrict
  | SetGraduationStatus
  | SetGraduationYear
  | TypeSuccess
  | TypeFailure
  | SetAll
  | SetAdditionalType
  | TypeCall
  | GetTypeFailure
  | GetTypeSuccess
  | GetTypeCall;

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

export const typeSuccess = (payload: {
  response: State;
}): ChoiceTypeActionType => ({
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

export const getTypeSuccess = (payload: {
  response: State;
}): ChoiceTypeActionType => ({
  type: TYPE_SUCCESS,
  payload,
});

export const getTypeFailure = (payload: {
  error: ErrorType;
}): ChoiceTypeActionType => ({
  type: TYPE_FAILURE,
  payload,
});
