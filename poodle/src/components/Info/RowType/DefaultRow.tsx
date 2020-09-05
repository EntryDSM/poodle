import React, { FC } from 'react';
import { InfoElement, InfoElementName } from '@/styles/Info';

interface Props {
  title?: string;
}

const DefaultRow: FC<Props> = ({ title, children }) => (
  <InfoElement>
    <InfoElementName>{title}</InfoElementName>
    {children}
  </InfoElement>
);

export default DefaultRow;
