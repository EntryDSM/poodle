import React, { FC } from 'react';
import { RadioDiv } from '../../../../styles/ApplicationFormDefault';

interface Props {
    children?: string,
    radioName: string,
    valueChangeHandler: Function,
    value: string
}

const Radio:FC<Props> = ({ 
    children, 
    radioName, 
    valueChangeHandler, 
    value 
}) => {
    const radioChangeHandler = (
        event:React.ChangeEvent<HTMLInputElement>
    ) => {
        valueChangeHandler(value);
    }
    return (
        <RadioDiv>
            <input name={radioName} type="radio" onChange={radioChangeHandler}/>
            <div></div>
            {children}
        </RadioDiv>
    )
}

export default Radio;