import React, { FC } from 'react';
import * as S from '@/styles/Main';
import ContentHeader from '@/components/default/common/ContentHeader';
import ProgressBar from './ProgressBar/ProgressBar';

const Main: React.FC<{}> = () => (
  <S.MainWrapper>
    <S.MainContainer>
      <S.ContentBlock>
        <ContentHeader
          padding='160px 0 220px'
          subTitle='대덕소프트웨어마이스터고등학교'
          title='2021 신입생 모집'
          underLineLength={315}
          titleFontSize={46}
        />
        <S.Article>
          <S.StepPeriod>
            지금은 <S.EmphasizeLetters>원서 작성</S.EmphasizeLetters>{' '}
            기간입니다.
          </S.StepPeriod>
          <S.DetailedPeriod>
            <S.EmphasizeLetters>원서작성</S.EmphasizeLetters>은
            <S.WhiteSpace> </S.WhiteSpace>
            <S.EmphasizeLetters>
              20년
              <S.WhiteSpace> </S.WhiteSpace>
              00월
              <S.WhiteSpace> </S.WhiteSpace>
              00일
            </S.EmphasizeLetters>
            까지이며
            {'\r\n'}
            마감일까지
            <S.WhiteSpace> </S.WhiteSpace>
            <S.EmphasizeLetters>00일</S.EmphasizeLetters>
            <S.WhiteSpace> </S.WhiteSpace>
            남았습니다.
          </S.DetailedPeriod>
        </S.Article>
        <S.Footer>
          <S.StepLink to='/applystatus'>
            <S.StepTitle>원서 작성 페이지로 이동</S.StepTitle>
            <S.RightArrow />
          </S.StepLink>
        </S.Footer>
      </S.ContentBlock>
      <ProgressBar />
    </S.MainContainer>
  </S.MainWrapper>
);

export default Main;
