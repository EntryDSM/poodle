import React, { FC } from 'react';
import { RadioDiv } from '../../../../styles/ApplicationFormDefault';
import useRadioGroupContext from './RadioGroup';

interface Props {
    value: string,
    dropdownAbleChange: Function,
    children?: React.ReactNode,
    options: { LABEL: string, VALUE: string }[],
}

interface ContextValue {
    onChange: (value: string) => void,
    name: string,
    savedValue: string,
}

const isChecked = (
    valueList:{ LABEL: string, VALUE: string }[], 
    savedValue: string
) => {
    const convertedValue = savedValue as unknown as string;
    return valueList.some((value)=> value.VALUE === convertedValue);
}

const DropdownRadio:FC<Props> = ({ 
    children, 
    value,
    dropdownAbleChange,
    options,
}) => {
    const context = useRadioGroupContext<string>();
    const { 
        onChange,
        name,
        savedValue,
    }:ContextValue = context;
    const radioChangeHandler = (
        event:React.ChangeEvent<HTMLInputElement>
        ) => {
            const isAble = event.target.checked;
            onChange(value);
            dropdownAbleChange(isAble);
        }
    return (
        <RadioDiv className="checkboxRadio">
            <input
                type="radio" 
                name={name}
                onChange={radioChangeHandler}
                checked={isChecked(options, savedValue)}
            />
            <div className="surfaceRadio"/>
            {children}
        </RadioDiv>
    )
}

export default DropdownRadio;