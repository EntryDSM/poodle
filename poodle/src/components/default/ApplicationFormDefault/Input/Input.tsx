import React, { FC } from 'react';
import { DefaultInput } from '../../../../styles/ApplicationFormDefault';

interface Props {
    width: string,
    placeholder?: string,
    isCenter?: boolean,
    type?: string
}

const Input: FC<Props> = ({ 
    width, 
    placeholder, 
    isCenter, 
    type,
}) => {
    return (
        <DefaultInput 
            width={width} 
            isEmpty={false}
            placeholder={placeholder}
            isCenter={isCenter}
            type={type}
            required
        />
    )
}

export default Input;