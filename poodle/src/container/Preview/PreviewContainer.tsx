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
import { previewCall, submitCall } from '@/core/redux/actions/Preview';
import { useHistory } from 'react-router-dom';
import { ReducerType } from '@/core/redux/store';
import ToastController from '../common/ToastContainer';

const TOAST_DIV_ID = 'toastDiv';

const PreviewContainer: FC = () => {
  const modalController = useMemo(() => new ToastController(TOAST_DIV_ID), []);
  const { error, preview } = useSelector((state: ReducerType) => state.Preview);
  const { page } = useSelector((state: ReducerType) => state.PageState);
  const history = useHistory();
  const dispatch = useDispatch();
  const goCurrentPage = useCallback(() => {
    history.push('/introduction');
  }, []);
  const goNextPage = useCallback(() => {
    dispatch(modalOn(BLUECHECKMODAL));
  }, []);
  const modalClickHandler = useCallback(() => {
    dispatch(submitCall());
  }, []);
  useEffect(() => {
    if (page != null) {
      history.push(`/${page}`);
    }
  }, [page]);
  useEffect(() => {
    if (error) {
      modalController.createNewToast('SERVER_ERROR');
    }
  }, [error]);
  useEffect(() => {
    dispatch(previewCall());
  }, []);
  return (
    <PreviewDiv>
      <div id={TOAST_DIV_ID} />
      <ModalContainer onClick={modalClickHandler} />
      <PreviewMain>
        <Title margin='55px'>미리보기</Title>
        <PreviewFile src='/example.pdf' />
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
