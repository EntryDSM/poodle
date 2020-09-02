import React, { FC, useCallback, useEffect } from 'react';
import * as S from '@/styles/common/Header';
import { useRedirect } from '@/lib/utils/function';
import { Token } from '@/lib/api/auth';

export type HeaderProps = {
  isLogin: boolean;
  loginLoading: boolean;
  login: () => void;
  logout: () => void;
  token: Token;
};

const Header: FC<HeaderProps> = ({
  isLogin,
  token,
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
    if (token.access_token && token.refresh_token) {
      localStorage.setItem('accessToken', token.access_token);
      localStorage.setItem('refreshToken', token.refresh_token);
    }
  }, [token]);
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <S.LogoWrapper>
          <S.LogoImage onClick={goToHome} />
        </S.LogoWrapper>
        <S.GNBWrapper>
          {loginLoading && <p>로그인중...</p>}
          {!loginLoading && isLogin && token.access_token && (
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
