import React, { FC } from 'react';
import * as S from '@/styles/common/Modal';

export type ModalButtonProps = {
  color: string;
  title: string;
  size: string;
  onClick: () => void;
  enabled?: boolean;
};

const ModalButton: FC<ModalButtonProps> = ({
  color,
  title,
  size,
  onClick,
  enabled = true,
}) => (
  <S.StyledModalButton
    color={color}
    size={size}
    onClick={onClick}
    enabled={enabled}
  >
    {title}
  </S.StyledModalButton>
);

export default ModalButton;
