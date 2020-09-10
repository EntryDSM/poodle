import React, { FC, useState } from 'react';
import { ModalContent } from '..';

type ResetModalProps = {
  title: string;
  contour: boolean;
  color: string;
  page: number;
  explainSentence: string;
  errorSentence: string;
  normal?: string;
  icon?: 'BlueSuccess' | 'BlueCheck' | 'RedError' | 'YellowCheck';
  children?: React.ReactNode;
};

const RestModal: FC<ResetModalProps> = ({
  title,
  contour,
  color,
  explainSentence,
  errorSentence,
  normal,
  children,
  icon,
}) => {
  return (
    <ModalContent
      title={title}
      contour={contour}
      errorSentence={errorSentence}
      color={color}
      explain={explainSentence}
      normal={normal}
      icon={icon}
    >
      {children}
    </ModalContent>
  );
};

export default RestModal;
