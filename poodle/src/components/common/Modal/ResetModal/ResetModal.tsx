import React, { useCallback, FC, useState } from 'react';
import * as S from '@/styles/common/Modal';
import { ModalContent, ModalInput, ModalButtonList, ModalContentProps } from '../';
import { ButtonType } from '../ModalButtonList';
import { getButtonList } from '@/container/common/ModalContainer/ResetModalContainer/ResetModalConstance';

type PageType = {
    inputType: string,
    key: string,
    errorSentence?: string,
    explain: string,
    moreExplain?: string,
    icon?: string
}

type ResetModalProps = {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    pageList: Array<PageType>,
    buttonList: Array<Array<ButtonType>>,
    title: string,
    contour: boolean,
    error: boolean,
    color: string
}

const RestModal: FC<ResetModalProps> = ({ page, setPage, pageList, buttonList, title, contour, error, color }) => {
    const [resetInfo, setResetInfo] = useState({
        email: '',
        code: '',
        password: '',
        passwordCheck: ''
    });
    const submit1 = useCallback(() => {
        buttonList[0][0].onClick();
    }, [page]);
    const next1 = useCallback(() => {
        buttonList[0][1].onClick();
    }, [page]);
    const reSubmit2 = useCallback(() => {
        buttonList[1][0].onClick();
    }, [page]);
    const verification2 = useCallback(() => {
        buttonList[1][1].onClick();
    }, [page]);
    const next2 = useCallback(() => {
        console.log(buttonList);
        buttonList[1][2].onClick();
    }, [page]);
    const prev3 = useCallback(() => {
        buttonList[2][0].onClick();
    }, [page]);
    const next3 = useCallback(() => {
        buttonList[2][1].onClick();
    }, [page]);
    const prev4 = useCallback(() => {
        buttonList[3][0].onClick();
    }, [page]);
    const next4 = useCallback(() => {
        buttonList[3][1].onClick();
    }, [page]);
    const check5 = useCallback(() => {
        buttonList[4][0].onClick();
    }, [page]);
    const correctedButtonList = getButtonList(
        submit1,
        next1,
        reSubmit2,
        verification2,
        next2,
        prev3,
        next3,
        prev4, 
        next4,
        check5
    );
    if (page < 0 || page > 4) return null;
    return (
        <ModalContent
            title={title}
            contour={contour}
            errorSentence={error ? pageList[page].errorSentence : ''}
            color={color}
            explain={pageList[page].explain}
            icon={pageList[page].icon}
        >
            {pageList[page].inputType && 
            <ModalInput
                type={pageList[page].inputType}
                textCenter={pageList[page].inputType === 'password' ||
                pageList[page].inputType === 'verification'}
                value={resetInfo}
                setValue={setResetInfo}
                id={pageList[page].key}
            />}
            <ModalButtonList buttonList={correctedButtonList[page]} color={color} />
            {pageList[page].moreExplain && <S.MoreExplainSentence>
                {pageList[page].moreExplain}
            </S.MoreExplainSentence>}
        </ModalContent>
    );
}

export default RestModal;