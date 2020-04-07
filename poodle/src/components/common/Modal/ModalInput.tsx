import React from 'react';
import * as S from '@/styles/common/Modal';

type ModalInputProps = {
    type: string,
    textCenter?: boolean,
}

const typeValue: any = {
    'email': '이메일',
    'password': '비밀번호',
    'verification': '인증번호'
};

function ModalInput({ type, textCenter }: ModalInputProps) {
    return (
        <S.ModalInputWrapper>
            <S.ModalInputBox>
                <S.StyledInput type={type} placeholder={typeValue[type]} textCenter={textCenter} />
            </S.ModalInputBox>
        </S.ModalInputWrapper>
    );
}

export default ModalInput;