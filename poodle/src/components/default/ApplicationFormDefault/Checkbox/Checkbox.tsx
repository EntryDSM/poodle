import React, { 
    FC, 
    useCallback 
} from 'react';
import { CheckboxDiv } from '../../../../styles/ApplicationFormDefault';

interface Props {
    children?: string
    onChange: (value: boolean) => void,
}

const Checkbox: FC<Props> = ({ 
        children, 
        onChange,
    }) => {
    const checkboxClickHandler = useCallback((
        event:React.ChangeEvent<HTMLInputElement>
    ) => {
        const checkboxValue:boolean = event.target.checked;
        onChange(checkboxValue);
    },[onChange])
    return (
        <CheckboxDiv>
            <input 
                type="checkbox" 
                onChange={checkboxClickHandler}
            />
            <div/>
            <p>{children}</p>
        </CheckboxDiv>
    )
}

export default Checkbox;