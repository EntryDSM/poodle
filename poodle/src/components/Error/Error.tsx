import React, { FC } from 'react';
import * as S from '@/styles/Schedules';
import ContentHeader from '@/components/default/common/ContentHeader';
import { ERROR_INFO } from '@/components/Schedules/SchedulesConstance';

const Error: React.FC<{}> = () => (
  <S.ApplyStatusWrapper>
    <S.SchedulesContainer>
      <ContentHeader
        padding='180px 0 92px'
        title='404 NOT FOUND'
        underLineLength={313}
        titleFontSize={46}
      />
      <S.ContentBlock>
        <S.Title>{ERROR_INFO.title}</S.Title>
        <div>
          {ERROR_INFO.explains.map((explain, index) => (
            <S.Explain key={index}>{explain}</S.Explain>
          ))}
        </div>
        <S.ButtonLink to='/'>메인으로 이동</S.ButtonLink>
      </S.ContentBlock>
    </S.SchedulesContainer>
  </S.ApplyStatusWrapper>
);

export default Error;
