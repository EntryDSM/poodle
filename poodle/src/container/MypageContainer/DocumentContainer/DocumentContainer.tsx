import React, { FC } from 'react';
import { Document } from '@/components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/core/redux/reducer';
import { getDocument as createGetDocumentAction } from '@/core/redux/actions/Mypage';

const DocumentContainer: FC = () => {
  const dispatch = useDispatch();
  const { document, getDocumentError, isLoading } = useSelector(
    (state: RootState) => ({
      ...state.Mypage,
      isLoading: state.Loading['mypage/GET_DOCUMENT'],
    }),
  );

  const getDocument = () => {
    dispatch(createGetDocumentAction());
  };

  return (
    <Document
      isLoading={isLoading}
      document={document}
      getDocument={getDocument}
      getDocumentError={getDocumentError}
    />
  );
};

export default DocumentContainer;
