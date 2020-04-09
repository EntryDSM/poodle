import React, { useState, useCallback, FC } from 'react';
import { useDispatch } from 'react-redux';
import * as S from '@/styles/common/Modal';
import { ModalContent, ModalInput, ModalButtonList, ModalContentProps,
    openModal
} from '../';
import { RESETMODAL } from '@/core/redux/actions/modal';

type LoginModalProps = ModalContentProps & {
    onClick: () => void
}

const LoginModal: FC<LoginModalProps> = ({ title, contour, errorSentence, color, onClick }) => {
    const dispatch = useDispatch();
    const openResetModal = useCallback(() => {
        openModal(RESETMODAL, dispatch);
    }, [dispatch]);
    const [loginInfo, setLoginInfo] = useState<{[key: string]: string}>({
        email: '',
        password: ''
    });
    const onSubmit = useCallback(() => {
        const loginInfoValue = Object.keys(loginInfo).map(key => loginInfo[key]);
        console.log(loginInfo, loginInfoValue);
        if (loginInfoValue.some(v => !v || v.indexOf(' ') !== -1)) {
            alert('빈칸은 입력할수 없습ㄴ디ㅏ.');
        } else {
            console.log('로그인 !!')
        }
    }, [loginInfo]);
    return (
        <ModalContent
            title={title}
            contour={contour}
            errorSentence={errorSentence}
            color={color}
        >
            <ModalInput
                type="email"
                textCenter={false}
                value={loginInfo}
                setValue={setLoginInfo}
                id='email'
                />
            <ModalInput
                type="password"
                textCenter={false}
                value={loginInfo}
                setValue={setLoginInfo}
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
            <S.ETCSentence>
                아직 계정이 없으신가요?
            </S.ETCSentence>
            <S.ETCSentence onClick={openResetModal}>
                비밀번호 재설정
            </S.ETCSentence>
        </ModalContent>
    );
}

export default LoginModal;