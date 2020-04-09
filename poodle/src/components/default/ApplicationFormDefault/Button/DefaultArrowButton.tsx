import React, { FC } from 'react';
import {
     DefaultArrowButtonDiv, 
    LeftArrow, 
    RightArrow 
} from '../../../../styles/ApplicationFormDefault';

interface Props {
    isLeft: boolean,
}

const DefaultArrowButton: FC<Props> = ({ 
    isLeft, 
    children 
}) => {
    return (
        <DefaultArrowButtonDiv>
            {
                isLeft ?
                    <div>
                        <LeftArrow/>
                       {children} 
                    </div>
                    :
                    <div>
                       {children}
                       <RightArrow/>
                    </div>
            }
        </DefaultArrowButtonDiv>
    )
}

export default DefaultArrowButton;