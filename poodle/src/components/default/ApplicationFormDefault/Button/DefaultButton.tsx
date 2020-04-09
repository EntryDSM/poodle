import React, { FC } from 'react';
import { ButtonDiv } from '../../../../styles/ApplicationFormDefault';

const DefaultButton: FC = ({ 
    children 
}) => {
    return (
        <ButtonDiv>
            {children}
        </ButtonDiv>
    )
}

export default DefaultButton;