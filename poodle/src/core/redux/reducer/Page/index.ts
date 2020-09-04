import { PAGE_MOVE, PageType, PageActionType } from '../../actions/Page';

export interface State {
  page: PageType;
}

const initialState: State = {
  page: null,
};

const PageState = (
  state: State = initialState,
  action: PageActionType,
): State => {
  switch (action.type) {
    case PAGE_MOVE: {
      return {
        ...state,
        page: action.payload.page,
      };
    }
    default: {
      return state;
    }
  }
};

export default PageState;
