import { modalOn, modalOff, modalClear } from '@/core/redux/actions/Modal';

export const openModal = (action: string, dispatch: any) => {
  dispatch(modalOn(action));
};

export const closeModal = (action: string, dispatch: any) => {
  dispatch(modalOff(action));
};

export const clearModal = (dispatch: any) => {
  dispatch(modalClear());
};

export { default as Modal } from './Modal';
export { default as ModalBox } from './ModalBox';
export { default as ModalButtonList } from './ModalButtonList';
export { default as ModalContent } from './ModalContent';
export { default as ModalInput } from './ModalInput';

export { default as BlueCheckModal } from './BlueCheckModal/BlueCheckModal';
export { default as YellowCheckModal } from './YellowCheckModal/YellowCheckModal';
export { default as RedErrorModal } from './RedErrorModal/RedErrorModal';
export { default as WarningModal } from './WarningModal/WarningModal';
export { default as AddressSearchModal } from './AddressSearchModal';
export { default as SchoolSearchModal } from './SchoolSearchModal';

export type ModalContentProps = {
  children?: React.ReactNode;
  title: string;
  contour?: boolean;
  normal?: string;
  errorSentence?: string;
  explain?: string;
  color: string;
  icon?: string;
};
