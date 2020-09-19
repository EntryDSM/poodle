import React, { FC } from 'react';
import { Document } from '@/components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/core/redux/reducer';
import { getPdf as createGetPdfAction } from '@/core/redux/actions/Mypage';

const DocumentContainer: FC = () => {
  const dispatch = useDispatch();
  const { pdf, getPdfError, isLoading } = useSelector((state: RootState) => ({
    ...state.Mypage,
    isLoading: state.Loading['mypage/GET_PDF'],
  }));

  const getPdf = () => {
    dispatch(createGetPdfAction());
  };

  return (
    <Document
      isLoading={isLoading}
      pdf={pdf}
      getPdf={getPdf}
      getPdfError={getPdfError}
    />
  );
};

export default DocumentContainer;
