import React, { useMemo, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/core/redux/reducer';
import {
  LOGINMODAL,
  RESETMODAL,
  YELLOWCHECKMODAL,
  BLUECHECKMODAL,
  REDERRORMODAL,
  WARNINGMODAL,
  modalClear,
  modalOff,
  ADDRESS_SEARCH_MODAL,
  SCHOOL_SEARCH_MODAL,
  NOTICE_MODAL,
} from '@/core/redux/actions/Modal';
import Modal from '@/components/default/common/Modal/Modal';
import ModalBox from '@/components/default/common/Modal/ModalBox';
import {
  YellowCheckModal,
  BlueCheckModal,
  RedErrorModal,
  WarningModal,
  SchoolSearchModal,
  AddressSearchModal,
  NoticeModal,
} from '@/components/default/common/Modal';
import {
  LoginModalContainer,
  ResetModalContainer,
  ErrorModalContainer,
} from '.';

interface Props {
  onClick: () => void;
}

const ModalContainer: FC<Props> = ({ onClick }) => {
  const dispatch = useDispatch();
  const {
    login,
    reset,
    yellowCheck,
    blueCheck,
    redError,
    warning,
    schoolSearch,
    addressSearch,
    notice,
  } = useSelector(({ Modal: modal }: RootState) => ({
    login: modal[LOGINMODAL],
    reset: modal[RESETMODAL],
    yellowCheck: modal[YELLOWCHECKMODAL],
    blueCheck: modal[BLUECHECKMODAL],
    redError: modal[REDERRORMODAL],
    warning: modal[WARNINGMODAL],
    addressSearch: modal[ADDRESS_SEARCH_MODAL],
    schoolSearch: modal[SCHOOL_SEARCH_MODAL],
    notice: modal[NOTICE_MODAL],
  }));
  const modalList = useMemo(
    () => [
      login,
      reset,
      yellowCheck,
      blueCheck,
      redError,
      warning,
      schoolSearch,
      addressSearch,
      notice,
    ],
    [
      login,
      reset,
      yellowCheck,
      blueCheck,
      redError,
      warning,
      schoolSearch,
      addressSearch,
      notice,
    ],
  );
  if (!modalList.some(m => m)) return null;
  return !notice ? (
    <Modal modalClear={() => dispatch(modalClear())}>
      {login && (
        <ModalBox modalOff={() => dispatch(modalOff(LOGINMODAL))}>
          <LoginModalContainer />
        </ModalBox>
      )}
      {reset && (
        <ModalBox modalOff={() => dispatch(modalOff(RESETMODAL))}>
          <ResetModalContainer />
        </ModalBox>
      )}
      {yellowCheck && (
        <ModalBox modalOff={() => dispatch(modalOff(YELLOWCHECKMODAL))}>
          <YellowCheckModal />
        </ModalBox>
      )}
      {blueCheck && (
        <ModalBox modalOff={() => dispatch(modalOff(BLUECHECKMODAL))}>
          <BlueCheckModal onClick={onClick} />
        </ModalBox>
      )}
      {redError && (
        <ModalBox modalOff={() => dispatch(modalOff(REDERRORMODAL))}>
          <RedErrorModal onClick={onClick} />
        </ModalBox>
      )}
      {warning && (
        <ModalBox modalOff={() => dispatch(modalOff(WARNINGMODAL))}>
          <WarningModal />
        </ModalBox>
      )}
      {addressSearch && (
        <AddressSearchModal
          modalOff={() => dispatch(modalOff(ADDRESS_SEARCH_MODAL))}
        />
      )}
      {schoolSearch && (
        <SchoolSearchModal
          modalOff={() => dispatch(modalOff(SCHOOL_SEARCH_MODAL))}
        />
      )}
    </Modal>
  ) : (
    <Modal modalClear={() => {}}>
      <NoticeModal modalOff={() => dispatch(modalOff(NOTICE_MODAL))} />
    </Modal>
  );
};

export default ModalContainer;
