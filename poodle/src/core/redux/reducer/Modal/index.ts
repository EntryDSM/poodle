import {
  MODALON,
  MODALOFF,
  MODALCLEAR,
  ModalAction,
  LOGINMODAL,
  RESETMODAL,
  YELLOWCHECKMODAL,
  BLUECHECKMODAL,
  REDERRORMODAL,
  WARNINGMODAL,
  SCHOOL_SEARCH_MODAL,
  ADDRESS_SEARCH_MODAL,
} from '../../actions/Modal';

type ModalState = {
  [LOGINMODAL]: boolean;
  [RESETMODAL]: boolean;
  [YELLOWCHECKMODAL]: boolean;
  [BLUECHECKMODAL]: boolean;
  [REDERRORMODAL]: boolean;
  [WARNINGMODAL]: boolean;
  [SCHOOL_SEARCH_MODAL]: boolean;
  [ADDRESS_SEARCH_MODAL]: boolean;
};

const initialState: ModalState = {
  [LOGINMODAL]: false,
  [RESETMODAL]: false,
  [YELLOWCHECKMODAL]: false,
  [YELLOWCHECKMODAL]: false,
  [BLUECHECKMODAL]: false,
  [REDERRORMODAL]: false,
  [WARNINGMODAL]: false,
  [SCHOOL_SEARCH_MODAL]: false,
  [ADDRESS_SEARCH_MODAL]: false,
};

export default function modal(
  state: ModalState = initialState,
  action: ModalAction,
) {
  switch (action.type) {
    case MODALON:
      return {
        ...state,
        [action.payload]: true,
      };
    case MODALOFF:
      return {
        ...state,
        [action.payload]: false,
      };
    case MODALCLEAR:
      return initialState;
    default:
      return state;
  }
}
