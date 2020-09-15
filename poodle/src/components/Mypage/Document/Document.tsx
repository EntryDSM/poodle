import React, { FC, useEffect, useState, useCallback } from 'react';
import * as S from '@/styles/Mypage/Document';
import ContentHeader from '@/components/default/common/ContentHeader/';
import { getClientWithAccessToken } from '@/lib/api/client';
import { useSelector } from 'react-redux';
import { RootState } from '@/core/redux/reducer';
import { useHistory } from 'react-router-dom';
import ErrorType from '@/lib/utils/type';
import { useReGenerateTokenAndDoCallback } from '@/lib/utils/function';

interface Props {
  isLoading: boolean;
  pdf: Blob;
  getPdf: () => void;
  getPdfError: ErrorType;
}

const Document: FC<Props> = ({ isLoading, pdf, getPdf, getPdfError }) => {
  const reGenerateTokenAndGetPdf = useReGenerateTokenAndDoCallback(getPdf);
  const history = useHistory();
  const { name, final_submit } = useSelector(
    (state: RootState) => state.Mypage.userStatus,
  );

  const onClickDownloadHandler = useCallback(() => {
    const link: HTMLAnchorElement = document.createElement('a');
    const url: string = `${(URL.createObjectURL(pdf) as unknown) as string}`;
    link.href = url;
    link.download = '테스트.pdf';
    link.click();
  }, [pdf]);

  useEffect(() => {
    if (name && !final_submit) {
      alert('최종 제출하지 않으셨습니다.');
      history.push('/');
    } else if (final_submit) {
      getPdf();
    }
  }, [final_submit]);

  useEffect(() => {
    if (getPdfError.status === 401) {
      reGenerateTokenAndGetPdf();
    } else if (getPdfError.status) {
      alert(`Error code: ${getPdfError.status} pdf불러오기 실패!`);
    }
  }, [getPdfError]);

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
          <S.DocumentWrapper>
            <iframe
              title='미리보기'
              src={`${document && URL.createObjectURL(pdf)}#toolbar=0`}
              width='1170px'
              height='1072px'
            />
            <S.DownloadButton onClick={onClickDownloadHandler}>
              다운로드
            </S.DownloadButton>
          </S.DocumentWrapper>
        )}
      </S.DocumentContainer>
    </S.Wrapper>
  );
};

export default Document;
