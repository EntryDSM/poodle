import React, { FC, useState } from 'react';
import { ModalContent } from '..';

enum ExplainSentence {
  '본인인증 시 인증했던 이메일 주소를 입력해 주세요' = 1,
}

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
