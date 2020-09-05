import ErrorType from '@/lib/utils/type';

export const PREVIEW = 'Preview/PREVIEW' as const;

export const PREVIEW_CALL = 'Preview/PREVIEW_CALL' as const;
export const PREVIEW_CALL_FAILURE = 'Preview/PREVIEW_CALL_FAILURE' as const;
export const PREVIEW_CALL_SUCCESS = 'Preview/PREVIEW_CALL_SUCCESS' as const;
export const PAGEMOVE = 'Preview/PAGEMOVE' as const;

export const SUBMIT_CALL = 'Preview/SUBMIT' as const;
export const SUBMIT_FAILURE = 'Preview/SUBMIT_FAILURE' as const;
export const SUBMIT_SUCCESS = 'Preview/SUBMIT_SUCCESS' as const;

export const setPreview = (payload: string) => ({
  type: PREVIEW,
  payload,
});

export const previewCall = () => ({
  type: PREVIEW_CALL,
});

export const previewFailure = (payload: ErrorType) => ({
  type: PREVIEW_CALL_FAILURE,
  payload,
});

export const previewSuccess = (payload: string) => ({
  type: PREVIEW_CALL_SUCCESS,
  payload,
});

export const submitCall = () => ({
  type: SUBMIT_CALL,
});

export const submitFailure = (payload: ErrorType) => ({
  type: SUBMIT_FAILURE,
  payload,
});

export const submitSuccess = (payload: boolean) => ({
  type: SUBMIT_SUCCESS,
  payload,
});

export const setPageMove = (payload: { pageMove: boolean }) => ({
  type: PAGEMOVE,
  payload,
});

export type PreviewAction =
  | ReturnType<typeof setPreview>
  | ReturnType<typeof previewCall>
  | ReturnType<typeof previewFailure>
  | ReturnType<typeof previewSuccess>
  | ReturnType<typeof submitCall>
  | ReturnType<typeof submitFailure>
  | ReturnType<typeof submitSuccess>
  | ReturnType<typeof setPageMove>;
