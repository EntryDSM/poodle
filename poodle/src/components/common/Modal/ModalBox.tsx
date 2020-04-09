import React, { FC } from 'react';
import * as S from '@/styles/common/Modal';

type ModalBoxProps = {
    children: React.ReactNode,
    modalOff: () => void
}

const ModalBox: FC<ModalBoxProps> = ({ children, modalOff }) => {
    return (
        <S.ModalBox onClick={(e: any) => e.stopPropagation()}>
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