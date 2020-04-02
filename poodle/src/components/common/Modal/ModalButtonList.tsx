import React from 'react';
import ModalButton from './ModalButton';
import * as S from '../../../styles/common/Modal';

type ModalButtonListProps = {
    buttonList: {
        id: number,
        title: string,
        size: string,
        onClick: () => void,
    }[],
    color: string
}

function ModalButtonList({ buttonList, color }: ModalButtonListProps) {
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