import React, { useState, useCallback, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useRedirect } from '../../../../../lib/utils/function';
import * as S from '@/styles/common/Modal';
import { ModalContent,
    ModalInput,
    ModalButtonList,
    ModalContentProps,
    openModal,
    clearModal
} from '..';
import { RESETMODAL } from '@/core/redux/actions/modal';

type LoginModalProps = ModalContentProps & {
    onClick: () => void
}

const LoginModal: FC<LoginModalProps> = ({ title, contour, errorSentence, color, onClick }) => {
    const dispatch = useDispatch();
    const redirectToLink = useRedirect();
    const openResetModal = useCallback(() => {
        openModal(RESETMODAL, dispatch);
    }, [dispatch]);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const onSubmit = useCallback(() => {
        const loginInfoValue = [email, password];
        if (loginInfoValue.some(v => !v || v.indexOf(' ') !== -1)) {
            alert('빈칸은 입력할수 없습니다.');
        } else {
            console.log('로그인 !!')
        }
    }, [email, password]);
    const goToJoin = useCallback(() => {
        redirectToLink('/join');
        clearModal(dispatch);
    }, []);
    return (
        <ModalContent
            title={title}
            contour={contour}
            errorSentence={errorSentence}
            color={color}
        >
            <ModalInput
                type="email"
                placeholder="이메일"
                textCenter={false}
                value={email}
                setValue={setEmail}
                id='email'
            />
            <ModalInput
                type="password"
                placeholder="비밀번호"
                textCenter={false}
                value={password}
                setValue={setPassword}
                id="password"
                submit={onSubmit}
            />
            <ModalButtonList 
                color={color}
                buttonList={[{
                    id: 1,
                    title,
                    size: 'max',
                    onClick: onSubmit
                }]}
            />
            <S.ETCSentence onClick={goToJoin}>
                아직 계정이 없으신가요?
            </S.ETCSentence>
            <S.ETCSentence onClick={openResetModal}>
                비밀번호 재설정
            </S.ETCSentence>
        </ModalContent>
    );
}

export default LoginModal;