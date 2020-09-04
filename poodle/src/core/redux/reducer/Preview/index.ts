import ErrorType, { errorInitialState } from '@/lib/utils/type';
import {
  PreviewAction,
  PREVIEW,
  PREVIEW_CALL_FAILURE,
  PREVIEW_CALL_SUCCESS,
  SUBMIT_FAILURE,
  SUBMIT_SUCCESS,
} from '../../actions/Preview';

export interface PreviewState {
  preview: string;
  error: ErrorType | null;
  isSubmit: boolean;
  getPreviewError: ErrorType;
  setUserStatus: ErrorType;
}

const initialState: PreviewState = {
  preview: '',
  error: null,
  isSubmit: false,
  getPreviewError: errorInitialState,
  setUserStatus: errorInitialState,
};

const PreviewState = (
  state: PreviewState = initialState,
  action: PreviewAction,
): PreviewState => {
  switch (action.type) {
    case PREVIEW: {
      return {
        ...state,
        preview: action.payload,
      };
    }
    case PREVIEW_CALL_FAILURE: {
      return {
        ...state,
        error: action.payload,
        getPreviewError: action.payload,
        setUserStatus: errorInitialState,
      };
    }
    case PREVIEW_CALL_SUCCESS: {
      return {
        ...state,
        preview: action.payload,
      };
    }
    case SUBMIT_SUCCESS: {
      return {
        ...state,
        isSubmit: action.payload,
      };
    }
    case SUBMIT_FAILURE: {
      return {
        ...state,
        error: action.payload,
        setUserStatus: action.payload,
        getPreviewError: errorInitialState,
      };
    }
    default:
      return state;
  }
};

export default PreviewState;
