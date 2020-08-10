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
import { loginErrorReset } from '@/core/redux/actions/Header';

type LoginModalProps = ModalContentProps & {
  onClick: (email: string, password: string) => void;
  user: {
    accessToken: string;
  };
  loginErrorReset: () => void;
};

const LoginModal: FC<LoginModalProps> = ({
  title,
  contour,
  errorSentence,
  color,
  onClick,
  user,
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
    } else {
      isRequesting.current = true;
      onClick(email, password);
      setTimeout(() => (isRequesting.current = false), [2000]);
    }
  }, [email, password, isRequesting]);
  const goToJoin = useCallback(() => {
    redirectToLink('/join');
    clearModal(dispatch);
  }, []);
  useEffect(() => {
    if (user.accessToken) {
      clearModal(dispatch);
      dispatch(loginErrorReset());
    }
  }, [user]);
  useEffect(() => {
    return () => loginErrorReset();
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
      />
      <ModalInput
        type='password'
        placeholder='비밀번호'
        textCenter={false}
        value={password}
        setValue={setPassword}
        submit={onSubmit}
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
      <S.ETCSentence onClick={goToJoin}>아직 계정이 없으신가요?</S.ETCSentence>
      <S.ETCSentence onClick={openResetModal}>비밀번호 재설정</S.ETCSentence>
    </ModalContent>
  );
};

export default LoginModal;
