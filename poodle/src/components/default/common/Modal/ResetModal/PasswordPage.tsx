import React, { FC, useState, useCallback } from 'react';
import {
  ModalContent,
  ModalInput,
  ModalButtonList,
  ModalContentProps,
} from '..';
import ModalButton from '../ModalButton';
import { MAINCOLOR } from '@/lib/utils/style/color';
import { ModalButtonListWrapper } from '@/styles/common/Modal';

type PasswordPageProps = {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const PasswordPage: FC<PasswordPageProps> = ({
  password,
  setPassword,
  setPage,
}) => {
  const passwordSubmit = useCallback(() => {
    if (!password) alert('빈칸은 입력할 수 없습니다.');
    console.log('todo: 비밀번호');
  }, [password]);
  return (
    <>
      <ModalInput
        type='password'
        placeholder='비밀번호'
        textCenter={true}
        value={password}
        setValue={setPassword}
        submit={passwordSubmit}
      />
      <ModalButtonListWrapper>
        <ModalButton
          color={MAINCOLOR}
          title='이전'
          size='middle'
          onClick={() => setPage(prev => prev - 1)}
        />
        <ModalButton
          color={MAINCOLOR}
          title='다음'
          size='middle'
          onClick={() => setPage(prev => prev + 1)}
        />
      </ModalButtonListWrapper>
    </>
  );
};

export default PasswordPage;
