import React, { FC } from 'react';
import { 
    TypeElement, 
    TypeElementName 
} from '../../../styles/ChoiceType';

interface Props {
    children: React.ReactNode,
    title: string,
}

const DefaultRow: FC<Props> = ({ 
    children, 
    title 
}) => {
    return (
        <TypeElement>
            <TypeElementName>{title}</TypeElementName>
            {children}
        </TypeElement>
    )
}

export default DefaultRow;