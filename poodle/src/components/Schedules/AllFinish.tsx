import React, { FC } from 'react';
import styled from 'styled-components';
import ContentHeader from '@/components/default/common/ContentHeader';
import * as HS from '@/styles/common/Header';
import * as S from '@/styles/Schedules';
import { Footer } from '../default/Footer';

const Wrapper = styled.div`
  span {
    cursor: auto;
  }
  main > div > div {
    margin-bottom: 154px;
  }
`;

const AllFinish: FC = () => {
  return (
    <Wrapper>
      <HS.HeaderWrapper>
        <HS.HeaderContent>
          <HS.LogoWrapper>
            <HS.LogoImage />
          </HS.LogoWrapper>
        </HS.HeaderContent>
      </HS.HeaderWrapper>
      <S.ApplyStatusWrapper>
        <S.SchedulesContainer>
          <ContentHeader
            padding='160px 0 78px'
            subTitle='대덕소프트웨어마이스터고등학교'
            title='2021 신입생 모집'
            underLineLength={315}
            titleFontSize={46}
          />
          <S.ContentBlock>
            <S.Title>모든 일정이 끝났습니다</S.Title>
            <div>
              <S.Explain>Entry를 이용해 주셔서 감사합니다.</S.Explain>
              <S.Explain>
                그 밖에 자세한 내용은 홈페이지를 참고해주세요.
              </S.Explain>
            </div>
          </S.ContentBlock>
        </S.SchedulesContainer>
      </S.ApplyStatusWrapper>
      <Footer />
    </Wrapper>
  );
};

export default AllFinish;
