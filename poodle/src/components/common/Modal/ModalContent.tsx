import React from 'react';
import * as S from '@/styles/common/Modal';
import { ModalContentProps } from './';
import { BlueSuccess, BlueCheck, RedError, YellowCheck } from '@/assets/common/Modal';

const imageList: any = {
    'BlueSuccess': BlueSuccess,
    'BlueCheck': BlueCheck,
    'RedError': RedError,
    'YellowCheck': YellowCheck
}

function ModalContent({ children, title, contour, error, normal, explain, color, icon }: ModalContentProps) {
    return (
        <S.ModalContentWrapper>
            <S.Title>{title}</S.Title>
            <S.SubTitle
                contour={contour}
                error={error}
                color={color}
            >
                {normal && normal}
            </S.SubTitle>
            {icon && <S.IconImage src={imageList[icon]} />}
            {explain && 
            <S.ExplainSentence>
                {explain}
            </S.ExplainSentence>}
            {children}
        </S.ModalContentWrapper>
    );
}

export default ModalContent;