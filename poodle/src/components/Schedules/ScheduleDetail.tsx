import React, { FC } from 'react';
import * as S from '@/styles/Schedules';

interface Props {
  title: string;
  explains: string[];
}

const ScheduleDetail: FC<Props> = ({ title, explains }) => {
  return (
    <S.ContentBlock>
      <S.Title>{title}</S.Title>
      <div>
        {explains?.map((explain, index) => (
          <S.Explain key={index}>{explain}</S.Explain>
        ))}
      </div>
      <S.ButtonLink to='/'>메인으로 이동</S.ButtonLink>
    </S.ContentBlock>
  );
};

export default ScheduleDetail;
