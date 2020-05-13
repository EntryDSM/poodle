import React, { 
    FC,
    useContext,
} from 'react';
import { RadioDiv } from '../../../../styles/ApplicationFormDefault';
import RadioGroupContext from './RadioGroup';

interface Props {
    children?: string,
    value: string,
}

const Radio:FC<Props> = ({ 
    children, 
    value,
}) => {
    const { 
        onChange,
        name,
    } = useContext(RadioGroupContext);
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