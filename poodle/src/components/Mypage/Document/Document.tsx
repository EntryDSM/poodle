import React, { FC } from 'react';
import * as S from '@/styles/Mypage/Document';
import ContentHeader from '@/components/default/common/ContentHeader/';

const Document: React.FC<{}> = () => (
  <S.Wrapper>
    <S.DocumentContainer>
      <ContentHeader
        padding='100px 0 40px'
        subTitle='2021 입학원서 작성'
        title='제출서류'
        underLineLength={121}
        titleFontSize={36}
      />
      <iframe src='/example.pdf' width='1170px' height='1072px' />
    </S.DocumentContainer>
  </S.Wrapper>
);

export default Document;
