import React, { useCallback, FC, useState } from 'react';
import * as S from '@/styles/common/Modal';
import { getButtonList } from '@/container/common/ModalContainer/ResetModalContainer/ResetModalConstance';
import {
  ModalContent,
  ModalInput,
  ModalButtonList,
  ModalContentProps,
} from '..';
import { ButtonType } from '../ModalButtonList';
import {
  EmailPage,
  VerifyCodePage,
  PasswordPage,
  PasswordCheckPage,
  SuccessPage,
} from './';

type PageType = {
  inputType: string;
  placeholder: string;
  key: string;
  errorSentence?: string;
  explain: string;
  moreExplain?: string;
  icon?: string;
};

type ResetModalProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageList: Array<PageType>;
  buttonList: Array<Array<ButtonType>>;
  title: string;
  contour: boolean;
  error: boolean;
  color: string;
};

const RestModal: FC<ResetModalProps> = ({
  page: page2,
  setPage: setPage2,
  pageList,
  buttonList,
  title,
  contour,
  error,
  color,
}) => {
  const [page, setPage] = useState<number>(1);
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const getResetValue = useCallback(
    (id: string): string => {
      switch (id) {
        case 'email':
          return email;
        case 'password':
          return password;
        case 'passwordCheck':
          return passwordCheck;
        case 'code':
          return code;
        default:
          return '';
      }
    },
    [email, code, password, passwordCheck],
  );
  const getSetResetValue = useCallback((id: string): React.Dispatch<
    React.SetStateAction<string>
  > => {
    switch (id) {
      case 'email':
        return setEmail;
      case 'password':
        return setPassword;
      case 'passwordCheck':
        return setPasswordCheck;
      case 'code':
        return setCode;
      default:
        return () => {};
    }
  }, []);
  const submit1 = useCallback(() => {
    buttonList[0][0].onClick();
  }, [page]);
  const next1 = useCallback(() => {
    buttonList[0][1].onClick();
  }, [page]);
  const reSubmit2 = useCallback(() => {
    buttonList[1][0].onClick();
  }, [page]);
  const verification2 = useCallback(() => {
    buttonList[1][1].onClick();
  }, [page]);
  const next2 = useCallback(() => {
    buttonList[1][2].onClick();
  }, [page]);
  const prev3 = useCallback(() => {
    buttonList[2][0].onClick();
  }, [page]);
  const next3 = useCallback(() => {
    buttonList[2][1].onClick();
  }, [page]);
  const prev4 = useCallback(() => {
    buttonList[3][0].onClick();
  }, [page]);
  const next4 = useCallback(() => {
    buttonList[3][1].onClick();
  }, [page]);
  const check5 = useCallback(() => {
    buttonList[4][0].onClick();
  }, [page]);
  const correctedButtonList = getButtonList(
    submit1,
    next1,
    reSubmit2,
    verification2,
    next2,
    prev3,
    next3,
    prev4,
    next4,
    check5,
  );
  if (page < 0 || page > 5) return null;
  return (
    <ModalContent
      title={title}
      contour={contour}
      errorSentence={error ? pageList[page].errorSentence : ''}
      color={color}
      explain={pageList[page - 1].explain}
      icon={
        pageList[page - 1].icon
          ? (pageList[page - 1].icon as
              | 'BlueSuccess'
              | 'BlueCheck'
              | 'RedError'
              | 'YellowCheck')
          : undefined
      }
    >
      {(page === 1 && <EmailPage setPage={setPage} />) ||
        (page === 2 && <VerifyCodePage setPage={setPage} />) ||
        (page === 3 && (
          <PasswordPage
            password={password}
            setPassword={setPassword}
            setPage={setPage}
          />
        )) ||
        (page === 4 && (
          <PasswordCheckPage password={password} setPage={setPage} />
        )) ||
        (page === 5 && <SuccessPage />)}

      {pageList[page - 1].moreExplain && (
        <S.MoreExplainSentence>
          {pageList[page].moreExplain}
        </S.MoreExplainSentence>
      )}
    </ModalContent>
  );
};

export default RestModal;
