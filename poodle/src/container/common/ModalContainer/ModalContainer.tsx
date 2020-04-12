import React, { useMemo, useCallback, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@/core/redux/reducer';
import { LOGINMODAL, RESETMODAL, YELLOWCHECKMODAL,
    BLUECHECKMODAL, REDERRORMODAL, WARNINGMODAL,
    modalClear, modalOff
} from '@/core/redux/actions/modal';
import {
    LoginModalContainer,
    ResetModalContainer,
    ErrorModalContainer
} from './';
import Modal from '@/components/common/Modal/Modal';
import ModalBox from '@/components/common/Modal/ModalBox';
import { YellowCheckModal, BlueCheckModal, RedErrorModal, WarningModal } from '@/components/common/Modal';

const ModalContainer: FC<{}> = () => {
    const dispatch = useDispatch();
    const { login, reset, yellowCheck, blueCheck, redError, warning } = useSelector(({ modal }: RootState) => ({
        login: modal[LOGINMODAL],
        reset: modal[RESETMODAL],
        yellowCheck: modal[YELLOWCHECKMODAL],
        blueCheck: modal[BLUECHECKMODAL],
        redError: modal[REDERRORMODAL],
        warning: modal[WARNINGMODAL],
    }));
    const modalList = useMemo(() => [login, reset, yellowCheck, blueCheck, redError, warning], [login, reset, yellowCheck, blueCheck, redError, warning]);

    if (!modalList.some(m => m)) return null;
    return (
        <Modal modalClear={() => dispatch(modalClear())}>
            {login && 
            <ModalBox modalOff={() => dispatch(modalOff(LOGINMODAL))}>
                <LoginModalContainer />
            </ModalBox>}
            {reset &&
            <ModalBox modalOff={() => dispatch(modalOff(RESETMODAL))}>
                <ResetModalContainer />
            </ModalBox>}
            {yellowCheck && 
            <ModalBox modalOff={() => dispatch(modalOff(YELLOWCHECKMODAL))}>
                <YellowCheckModal />
            </ModalBox>
            }
            {blueCheck && 
            <ModalBox modalOff={() => dispatch(modalOff(BLUECHECKMODAL))}>
                <BlueCheckModal />
            </ModalBox>
            }
            {redError && 
            <ModalBox modalOff={() => dispatch(modalOff(REDERRORMODAL))}>
                <RedErrorModal />
            </ModalBox>
            }
            {warning && 
            <ModalBox modalOff={() => dispatch(modalOff(WARNINGMODAL))}>
                <WarningModal />
            </ModalBox>
            }
        </Modal>
    );
}

export default ModalContainer;