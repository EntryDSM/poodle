import React from 'react';
import * as S from '../../../styles/common/Modal';

type ModalBoxProps = {
    children: React.ReactNode,
    modalOff: () => void
}

function ModalBox({ children, modalOff }: ModalBoxProps) {
    return (
        <S.ModalBox onClick={e => e.stopPropagation()}>
            <S.ModalHeader>
                <S.CloseButton onClick={modalOff}>
                    <S.CloseButtonImage />
                </S.CloseButton>
            </S.ModalHeader>
            {children}
        </S.ModalBox>
    );
}

export default ModalBox;