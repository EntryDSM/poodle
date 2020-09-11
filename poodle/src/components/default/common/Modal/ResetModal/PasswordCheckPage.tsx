import React, { FC, useState, useCallback } from 'react';
import {
  ModalContent,
  ModalInput,
  ModalButtonList,
  ModalContentProps,
} from '..';
import { ModalButtonListWrapper, ETCSentence } from '@/styles/common/Modal';
import ModalButton from '../ModalButton';
import { MAINCOLOR } from '@/lib/utils/style/color';
import { passwordRegExp } from '@/lib/RegExp';

type OneMorePasswordPageProps = {
  password: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  passwordCheck: string;
  setPasswordCheck: React.Dispatch<React.SetStateAction<string>>;
  resetPassword: (password: string) => void;
};

const PasswordCheckPage: FC<OneMorePasswordPageProps> = ({
  password,
  setPage,
  passwordCheck,
  setPasswordCheck,
  resetPassword,
}) => {
  const passwordCheckSubmit = useCallback(() => {
    if (!passwordCheck) return alert('빈칸은 입력할 수 없습니다.');
    if (password === passwordCheck && passwordRegExp.exec(passwordCheck))
      resetPassword(passwordCheck);
  }, [password, passwordCheck]);
  return (
    <>
      <ModalInput
        type='password'
        placeholder='비밀번호'
        textCenter={true}
        value={passwordCheck}
        setValue={setPasswordCheck}
        submit={passwordCheckSubmit}
        disabled={false}
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
          onClick={passwordCheckSubmit}
        />
      </ModalButtonListWrapper>
      <ETCSentence>
        영문(대소문자 구분), 숫자 포함 8자리 이상 특수기호 가능
      </ETCSentence>
    </>
  );
};

export default PasswordCheckPage;
