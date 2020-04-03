import React from 'react';
import * as S from '../../../styles/common/Modal';

type ModalProps = {
    modalClear: () => void,
    children: React.ReactNode
};

function Modal({ modalClear, children }: ModalProps) {
    return (
        <S.ModalWrapper onClick={modalClear}>
            {children}
        </S.ModalWrapper>
    );
}

export default Modal;