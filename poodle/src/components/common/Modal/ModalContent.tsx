import React, { useCallback, useState } from 'react';
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
    const [a, b] = React.useState('');
    const [effect, setEffect] = useState(false);
    const onClick = useCallback(() => {
        setEffect(true)
        setTimeout(() => {
            console.log('delay 1...', a);
            setEffect(false)
            a ? b('') : b('이메일 또는 비밀번호가 잘못되었습니다');
        }, 1000);
    }, [a, effect]);
    const onClick2 = useCallback(() => {
        onClick();
        setTimeout(() => {
            setEffect(true);
        }, 2000);
        setTimeout(() => {
            setEffect(false)
            b('');
        }, 3000);
    }, [a, effect]);
    return (
        <S.ModalContentWrapper>
            <S.Title>{title}</S.Title>
            <S.SubTitle
                contour={contour}
                error={a}
                color={color}
                effect={effect}
                // normal={`${a ? '' : 'fsf'}`}
            >
                {a && a}
                {normal && normal}
            </S.SubTitle>
            {icon && <S.IconImage src={imageList[icon]} />}
            {explain && 
            <S.ExplainSentence>
                {explain}
            </S.ExplainSentence>}
            {children}
            {/* <button onClick={onClick2}>바꾸기</button> */}
        </S.ModalContentWrapper>
    );
}

ModalContent.defaultProps = {
    contour: false,
    normal: '',
    error: '',
};

export default ModalContent;