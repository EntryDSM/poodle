import React, { FC } from 'react';
import { YELLOW } from '@/lib/utils/style/color';
import { ModalContent, ModalButtonList } from '..';

const YellowCheckModal: FC<{}> = () => (
  <ModalContent
    title='접근 오류'
    contour
    color='#ffc033'
    explain='기간을 다시 한번 확인해 주세요'
    icon='YellowCheck'
  >
    <ModalButtonList
      buttonList={[
        {
          id: 1,
          title: '확인',
          size: 'max',
          onClick: () => {},
        },
      ]}
      color={YELLOW}
    />
  </ModalContent>
);

export default YellowCheckModal;
