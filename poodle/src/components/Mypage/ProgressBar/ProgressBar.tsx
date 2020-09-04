import React, { FC, useMemo } from 'react';
import * as S from '@/styles/Mypage/ProgressBar';
import { Process } from '@/core/redux/actions/Mypage';
import ErrorType from '@/lib/utils/type';

enum Uri {
  전형구분 = '/type',
  인적사항 = '/info',
  성적입력 = '/grade',
  자기소개서 = '/introduction',
}

type Label = '전형구분' | '인적사항' | '성적입력' | '자기소개서';

interface Props {
  process: {
    data: Process;
    error: ErrorType;
    loading: boolean;
  };
}

const ProgressBar: FC<Props> = ({
  process: {
    loading,
    data,
    data: { type, info, score, document },
    error,
  },
}) => {
  type Progress = {
    label: Label;
    isFinished: boolean;
  };
  const progressItems: Progress[] = useMemo(
    () => [
      { label: '전형구분', isFinished: type },
      { label: '인적사항', isFinished: info },
      { label: '성적입력', isFinished: score },
      { label: '자기소개서', isFinished: document },
    ],
    [data],
  );
  if (error.status) return null;
  return (
    <S.ProgressBarWrapper>
      <S.ProgressBox>
        {loading
          ? '값을 불러오는 중입니다...'
          : progressItems.map(props => (
              <ProgressItem key={props.label} {...props} />
            ))}
      </S.ProgressBox>
    </S.ProgressBarWrapper>
  );
};
export default ProgressBar;

type ProgressItemProps = {
  label: Label;
  isFinished: boolean;
};

const ProgressItem: React.FC<ProgressItemProps> = ({ label, isFinished }) => (
  <>
    <S.ProgressItemBox>
      <S.ProgressImageLink
        to={Uri[label]}
        className={isFinished ? 'finished' : ''}
      />
      <S.ProgressTitleLink
        to='전형구분'
        className={isFinished ? 'finished' : ''}
      >
        {label}
      </S.ProgressTitleLink>
    </S.ProgressItemBox>
    <S.Line className={isFinished ? 'finished' : ''} />
  </>
);
