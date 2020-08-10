import React, { FC, useState, useCallback } from 'react';
import {
  ModalContent,
  ModalInput,
  ModalButtonList,
  ModalContentProps,
} from '..';
import { ModalButtonListWrapper } from '@/styles/common/Modal';
import { MAINCOLOR } from '@/lib/utils/style/color';
import ModalButton from '../ModalButton';

type VerifyCodePageProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const VerifyCodePage: FC<VerifyCodePageProps> = ({ setPage }) => {
  const [code, setCode] = useState<string>('');
  const codeSubmit = useCallback(() => {
    if (!code) alert('빈칸은 입력할 수 없습니다.');
    console.log('todo: 인증 코드 안증 api 연동');
  }, [code]);
  return (
    <>
      <ModalInput
        type='text'
        placeholder='인증코드'
        textCenter={true}
        value={code}
        setValue={setCode}
        submit={codeSubmit}
      />
      <ModalButtonListWrapper>
        <ModalButton
          color={MAINCOLOR}
          title='재전송'
          size='min'
          onClick={codeSubmit}
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
          onClick={() => setPage(prev => prev + 1)}
        />
      </ModalButtonListWrapper>
    </>
  );
};

export default VerifyCodePage;
