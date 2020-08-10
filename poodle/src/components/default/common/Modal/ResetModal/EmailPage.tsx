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
import { emailRegExp } from '@/lib/RegExp';

type EmailPageProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
const EmailPage: FC<EmailPageProps> = ({ setPage }) => {
  const [email, setEmail] = useState('');
  const emailSubmit = useCallback(() => {
    if (!email) alert('빈칸은 입력할 수 없습니다.');
    console.log('todo: 이메일 전송 api 연동');
  }, [email]);
  return (
    <>
      <ModalInput
        type='email'
        placeholder='이메일'
        textCenter={false}
        value={email}
        setValue={setEmail}
        submit={emailSubmit}
      />
      <ModalButtonListWrapper>
        <ModalButton
          color={MAINCOLOR}
          title='전송'
          size='middle'
          onClick={emailSubmit}
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

export default EmailPage;
