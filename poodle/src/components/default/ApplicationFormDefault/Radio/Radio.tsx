import React, {
    useContext,
} from 'react';
import { RadioDiv } from '../../../../styles/ApplicationFormDefault';
import RadioGroupContext from './RadioGroup';

interface Props<T> {
    children?: string,
    value: T,
}

function Radio<T>({ 
    children, 
    value,
}: Props<T>){
    const { 
        onChange,
        name,
    } = useContext(RadioGroupContext);
    if (!onChange) {
        throw Error("radio must grouped by radio group");
    }
    const radioChangeHandler = (
        event:React.ChangeEvent<HTMLInputElement>
    ) => {
        onChange(value);
    }
    return (
        <RadioDiv>
            <input 
                type="radio" 
                onChange={radioChangeHandler}
                name={name}
            />
            <div/>
            {children}
        </RadioDiv>
    )
}

export default Radio;