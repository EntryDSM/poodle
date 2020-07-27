import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { PreviewFile } from '@/components/Preview';
import { PreviewDiv, PreviewMain } from '@/styles/Preview';
import {
  Title,
  DefaultlNavigation,
} from '@/components/default/ApplicationFormDefault';
import ModalContainer from '../common/ModalContainer/ModalContainer';
import { modalOn, BLUECHECKMODAL } from '@/core/redux/actions/Modal';

type Props = RouteComponentProps;

const Preview: FC<Props> = ({ history }) => {
  const dispatch = useDispatch();
  const goCurrentPage = useCallback(() => {
    history.push('/introduction');
  }, []);
  const goNextPage = useCallback(() => {
    dispatch(modalOn(BLUECHECKMODAL));
  }, []);
  const modalClickHandler = useCallback(() => {
    history.push('/');
  }, []);
  return (
    <PreviewDiv>
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

export default withRouter(Preview);
