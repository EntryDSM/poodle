import React, { FC } from 'react';
import * as S from '@/styles/common/Modal';

export type ModalButtonProps = {
    color: string,
    title: string,
    size: string,
    onClick: () => void
}

const ModalButton: FC<ModalButtonProps> = ({ color, title, size, onClick }) => {
    return (
        <S.StyledModalButton color={color} size={size} onClick={onClick}>
            {title}
        </S.StyledModalButton>
    );
} 

export default ModalButton;