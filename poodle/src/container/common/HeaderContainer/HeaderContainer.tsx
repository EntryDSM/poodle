import React, { useCallback, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/core/redux/reducer';
import { LOGIN, logout } from '@/core/redux/actions/header';

import { Header } from '@/components/default/Header';
import ModalContainer from '../ModalContainer/ModalContainer';
import { modalOn, modalOff, LOGINMODAL } from '@/core/redux/actions/modal';

const HeaderContainer: FC<{}> = () => {
  const { isLogin, loginLoading, loginError, user } = useSelector(
    ({ header, loading }: RootState) => ({
      isLogin: header.isLogin,
      loginLoading: loading[LOGIN],
      loginError: header.error,
      user: header.user
    })
  );
  const dispatch = useDispatch();

  const loginHandler = useCallback(() => {
    dispatch(modalOn(LOGINMODAL));
  }, [dispatch]);

  const logoutHandler = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <>
      <ModalContainer />
      <Header
        isLogin={isLogin}
        user={user}
        loginLoading={loginLoading}
        login={loginHandler}
        logout={logoutHandler}
      />
    </>
  );
};

export default HeaderContainer;
