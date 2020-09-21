import React, { useCallback, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/core/redux/reducer';
import { LOGIN, logout, reset } from '@/core/redux/actions/Header';
import ModalContainer from '../ModalContainer/ModalContainer';
import { Header } from '@/components/default/Header';
import { modalOn, LOGINMODAL } from '@/core/redux/actions/Modal';
import { useHistory } from 'react-router-dom';

const HeaderContainer: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLogin, loginLoading, token } = useSelector(
    ({ Header: header, Loading: loading }: RootState) => ({
      isLogin: header.isLogin,
      loginLoading: loading[LOGIN],
      token: header.token,
    }),
  );

  const loginHandler = useCallback(() => {
    dispatch(modalOn(LOGINMODAL));
  }, [dispatch]);

  const logoutHandler = useCallback(() => {
    history.push('/');
    dispatch(logout());
  }, [dispatch]);

  return (
    <Header
      isLogin={isLogin}
      token={token}
      loginLoading={loginLoading}
      login={loginHandler}
      logout={logoutHandler}
    />
  );
};

export default HeaderContainer;
