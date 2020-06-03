import React, { FC } from 'react';
import { 
    InfoElement, 
    InfoElementName,
} from '../../../styles/Info';

interface Props {
    title?: string,
}

const DefaultRow: FC<Props> = ({
    title,
    children,
}) => {
    return (
        <InfoElement>
            <InfoElementName>{title}</InfoElementName>
            {children}
        </InfoElement>
    )
}

export default DefaultRow;