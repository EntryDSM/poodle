import React, { FC } from 'react';
import * as S from '@/styles/common/Modal';
import { RED } from '@/lib/utils/style/color';
import { ModalContent, ModalButtonList } from '..';

const WarningModal: FC<{}> = () => (
  <ModalContent title='주의사항' contour color={RED}>
    <S.WarningWrapper>
      미리보기 단계에서는 <S.WarningFocus>내신 성적</S.WarningFocus>이 표기되지
      않습니다.
      {'\r\n'}
      (출력 시에는 정상적으로 표기됩니다.)
      {'\r\n'}
      {'\r\n'}
      수험번호는 표기되지 않으며 <S.WarningFocus>접수 번호</S.WarningFocus>를
      {'\r\n'}
      확인하시기 바랍니다.
      {'\r\n'}
      {'\r\n'}
      <S.WarningFocus>서명, 날짜, 체크항목</S.WarningFocus> 등은 수기로 작성해
      주시기 바랍니다.
    </S.WarningWrapper>
    <ModalButtonList
      buttonList={[
        {
          id: 1,
          title: '확인',
          size: 'max',
          onClick: () => {},
        },
      ]}
      color={RED}
    />
  </ModalContent>
);

export default WarningModal;
