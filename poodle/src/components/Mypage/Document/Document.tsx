import React, { FC, useEffect, useState } from 'react';
import * as S from '@/styles/Mypage/Document';
import ContentHeader from '@/components/default/common/ContentHeader/';
import { getClientWithAccessToken } from '@/lib/api/client';
import { useSelector } from 'react-redux';
import { RootState } from '@/core/redux/reducer';
import { useHistory } from 'react-router-dom';
import ErrorType from '@/lib/utils/type';

interface Props {
  isLoading: boolean;
  document: Blob;
  getDocument: () => void;
  getDocumentError: ErrorType;
}

const Document: FC<Props> = ({
  isLoading,
  document,
  getDocument,
  getDocumentError,
}) => {
  const history = useHistory();
  const [pdf, setPdf] = useState();
  const { name, final_submit } = useSelector(
    (state: RootState) => state.Mypage.userStatus,
  );

  useEffect(() => {
    if (name && !final_submit) {
      alert('최종 제출하지 않으셨습니다.');
      history.push('/');
    } else if (final_submit) {
      getDocument();
    }
  }, [final_submit]);

  return (
    <S.Wrapper>
      <S.DocumentContainer>
        <ContentHeader
          padding='100px 0 40px'
          subTitle='2021 입학원서 작성'
          title='제출서류'
          underLineLength={121}
          titleFontSize={36}
        />
        {isLoading ? (
          'pdf를 불러오는 중입니다...'
        ) : (
          <iframe
            title='미리보기'
            src={document && URL.createObjectURL(document)}
            width='1170px'
            height='1072px'
          />
        )}
      </S.DocumentContainer>
    </S.Wrapper>
  );
};

export default Document;
