import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as S from '../../../../styles/common/Modal';
import { ModalContent, ModalInput, ModalButtonList, ModalContentProps } from '../';
import { modalOn, modalClear, RESETMODAL, YELLOWCHECKMODAL, BLUECHECKMODAL, REDERRORMODAL, WARNINGMODAL } from '../../../../core/redux/actions/modal';

function LoginModal({ title, contour, error, color }: ModalContentProps) {
    const dispatch = useDispatch();
    const history = useHistory();
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
            <S.ETCSentence onClick={() => (history.push('/join'), dispatch(modalClear()))}>
                아직 계정이 없으신가요?
            </S.ETCSentence>
            <S.ETCSentence onClick={() => dispatch(modalOn(WARNINGMODAL))}>
                비밀번호 재설정
            </S.ETCSentence>
        </ModalContent>
    );
}

export default LoginModal;