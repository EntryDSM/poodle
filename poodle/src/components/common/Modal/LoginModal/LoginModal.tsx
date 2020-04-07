import React, { useCallback } from 'react';
import * as S from '@/styles/common/Modal';
import { ModalContent, ModalInput, ModalButtonList, ModalContentProps,
    openModal
} from '../';
import { RESETMODAL } from '@/core/redux/actions/modal';

function LoginModal({ title, contour, error, color }: ModalContentProps) {
    return (
        <ModalContent
            title={title}
            contour={contour}
            error={error}
            color={color}
        >
            <ModalInput
                type="email"
            />
            <ModalInput
                type="password"
            />
            <ModalButtonList 
                color={color}
                buttonList={[{
                    id: 1,
                    title,
                    size: 'max',
                    onClick: () => {}
                }]}
            />
            <S.ETCSentence>
                아직 계정이 없으신가요?
            </S.ETCSentence>
            <S.ETCSentence onClick={openModal(RESETMODAL)}>
                비밀번호 재설정
            </S.ETCSentence>
        </ModalContent>
    );
}

export default LoginModal;