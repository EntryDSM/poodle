import React, { FC } from 'react';
import * as S from '@/styles/common/Modal';
import ModalButton from './ModalButton';

export type ButtonType = {
  id: number;
  title: string;
  size: string;
  onClick: () => void;
};

export type ModalButtonListProps = {
  buttonList: Array<ButtonType>;
  color: string;
};

const ModalButtonList: FC<ModalButtonListProps> = ({ buttonList, color }) => (
  <S.ModalButtonListWrapper>
    {buttonList.map(button => (
      <ModalButton
        key={button.id}
        color={color}
        title={button.title}
        size={button.size}
        onClick={button.onClick}
      />
    ))}
  </S.ModalButtonListWrapper>
);

export default ModalButtonList;
