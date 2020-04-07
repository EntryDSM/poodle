import React from 'react';
import ResetModal from '@/components/common/Modal/ResetModal/ResetModal';

function ResetModalContainer() {
    return (
        <ResetModal
            title="비밀번호 재설정"
            contour={true}
            error='이메일 또는 비밀번호가 잘못되었습니다'
            color='#78cede'
        />
    );
}

export default ResetModalContainer;