import React, { FC } from 'react';
import { RED } from '@/lib/utils/style/color';
import { ModalContent, ModalButtonList } from '..';

interface Props {
  onClick: () => void;
}

const RedErrorModal: FC<Props> = ({ onClick }) => (
  <ModalContent
    title='파일 오류'
    contour
    color={RED}
    explain='파일 형식이 올바른지 다시 한번 확인해 주세요'
    icon='RedError'
  >
    <ModalButtonList
      buttonList={[
        {
          id: 1,
          title: '확인',
          size: 'max',
          onClick: onClick,
        },
      ]}
      color={RED}
    />
  </ModalContent>
);

export default RedErrorModal;
