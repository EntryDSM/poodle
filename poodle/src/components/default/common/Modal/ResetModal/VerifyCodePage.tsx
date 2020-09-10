import React, { FC, useState, useCallback } from 'react';
import {
  ModalContent,
  ModalInput,
  ModalButtonList,
  ModalContentProps,
} from '..';
import { ModalButtonListWrapper, ETCSentence } from '@/styles/common/Modal';
import { MAINCOLOR } from '@/lib/utils/style/color';
import ModalButton from '../ModalButton';
import ErrorType from '@/lib/utils/type';

type VerifyCodePageProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  email: string;
  sendEmail: (email: string) => void;
  verifyCode: (data: { email: string; auth_code: string }) => void;
  verifyCodeValue: {
    success: boolean;
    error: ErrorType;
    loading: boolean;
  };
};

const VerifyCodePage: FC<VerifyCodePageProps> = ({
  setPage,
  email,
  sendEmail,
  verifyCode,
  verifyCodeValue,
}) => {
  const { success } = verifyCodeValue;
  const [code, setCode] = useState<string>('');
  const reSendEmail = useCallback(() => {
    sendEmail(email);
  }, [email]);
  const codeSubmit = useCallback(() => {
    if (!code) return alert('빈칸은 입력할 수 없습니다.');
    if (code.length !== 6) return alert('코드는 6자리입니다.');
    verifyCode({ email, auth_code: code });
  }, [email, code]);
  const goNextPage = useCallback(() => {
    if (!success) return alert('이메일 인증을 해야 합니다.');
    setPage(prev => prev + 1);
  }, [verifyCodeValue.success]);
  return (
    <>
      <ModalInput
        type='text'
        placeholder='인증코드'
        textCenter={true}
        value={code}
        setValue={setCode}
        submit={codeSubmit}
        disabled={verifyCodeValue.success ? true : false}
        maxLength={6}
      />
      <ModalButtonListWrapper>
        <ModalButton
          color={MAINCOLOR}
          title='재전송'
          size='min'
          onClick={reSendEmail}
        />
        <ModalButton
          color={MAINCOLOR}
          title='인증'
          size='min'
          onClick={codeSubmit}
        />
        <ModalButton
          color={MAINCOLOR}
          title='다음'
          size='min'
          onClick={goNextPage}
        />
      </ModalButtonListWrapper>
      <ETCSentence>
        혹시 메일이 오지 않았다면 메일주소를 다시 확인하고
      </ETCSentence>
      <ETCSentence>스팸 메일함도 확인해주세요.</ETCSentence>
    </>
  );
};

export default VerifyCodePage;
