import React, { FC } from 'react';
import { InfoElement, InfoElementName } from '@/styles/Info';
import { RequireSign } from '@/styles/ApplicationFormDefault';

interface Props {
  title?: string;
  isNonRequire?: boolean;
}

const DefaultRow: FC<Props> = ({ title, children, isNonRequire }) => (
  <InfoElement>
    <InfoElementName>{title}</InfoElementName>
    {isNonRequire ? '' : <RequireSign>*</RequireSign>}
    {children}
  </InfoElement>
);

export default DefaultRow;
