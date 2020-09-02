import React, { FC, useEffect, useCallback, useState } from 'react';
import LoginModal from '@/components/default/common/Modal/LoginModal/LoginModal';
import { MAINCOLOR } from '@/lib/utils/style/color';
import { login, loginErrorReset } from '@/core/redux/actions/Header';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/core/redux/reducer';
import { useReGenerateTokenAndDoCallback } from '@/lib/utils/function';

enum ErrorCode {
  '아이디 또는 비밀번호의 형식이 일치하지 않습니다.' = 400,
  '일치하는 계정을 찾을수 없습니다.' = 404,
}
const LoginModalContainer: FC = () => {
  const dispatch = useDispatch();
  const { loginError, isLogin } = useSelector(
    ({ Header: header }: RootState) => ({
      loginError: header.error,
      isLogin: header.isLogin,
    }),
  );
  const { status } = loginError;

  const submitLogin = useCallback(
    (email: string, password: string) => {
      dispatch(login({ email, password }));
    },
    [loginError],
  );

  const loginErrorResetHandler = () => dispatch(loginErrorReset());

  useEffect(() => {
    if (status === 500) {
      alert('네트워크 에러');
    }
  }, [loginError]);

  return (
    <LoginModal
      title='로그인'
      contour={true}
      errorSentence={status ? ErrorCode[status] : ''}
      color={MAINCOLOR}
      onClick={submitLogin}
      isLogin={isLogin}
      loginErrorReset={loginErrorResetHandler}
    />
  );
};

export default LoginModalContainer;
