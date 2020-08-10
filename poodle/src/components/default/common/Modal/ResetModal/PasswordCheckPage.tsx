import React, { FC, useState, useCallback } from 'react';
import {
  ModalContent,
  ModalInput,
  ModalButtonList,
  ModalContentProps,
} from '..';
import { ModalButtonListWrapper } from '@/styles/common/Modal';
import ModalButton from '../ModalButton';
import { MAINCOLOR } from '@/lib/utils/style/color';

type OneMorePasswordPageProps = {
  password: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const PasswordCheckPage: FC<OneMorePasswordPageProps> = ({
  password,
  setPage,
}) => {
  const [passwordCheck, setPasswordCheck] = useState('');
  const passwordCheckSubmit = useCallback(() => {
    if (!passwordCheck) return alert('빈칸은 입력할 수 없습니다.');
    if (password !== passwordCheck)
      return alert('비밀번호가 일치하지 않습니다.');
    console.log('todo: 인증 코드 안증 api 연동');
    setPage(prev => prev + 1);
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
    </>
  );
};

export default PasswordCheckPage;
