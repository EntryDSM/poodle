import React, { FC, useEffect, useCallback } from 'react';
import LoginModal from '@/components/default/common/Modal/LoginModal/LoginModal';
import { MAINCOLOR } from '@/lib/utils/style/color';
import { login, loginErrorReset } from '@/core/redux/actions/Header';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/core/redux/reducer';

enum ErrorCode {
  '요청에 오류가 있습니다.' = 400,
  '일치하는 계정을 찾을수 없습니다.' = 404,
}
const LoginModalContainer: FC<{}> = () => {
  const dispatch = useDispatch();
  const { user, loginError } = useSelector(({ Header: header }: RootState) => ({
    user: header.user,
    loginError: header.error,
  }));
  const {
    response,
    response: { status },
  } = loginError;
  const submitLogin = useCallback(
    (email: string, password: string) => {
      dispatch(login({ email, password }));
    },
    [loginError],
  );
  const loginErrorResetHandler = () => dispatch(loginErrorReset());

  if (!response) {
    return <h1 style={{ textAlign: 'center' }}>Error</h1>;
  }

  return (
    <LoginModal
      title='로그인'
      contour={true}
      errorSentence={status ? ErrorCode[status] : ''}
      color={MAINCOLOR}
      onClick={submitLogin}
      user={user}
      loginErrorReset={loginErrorResetHandler}
    />
  );
};

export default LoginModalContainer;
