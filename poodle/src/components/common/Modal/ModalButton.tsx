import React from 'react';
import * as S from '@/styles/common/Modal';

export type ModalButtonProps = {
    color: string,
    title: string,
    size: string,
    onClick: () => void
}

function ModalButton({ color, title, size, onClick }: ModalButtonProps) {
    return (
        <S.StyledModalButton color={color} size={size} onClick={onClick}>
            {title}
        </S.StyledModalButton>
    );
} 

export default ModalButton;