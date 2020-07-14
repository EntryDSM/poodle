import React, { FC } from 'react';
import * as S from '@/styles/Main/ProgressBar';
import { Link } from 'react-router-dom';
import { progressInfo } from './DummyData';

const ProgressBar: React.FC<{}> = () => (
  <S.ProgressBarWrapper>
    <S.ProgressBox>
      {progressInfo.map(data => (
        <ProgressItem
          key={data.id}
          id={data.id}
          title={data.title}
          isProgressing={data.isProgressing}
        />
      ))}
    </S.ProgressBox>
  </S.ProgressBarWrapper>
);

export default ProgressBar;

const ProgressItem: React.FC<{
  id: number;
  title: string;
  isProgressing: boolean;
}> = ({ id, title, isProgressing }) => (
  <>
    <S.ProgressItemWrapper>
      <Link to='원서작성'>
        <S.ProgressTitle isProgressing={isProgressing}>{title}</S.ProgressTitle>
      </Link>
      <Link to='원서작성'>
        <S.StatusImage isProgressing={isProgressing} />
      </Link>
    </S.ProgressItemWrapper>
    {id !== 5 && <S.VerticalLine />}
  </>
);
