import React, { FC } from 'react';
import { 
    InfoElementName,
    InfoPictureElement,
} from '../../../styles/Info';

interface Props {
    title?: string,
}

const DefaultRowWithPicture: FC<Props> = ({
    title,
    children,
}) => {
    return (
        <InfoPictureElement>
            <InfoElementName>{title}</InfoElementName>
            {children}
        </InfoPictureElement>
    )
}

export default DefaultRowWithPicture;