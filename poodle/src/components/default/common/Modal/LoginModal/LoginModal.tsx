import React, { useState, useCallback, FC, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as S from '@/styles/common/Modal';
import { RESETMODAL } from '@/core/redux/actions/Modal';
import { useRedirect } from '@/lib/utils/function';
import {
  ModalContent,
  ModalInput,
  ModalButtonList,
  ModalContentProps,
  openModal,
  clearModal,
} from '..';
import { emailRegExp } from '@/lib/RegExp';

type LoginModalProps = ModalContentProps & {
  onClick: (email: string, password: string) => void;
  isLogin: boolean;
  loginErrorReset: () => void;
};

const LoginModal: FC<LoginModalProps> = ({
  title,
  contour,
  errorSentence,
  color,
  onClick,
  isLogin,
  loginErrorReset,
}) => {
  const dispatch = useDispatch();
  const redirectToLink = useRedirect();
  const isRequesting = useRef(false);
  const openResetModal = useCallback(() => {
    openModal(RESETMODAL, dispatch);
  }, [dispatch]);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onSubmit = useCallback(() => {
    if (isRequesting.current) return;
    const loginInfoValue = [email, password];
    if (loginInfoValue.some(v => !v || v.indexOf(' ') !== -1)) {
      alert('빈칸은 입력할수 없습니다.');
    } else if (!emailRegExp.exec(email)) {
      alert('이메일 형식이 일치하지 않습니다.');
    } else {
      isRequesting.current = true;
      onClick(email, password);
      setTimeout(() => (isRequesting.current = false), 2000);
    }
  }, [email, password, isRequesting]);
  const goToJoin = useCallback(() => {
    redirectToLink('/join');
    clearModal(dispatch);
  }, []);
  useEffect(() => {
    if (isLogin) {
      clearModal(dispatch);
      dispatch(loginErrorReset());
    }
  }, [isLogin]);

  useEffect(() => {
    return () => {
      loginErrorReset();
    };
  }, []);
  return (
    <ModalContent
      title={title}
      contour={contour}
      errorSentence={errorSentence}
      color={color}
    >
      <ModalInput
        type='email'
        placeholder='이메일'
        textCenter={false}
        value={email}
        setValue={setEmail}
        disabled={false}
      />
      <ModalInput
        type='password'
        placeholder='비밀번호'
        textCenter={false}
        value={password}
        setValue={setPassword}
        submit={onSubmit}
        disabled={false}
      />
      <ModalButtonList
        color={color}
        buttonList={[
          {
            id: 1,
            title,
            size: 'max',
            onClick: onSubmit,
          },
        ]}
      />
      <S.ETCSentence onClick={goToJoin} style={{ cursor: 'pointer' }}>
        아직 계정이 없으신가요?
      </S.ETCSentence>
      <S.ETCSentence onClick={openResetModal} style={{ cursor: 'pointer' }}>
        비밀번호 재설정
      </S.ETCSentence>
    </ModalContent>
  );
};

export default LoginModal;
