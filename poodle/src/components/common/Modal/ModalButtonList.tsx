import React, { FC } from 'react';
import ModalButton from './ModalButton';
import * as S from '@/styles/common/Modal';

export type ButtonType = {
    id: number,
    title: string,
    size: string,
    onClick: () => void
}

export type ModalButtonListProps = {
    buttonList: Array<ButtonType>,
    color: string
}

const ModalButtonList: FC<ModalButtonListProps> = ({ buttonList, color }) => {
    return (
        <S.ModalButtonListWrapper>
            {buttonList.map(button => (
                <ModalButton 
                    key={button.id}
                    color={color}
                    title={button.title}
                    size={button.size}
                    onClick={button.onClick}
                />
            ))}
        </S.ModalButtonListWrapper>
    );
}

export default ModalButtonList;