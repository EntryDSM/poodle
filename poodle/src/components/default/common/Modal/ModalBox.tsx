import React, { FC, useCallback } from 'react';
import * as S from '@/styles/common/Modal';

type ModalBoxProps = {
    children: React.ReactNode,
    modalOff: () => void
}

const ModalBox: FC<ModalBoxProps> = ({ children, modalOff }) => {
    const preventBubling = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    }, []);
    return (
        <S.ModalBox onClick={preventBubling}>
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