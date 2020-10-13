import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PreviewFile } from '@/components/Preview';
import { Loader, PreviewDiv, PreviewMain } from '@/styles/Preview';
import {
  Title,
  DefaultlNavigation,
} from '@/components/default/ApplicationFormDefault';
import ModalContainer from '../common/ModalContainer/ModalContainer';
import { modalOn, BLUECHECKMODAL } from '@/core/redux/actions/Modal';
import {
  previewCall,
  resetServerRequestStatus,
  setPageMove,
  setPreview,
  submitCall,
} from '@/core/redux/actions/Preview';
import { useHistory } from 'react-router-dom';
import { ReducerType } from '@/core/redux/store';
import ToastController from '../common/ToastContainer';
import {
  getIsStarted,
  useReGenerateTokenAndDoCallback,
  isFinishApplicationApply,
} from '@/lib/utils/function';

const TOAST_DIV_ID = 'toastDivPreview';

const PreviewContainer: FC = () => {
  const modalController = useMemo(() => new ToastController(TOAST_DIV_ID), []);
  const {
    error,
    preview,
    pageMove,
    getPreviewError,
    setUserStatusError,
  } = useSelector((state: ReducerType) => state.Preview);
  const { status } = useSelector((state: ReducerType) => state.Header);
  const history = useHistory();
  const dispatch = useDispatch();
  const goCurrentPage = useCallback(() => {
    history.push('/introduction');
    dispatch(setPreview(''));
  }, []);
  const goNextPage = useCallback(() => {
    dispatch(modalOn(BLUECHECKMODAL));
  }, []);
  const modalClickHandler = useCallback(() => {
    dispatch(submitCall());
  }, []);
  const getPdfGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(() =>
    dispatch(previewCall()),
  );
  const setUserStatusGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(
    () => dispatch(submitCall()),
  );
  useEffect(() => {
    if (!error) return;
    if (error.status === 401) {
      if (getPreviewError.status === 401) getPdfGenerateTokenAndDoCallback();
      if (setUserStatusError.status === 401)
        setUserStatusGenerateTokenAndDoCallback();
      return;
    }
    modalController.createNewToast('SUBMIT_ERROR');
  }, [error, getPreviewError, setUserStatusError]);
  useEffect(() => {
    dispatch(previewCall());
    return () => {
      dispatch(setPreview(''));
    };
  }, []);
  useEffect(() => {
    if (status.final_submit) {
      alert('최종 제출 하셨습니다.');
      history.push('/');
    } else if (isFinishApplicationApply()) {
      alert('종료 되었습니다.');
      history.push('/');
    } else if (!getIsStarted()) {
      alert('시작 하지 않았습니다.');
      history.push('/');
    }
  }, [status]);
  useEffect(() => {
    if (pageMove) {
      dispatch(setPageMove({ pageMove: false }));
      history.push('/');
      modalController.resetToast();
      dispatch(resetServerRequestStatus());
    }
  }, [pageMove]);
  return (
    <PreviewDiv>
      <div id={TOAST_DIV_ID} />
      <ModalContainer onClick={modalClickHandler} />
      <PreviewMain>
        <Title margin='55px'>미리보기</Title>
        {preview.length > 0 ? (
          <PreviewFile pdfFile={preview} />
        ) : (
          <Loader>
            <div className='loader' />
          </Loader>
        )}

        <DefaultlNavigation
          page='preview'
          currentPageClickHandler={goCurrentPage}
          nextPageClickHandler={goNextPage}
        />
      </PreviewMain>
    </PreviewDiv>
  );
};

export default PreviewContainer;
