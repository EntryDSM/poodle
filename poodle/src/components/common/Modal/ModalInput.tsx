import React, { FC, useCallback } from 'react';
import * as S from '@/styles/common/Modal';

type ModalInputProps = {
    type: string,
    textCenter: boolean,
    value: any,
    setValue: any,
    id: string,
    submit?: () => void,
}

const typeValue: any = {
    'email': '이메일',
    'password': '비밀번호',
    'verification': '인증번호'
};

const ModalInput: FC<ModalInputProps> = ({ type, value, setValue, textCenter, id, submit }) => {
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [id]: e.target.value
        });
    }, [value, id]);
    const onKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && submit) submit();
    }, [submit]);
    return (
        <S.ModalInputWrapper>
            <S.ModalInputBox>
                <S.StyledInput
                    type={type}
                    value={value[id]}
                    placeholder={typeValue[type]}
                    onChange={onChange}
                    textCenter={textCenter}
                    onKeyPress={onKeyPress}
                />
            </S.ModalInputBox>
        </S.ModalInputWrapper>
    );
}

export default ModalInput;