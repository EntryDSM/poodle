import React, { FC } from 'react';
import * as S from '@/styles/Mypage/ProgressBar';

const dummyData = {
  전형구분: false,
  인적사항: false,
  성적입력: false,
  자기소개서: true,
};

const ProgressBar: React.FC<{}> = () => (
  <S.ProgressBarWrapper>
    <S.ProgressBox>
      {[
        { label: '전형구분', isfinished: false },
        { label: '인적사항', isfinished: false },
        { label: '성적입력', isfinished: false },
        { label: '자기소개서', isfinished: true },
      ].map(props => (
        <ProgressItem key={props.label} {...props} />
      ))}
    </S.ProgressBox>
  </S.ProgressBarWrapper>
);

export default ProgressBar;

type ProgressItemProps = {
  label: string;
  isfinished: boolean;
};

const ProgressItem: React.FC<ProgressItemProps> = ({ label, isfinished }) => (
  <>
    <S.ProgressItemBox>
      <S.ProgressImageLink
        className={isfinished ? 'finished' : ''}
        to='전형구분'
      />
      <S.ProgressTitleLink to='전형구분'>{label}</S.ProgressTitleLink>
    </S.ProgressItemBox>
    <S.Line />
  </>
);
