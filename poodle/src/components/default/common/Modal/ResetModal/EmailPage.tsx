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
import ErrorType from '@/lib/utils/type';

type EmailPageProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  sendEmail: (email: string) => void;
  sendEmailValue: {
    success: boolean;
    error: ErrorType;
    loading: boolean;
  };
};
const EmailPage: FC<EmailPageProps> = ({
  setPage,
  email,
  setEmail,
  sendEmail,
  sendEmailValue,
}) => {
  const { success } = sendEmailValue;
  const emailSubmit = useCallback(() => {
    if (!email) return alert('빈칸은 입력할 수 없습니다.');
    if (!emailRegExp.exec(email)) return alert('잘못된 형식의 이메일입니다.');
    sendEmail(email);
  }, [email]);
  const goNextPage = useCallback(() => {
    if (!success) return alert('이메일 전송을 해야 합니다.');
    setPage(prev => prev + 1);
  }, [sendEmailValue.success]);
  return (
    <>
      <ModalInput
        type='email'
        placeholder='이메일'
        textCenter={false}
        value={email}
        setValue={setEmail}
        submit={emailSubmit}
        disabled={success ? true : false}
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
          onClick={goNextPage}
        />
      </ModalButtonListWrapper>
    </>
  );
};

export default EmailPage;
