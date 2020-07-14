import React, { FC } from 'react';
import {
  DefaultArrowButtonDiv,
  LeftArrow,
  RightArrow,
} from '../../../../styles/ApplicationFormDefault';

interface Props {
  isLeft: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const DefaultArrowButton: FC<Props> = ({ isLeft, children, onClick }) => (
  <DefaultArrowButtonDiv onClick={onClick}>
    {isLeft ? (
      <div>
        <LeftArrow />
        {children}
      </div>
    ) : (
      <div>
        {children}
        <RightArrow />
      </div>
    )}
  </DefaultArrowButtonDiv>
);

export default DefaultArrowButton;
