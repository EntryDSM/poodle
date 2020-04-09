import React, { FC } from 'react';
import { RadioDiv } from '../../../../styles/ApplicationFormDefault';

interface Props {
    radioName: string,
    valueChangeHandler: Function,
    value: string,
    ableChange: Function,
}

const DropdownRadio:FC<Props> = ({ 
    children, 
    radioName,
    valueChangeHandler, 
    value,
    ableChange,
}) => {
    const radioChangeHandler = (
        event:React.ChangeEvent<HTMLInputElement>
    ) => {
        const isAble = event.target.checked;
        ableChange(isAble);
        valueChangeHandler(value);
    }
    return (
        <RadioDiv className="checkboxRadio">
            <input 
                name={radioName} 
                type="radio" 
                onChange={radioChangeHandler}
            />
            <div></div>
            {children}
        </RadioDiv>
    )
}

export default DropdownRadio;