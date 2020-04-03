import React from 'react';
import * as S from '../../styles/Join';

type JoinInputProps = {
    maxSize?: boolean,
    middleSize?: boolean
}

function JoinInput({ maxSize, middleSize }: JoinInputProps) {
    return (
        <S.StyledJoinInput
            maxSize={maxSize}
            middleSize={middleSize}
        />
    );
}

export default JoinInput;

JoinInput.defaultProps = {
    maxSize: false,
    middleSize: false,
}