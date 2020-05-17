import React, { 
    FC,
    useContext,
} from 'react';
import { RadioDiv } from '../../../../styles/ApplicationFormDefault';
import RadioGroupContext from './RadioGroup';

interface Props {
    value: string,
    ableChange: Function,
}

const DropdownRadio:FC<Props> = ({ 
    children, 
    value,
    ableChange,
}) => {
    const { 
        onChange,
        name,
    } = useContext(RadioGroupContext);
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
            />
            <div></div>
            {children}
        </RadioDiv>
    )
}

export default DropdownRadio;