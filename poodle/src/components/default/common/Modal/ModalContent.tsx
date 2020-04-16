import React, { FC } from 'react';
import * as S from '@/styles/common/Modal';
import { ModalContentProps } from '.';
import { BlueSuccess, BlueCheck, RedError, YellowCheck } from '@/assets/Modal';

enum IMAGE_LIST {
    BlueSuccess = 'BlueSuccess',
    BlueCheck = 'BlueCheck',
    RedError = 'RedError',
    YellowCheck = 'YellowCheck'
}

const ModalContent: FC<ModalContentProps> = ({ children, title, contour, errorSentence, normal, explain, color, icon }) => {
    return (
        <S.ModalContentWrapper>
            <S.Title>{title}</S.Title>
            <S.SubTitle
                contour={contour}
                error={errorSentence}
                color={color}
            >
                {errorSentence && errorSentence}
                {normal && normal}
            </S.SubTitle>
            {icon && <S.IconImage src={BlueSuccess} />}
            {explain && 
            <S.ExplainSentence>
                {explain}
            </S.ExplainSentence>}
            {children}
        </S.ModalContentWrapper>
    );
}

export default ModalContent;