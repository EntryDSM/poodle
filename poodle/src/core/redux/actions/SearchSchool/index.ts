import ErrorType from '@/lib/utils/type/ErrorType';

export const GET_SCHOOL_CALL = 'SearchSchool/GET_SCHOOL' as const;
export const GET_SCHOOL_FAILURE = 'SearchSchool/GET_SCHOOL_FAILURE' as const;
export const GET_SCHOOL_SUCCESS = 'SearchSchool/GET_SCHOOL_SUCCESS' as const;
export const SCHOOL_INFO = 'SearchSchool/SCHOOL_INFO' as const;
export const EDU_OFFICE = 'SearchSchool/EDU_OFFICE' as const;
export const SCHOOL_SEARCH_INPUT = 'SearchScool/SCHOOL_SEARCH_INPUT' as const;
export const PAGE = 'SearchScool/PAGE' as const;
export const LOADING = 'SearchSchool/LOADING' as const;

export type SchoolType = {
  schoolCode: string;
  schoolName: string;
  schoolFullName: string;
  schoolAddress: string;
};

export interface GetSchoolCall {
  type: typeof GET_SCHOOL_CALL;
  payload: { url: string };
}

export interface GetSchoolFailure {
  type: typeof GET_SCHOOL_FAILURE;
  payload: { error: ErrorType };
}

export interface GetSchoolSuccess {
  type: typeof GET_SCHOOL_SUCCESS;
  payload: { info: SchoolType[] };
}

export interface SchoolInfoChange {
  type: typeof SCHOOL_INFO;
  payload: { info: SchoolType[] };
}

export interface EduOfficeChange {
  type: typeof EDU_OFFICE;
  payload: { office: string };
}

export interface SchoolSearchInputChange {
  type: typeof SCHOOL_SEARCH_INPUT;
  payload: { searchInput: string };
}

export interface PageChange {
  type: typeof PAGE;
  payload: { page: number };
}

export interface Loading {
  type: typeof LOADING;
  payload: { loading: boolean };
}

export type SearchSchoolType =
  | GetSchoolCall
  | GetSchoolFailure
  | GetSchoolSuccess
  | SchoolInfoChange
  | EduOfficeChange
  | SchoolSearchInputChange
  | PageChange
  | Loading;

export const getSchoolCall = (payload: { url: string }): SearchSchoolType => ({
  type: GET_SCHOOL_CALL,
  payload,
});

export const getSchoolFailure = (payload: {
  error: ErrorType;
}): SearchSchoolType => ({
  type: GET_SCHOOL_FAILURE,
  payload,
});

export const getSchoolSuccess = (payload: {
  info: SchoolType[];
}): SearchSchoolType => ({
  type: GET_SCHOOL_SUCCESS,
  payload,
});

export const schoolInfoChange = (payload: {
  info: SchoolType[];
}): SearchSchoolType => ({
  type: SCHOOL_INFO,
  payload,
});

export const eduOfficeChange = (payload: { office: string }) => ({
  type: EDU_OFFICE,
  payload,
});

export const schoolSearchInputChange = (payload: { searchInput: string }) => ({
  type: SCHOOL_SEARCH_INPUT,
  payload,
});

export const pageChange = (payload: { page: number }) => ({
  type: PAGE,
  payload,
});

export const loading = (payload: { loading: boolean }) => ({
  type: LOADING,
  payload,
});
