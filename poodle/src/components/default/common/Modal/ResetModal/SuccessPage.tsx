import React, { FC } from 'react';
import { ModalButtonListWrapper } from '@/styles/common/Modal';
import ModalButton from '../ModalButton';
import { MAINCOLOR } from '@/lib/utils/style/color';
import { useDispatch } from 'react-redux';
import { modalOff, RESETMODAL } from '@/core/redux/actions/Modal';

const SuccessPage: FC = () => {
  const dispatch = useDispatch();
  return (
    <ModalButtonListWrapper>
      <ModalButton
        color={MAINCOLOR}
        title='확인'
        size='max'
        onClick={() => dispatch(modalOff(RESETMODAL))}
      />
    </ModalButtonListWrapper>
  );
};

export default SuccessPage;
