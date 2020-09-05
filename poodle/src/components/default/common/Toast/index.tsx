import React, { FC } from 'react';
import {
  ToastBody,
  ToastDiv,
  FailureToastImg,
  SuccessToastImg,
} from '@/styles/common/Toast';
import { ToastType } from '@/container/common/ToastContainer';

interface Props {
  title: string;
  description: string;
  type: ToastType;
  id: String;
  isSuccess: boolean;
}

const Toast: FC<Props> = ({ title, description, isSuccess }) => {
  return (
    <ToastDiv isAble={true}>
      {isSuccess ? (
        <SuccessToastImg>
          <div />
        </SuccessToastImg>
      ) : (
        <FailureToastImg>
          <div />
        </FailureToastImg>
      )}
      <ToastBody isSuccess={isSuccess}>
        <p>{title}</p>
        <span>{description}</span>
      </ToastBody>
    </ToastDiv>
  );
};

export default Toast;
