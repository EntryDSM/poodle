import React, { FC, useState, useCallback } from 'react';
import {
  ModalContent,
  ModalInput,
  ModalButtonList,
  ModalContentProps,
} from '..';
import ModalButton from '../ModalButton';
import { MAINCOLOR } from '@/lib/utils/style/color';
import { ModalButtonListWrapper, ETCSentence } from '@/styles/common/Modal';

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
    setPage(prev => prev + 1);
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
        disabled={false}
      />
      <ModalButtonListWrapper>
        <ModalButton
          color={MAINCOLOR}
          title='다음'
          size='middle'
          onClick={() => setPage(prev => prev + 1)}
        />
      </ModalButtonListWrapper>
      <ETCSentence>
        영문(대소문자 구분), 숫자 포함 8자리 이상 특수기호 가능
      </ETCSentence>
    </>
  );
};

export default PasswordPage;
