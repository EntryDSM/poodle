export const PAGE_MOVE = 'PAGE/PAGE_MOVE';

export type PageType =
  | 'type'
  | 'info'
  | 'grade'
  | 'introduction'
  | 'preview'
  | '';

export interface PageMove {
  type: typeof PAGE_MOVE;
  payload: { page: PageType };
}

export type PageActionType = PageMove;

export const pageMove = (payload: { page: PageType }) => ({
  type: PAGE_MOVE,
  payload,
});
