import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PreviewFile } from '@/components/Preview';
import { PreviewDiv, PreviewMain } from '@/styles/Preview';
import {
  Title,
  DefaultlNavigation,
} from '@/components/default/ApplicationFormDefault';
import ModalContainer from '../common/ModalContainer/ModalContainer';
import { modalOn, BLUECHECKMODAL } from '@/core/redux/actions/Modal';
import {
  previewCall,
  setPageMove,
  setPreview,
  submitCall,
} from '@/core/redux/actions/Preview';
import { useHistory } from 'react-router-dom';
import { ReducerType } from '@/core/redux/store';
import ToastController from '../common/ToastContainer';
import { useReGenerateTokenAndDoCallback } from '@/lib/utils/function';

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
    }
    modalController.createNewToast('SERVER_ERROR');
  }, [error, getPreviewError, setUserStatusError]);
  useEffect(() => {
    dispatch(previewCall());
  }, []);
  useEffect(() => {
    if (pageMove) {
      history.push('/');
      modalController.resetToast();
      dispatch(setPageMove({ pageMove: false }));
    }
  }, [pageMove]);
  return (
    <PreviewDiv>
      <div id={TOAST_DIV_ID} />
      <ModalContainer onClick={modalClickHandler} />
      <PreviewMain>
        <Title margin='55px'>미리보기</Title>
        <PreviewFile src={preview} />
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
