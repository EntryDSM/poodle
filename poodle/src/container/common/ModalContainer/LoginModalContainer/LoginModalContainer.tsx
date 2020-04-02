import React from 'react';
import LoginModal from '../../../../components/common/Modal/LoginModal/LoginModal';

function LoginModalContainer() {
    return (
        <LoginModal
            title="로그인"
            contour={false}
            error="이메일 또는 비밀번호가 잘못되었습니다"
            color="#78cede"
        />
    );
}

export default LoginModalContainer;