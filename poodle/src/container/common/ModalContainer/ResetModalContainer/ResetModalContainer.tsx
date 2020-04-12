import React, { useState, useCallback, FC } from 'react';
import ResetModal from '@/components/common/Modal/ResetModal/ResetModal';
import { setPageList, getButtonList } from './ResetModalConstance';

const ResetModalContainer: FC<{}> = () => {
    const [page, setPage] = useState(0);
    const goPrevPage = useCallback(() => {
        setPage(page - 1);
    }, [page]);
    const goNextPage = useCallback(() => {
        setPage(page + 1);
    }, [page]);
    const submitEmail = useCallback(() => {}, []);
    const reSubmitEmail = useCallback(() => {}, []);
    const submitCheckCode = useCallback(() => {}, []);
    const submitPassword = useCallback(() => {}, []);
    const getPageList = useCallback((sendSuccess) => {
        return setPageList(sendSuccess);
    }, []);
    const buttonList = getButtonList(
        submitEmail,
        goNextPage,
        reSubmitEmail,
        submitCheckCode,
        goNextPage,
        goPrevPage,
        goNextPage,
        goPrevPage,
        goNextPage,
        submitPassword
    );
    return (
        <ResetModal
            page={page}
            setPage={setPage}
            pageList={getPageList(true)}
            buttonList={buttonList}
            title="비밀번호 재설정"
            contour={true}
            error={false}
            color='#78cede'
        />
    );
}

export default ResetModalContainer;