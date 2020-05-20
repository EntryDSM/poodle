import React from 'react';
import { RadioDiv } from '../../../../styles/ApplicationFormDefault';
import useRadioGroupContext from './RadioGroup';

interface Props<T> {
    value: T,
    ableChange: Function,
    children?: React.ReactNode,
    options: { LABEL: string, VALUE: string }[],
    // state를 부모 component에 두기는 싫고, 그렇다고 context에 넣을수도 없는 상황이라
    // 1시간의 고뇌끝에 넣은 Props입니다.. merge시 주석 삭제하겠습니다.
}

interface ContextValue<T> {
    onChange: (value: T) => void,
    name: string,
    savedValue: T,
}

function DropdownRadio<T>({ 
    children, 
    value,
    ableChange,
    options,
}: Props<T>){
    const context = useRadioGroupContext<T>();
    const { 
        onChange,
        name,
        savedValue,
    }:ContextValue<T> = context;
    const isChecked = (valueList:{ LABEL: string, VALUE: string }[], savedValue:T) => {
        let flag = false;
        valueList.map((value)=> {
            const convertedValue = savedValue as unknown as string;
            if(value.VALUE === convertedValue){
                flag = true;
            }
        })
        return flag;
    }
    const radioChangeHandler = (
        event:React.ChangeEvent<HTMLInputElement>
        ) => {
            const isAble = event.target.checked;
            onChange(value);
            ableChange(isAble);
        }
    return (
        <RadioDiv className="checkboxRadio">
            <input
                type="radio" 
                name={name}
                onChange={radioChangeHandler}
                checked={isChecked(options, savedValue)}
            />
            <div/>
            {children}
        </RadioDiv>
    )
}

export default DropdownRadio;