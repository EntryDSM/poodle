import React, { FC } from 'react';
import { InfoElementName, InfoPictureElement } from '@/styles/Info';
import { RequireSign } from '@/styles/ApplicationFormDefault';

interface Props {
  title?: string;
  isNonRequire?: boolean;
}

const DefaultRowWithPicture: FC<Props> = ({
  title,
  children,
  isNonRequire,
}) => (
  <InfoPictureElement>
    <InfoElementName>{title}</InfoElementName>
    {isNonRequire ? '' : <RequireSign>*</RequireSign>}
    {children}
  </InfoPictureElement>
);

export default DefaultRowWithPicture;
