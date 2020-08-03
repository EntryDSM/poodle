import React, { FC } from 'react';
import { ToastBody, ToastDiv, ToastImg } from '@/styles/common/Toast';
import { ToastType } from '@/container/common/ToastContainer';

interface Props {
  title: string;
  description: string;
  type: ToastType;
  id: String;
}

const Toast: FC<Props> = ({ title, description, type, id }) => {
  return (
    <ToastDiv isAble={true}>
      <ToastImg>
        <div />
      </ToastImg>
      <ToastBody>
        <p>{title}</p>
        <span>{description}</span>
      </ToastBody>
    </ToastDiv>
  );
};

export default Toast;
