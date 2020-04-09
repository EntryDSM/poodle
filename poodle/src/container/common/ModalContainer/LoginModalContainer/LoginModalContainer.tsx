import React, { FC } from 'react';
import LoginModal from '@/components/common/Modal/LoginModal/LoginModal';
import { MAINCOLOR } from '@/lib/utils/style/color';

const LoginModalContainer: FC<{}> = () => {
    const submitLogin = () => {
        console.log('로그인한다!');
    }
    return (
        <LoginModal
            title="로그인"
            contour={true}
            errorSentence={false ? "이메일 또는 비밀번호가 잘못되었습니다" : ''}
            color={MAINCOLOR}
            onClick={submitLogin}
        />
    );
}

export default LoginModalContainer;