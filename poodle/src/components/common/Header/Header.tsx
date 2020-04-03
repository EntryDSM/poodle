import React from 'react';
import * as S from '../../../styles/common/Header';

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

function Header({ isLogin,  user, loginError, loginLoading, login, logout }: HeaderProps) {
    return (
        <S.HeaderWrapper>
            <S.HeaderContent>
                <S.LogoWrapper>
                    <S.LinkPointer to="/">
                        <S.LogoImage />
                    </S.LinkPointer>
                </S.LogoWrapper>
                <S.GNBWrapper>
                    {loginLoading && <p>로그인중...</p>}
                    {loginError && <p>{loginError}</p>}
                    {!loginError && !loginLoading && isLogin && user &&
                    <>
                        <S.LinkPointer to="/mypage">
                            <S.GNB>마이페이지</S.GNB>
                        </S.LinkPointer>
                            <S.Pointer>
                            <S.GNB onClick={logout}>{user.userName}</S.GNB>
                        </S.Pointer>    
                    </>}
                    {!loginLoading && !loginError && !isLogin &&
                        <S.Pointer>
                            <S.GNB onClick={login}>로그인</S.GNB>
                        </S.Pointer>
                    }
                </S.GNBWrapper>
            </S.HeaderContent>
        </S.HeaderWrapper>
    );
}

export default Header;