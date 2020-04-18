import React, { FC, useCallback } from 'react';
import * as S from '@/styles/common/Header';
import { useRedirect } from '@/lib/utils/function';

export type HeaderProps = {
    isLogin: boolean,
    loginLoading: boolean,
    loginError: string,
    login: () => void,
    logout: () => void,
    user: {
        userName: string
    }
};

const Header: FC<HeaderProps> = ({ isLogin,  user, loginError, loginLoading, login, logout }: HeaderProps) => {
    const redirectToLink = useRedirect();
    const goToHome = useCallback(() => {
        redirectToLink('/');
    }, []);
    const goToMypage = useCallback(() => {
        redirectToLink('/mypage');
    }, []);
    return (
        <S.HeaderWrapper>
            <S.HeaderContent>
                <S.LogoWrapper>
                        <S.LogoImage onClick={goToHome} />
                </S.LogoWrapper>
                <S.GNBWrapper>
                    {loginLoading && <p>로그인중...</p>}
                    {loginError && <p>{loginError}</p>}
                    {!loginError && !loginLoading && isLogin && user &&
                    <>
                        <S.GNB onClick={goToMypage}>마이페이지</S.GNB>
                        <S.GNB onClick={logout}>{user.userName}</S.GNB>
                    </>}
                    {!loginLoading && !loginError && !isLogin &&
                        <S.GNB onClick={login}>로그인</S.GNB>
                    }
                </S.GNBWrapper>
            </S.HeaderContent>
        </S.HeaderWrapper>
    );
}

export default Header;