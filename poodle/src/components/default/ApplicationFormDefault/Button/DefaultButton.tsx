import React, { FC } from 'react';
import { ButtonDiv } from '@/styles/ApplicationFormDefault';

interface Props {
  children: React.ReactNode;
  onClick: Function;
}

const DefaultButton: FC<Props> = ({ children, onClick }) => {
  const buttonClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    onClick(true);
  };
  return <ButtonDiv onClick={buttonClickHandler}>{children}</ButtonDiv>;
};

export default DefaultButton;
