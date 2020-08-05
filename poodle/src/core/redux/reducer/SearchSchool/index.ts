import ErrorType from '@/lib/utils/type/ErrorType';
import {
  GET_SCHOOL_CALL,
  GET_SCHOOL_FAILURE,
  GET_SCHOOL_SUCCESS,
  SchoolType,
  SCHOOL_INFO,
  SearchSchoolType,
  EDU_OFFICE,
  PAGE,
  SCHOOL_SEARCH_INPUT,
  LOADING,
} from '../../actions/SearchSchool';

type State = {
  SchoolInfo: SchoolType[];
  error: ErrorType | null;
  eduOffice: string;
  page: number;
  schoolSearchInput: string;
  loading: boolean;
};

const initalState: State = {
  SchoolInfo: [],
  error: null,
  eduOffice: '',
  page: 0,
  schoolSearchInput: '',
  loading: false,
};

const SearchSchoolState = (
  state: State = initalState,
  action: SearchSchoolType,
): State => {
  switch (action.type) {
    case GET_SCHOOL_CALL: {
      return {
        ...state,
      };
    }
    case GET_SCHOOL_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case GET_SCHOOL_SUCCESS: {
      return {
        ...state,
        SchoolInfo: action.payload.info,
      };
    }
    case SCHOOL_INFO: {
      return {
        ...state,
        SchoolInfo: action.payload.info,
      };
    }
    case EDU_OFFICE: {
      return {
        ...state,
        eduOffice: action.payload.office,
      };
    }
    case PAGE: {
      return {
        ...state,
        page: action.payload.page,
      };
    }
    case SCHOOL_SEARCH_INPUT: {
      return {
        ...state,
        schoolSearchInput: action.payload.searchInput,
      };
    }
    case LOADING: {
      return {
        ...state,
        loading: action.payload.loading,
      };
    }
    default:
      return state;
  }
};

export default SearchSchoolState;
