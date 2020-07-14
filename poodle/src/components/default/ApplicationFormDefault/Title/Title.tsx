import React, { FC } from 'react';
import { TitleDiv } from '../../../../styles/ApplicationFormDefault';

interface Props {
  children: string;
  margin: string;
}

const Title: FC<Props> = ({ children, margin }) => (
  <TitleDiv margin={margin}>
    <p>2021 입학원서 작성</p>
    <h1>{children}</h1>
  </TitleDiv>
);

export default Title;
