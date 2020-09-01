import React, { FC, useCallback, useEffect } from 'react';
import * as S from '@/styles/common/Header';
import { useRedirect } from '@/lib/utils/function';

export type HeaderProps = {
  isLogin: boolean;
  loginLoading: boolean;
  login: () => void;
  logout: () => void;
  user: {
    accessToken: string;
    refreshToken: string;
  };
};

const Header: FC<HeaderProps> = ({
  isLogin,
  user,
  loginLoading,
  login,
  logout,
}: HeaderProps) => {
  const redirectToLink = useRedirect();
  const goToHome = useCallback(() => {
    redirectToLink('/');
  }, []);
  const goToMypage = useCallback(() => {
    redirectToLink('/mypage');
  }, []);

  useEffect(() => {
    if (user.accessToken && user.refreshToken) {
      localStorage.setItem('accessToken', user.accessToken);
      localStorage.setItem('refreshToken', user.refreshToken);
      return;
    }
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }, [user]);
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <S.LogoWrapper>
          <S.LogoImage onClick={goToHome} />
        </S.LogoWrapper>
        <S.GNBWrapper>
          {loginLoading && <p>로그인중...</p>}
          {!loginLoading && isLogin && user.accessToken && (
            <>
              <S.GNB onClick={goToMypage}>마이페이지</S.GNB>
              <S.GNB onClick={logout}>로그아웃</S.GNB>
            </>
          )}
          {!loginLoading && !isLogin && <S.GNB onClick={login}>로그인</S.GNB>}
        </S.GNBWrapper>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
};

export default Header;
