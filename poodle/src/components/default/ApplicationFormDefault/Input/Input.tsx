import React, { FC } from 'react';
import { DefaultInput } from '../../../../styles/ApplicationFormDefault';

interface Props {
    width: string,
    placeholder?: string,
    isCenter?: boolean,
    type?: string,
    valueChangeHandler: Function,
    isEmpty: boolean,
    value?: string,
}

const Input: FC<Props> = ({ 
    width, 
    placeholder, 
    isCenter, 
    type,
    valueChangeHandler,
    isEmpty
}) => {
    const inputChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        valueChangeHandler(value);
    }
    return (
        <DefaultInput 
            width={width} 
            isEmpty={isEmpty}
            placeholder={placeholder}
            isCenter={isCenter}
            type={type}
            onChange={inputChangeHandler}
            required
        />
    )
}

export default Input;