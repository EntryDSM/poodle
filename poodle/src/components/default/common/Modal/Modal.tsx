import React, { FC } from 'react';
import * as S from '@/styles/common/Modal';

type ModalProps = {
  modalClear: () => void;
  children: React.ReactNode;
};

const Modal: FC<ModalProps> = ({ modalClear, children }) => (
  <S.ModalWrapper onClick={modalClear}>{children}</S.ModalWrapper>
);

export default Modal;
