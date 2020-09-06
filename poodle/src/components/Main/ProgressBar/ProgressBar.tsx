import React, { FC, useState, useEffect, useMemo } from 'react';
import * as S from '@/styles/Main/ProgressBar';
import { Link } from 'react-router-dom';
import { Schedule } from '@/core/redux/actions/Main';
import {
  isFinishedSchedule,
  isProgressingSchedule,
} from '@/lib/utils/function';

export enum Progress {
  'application' = '원서 작성',
  'first_apply' = '1차 발표',
  'interview' = '면접',
  'notice' = '발표 및 등록',
}

enum Uri {
  'application' = '/type',
  'first_apply' = '/applystatus',
  'interview' = '/applystatus',
  'notice' = '/applystatus',
}

interface Props {
  schedules: Schedule[];
  isLoading: boolean;
}

const ProgressBar: FC<Props> = ({ schedules, isLoading }) => {
  return (
    <S.ProgressBarWrapper>
      <S.ProgressBox>
        {isLoading ? (
          <p>값을 불러오는 중입니다...</p>
        ) : (
          schedules.map((schedule, index) => (
            <ProgressItem
              key={schedule.id}
              index={index}
              schedule={schedule}
              isAllFinish={isFinishedSchedule(schedules[schedules.length - 1])}
            />
          ))
        )}
      </S.ProgressBox>
    </S.ProgressBarWrapper>
  );
};

export default ProgressBar;

interface ProgressItemProps {
  index: number;
  schedule: Schedule;
  isAllFinish: boolean;
}

const ProgressItem: FC<ProgressItemProps> = ({
  index,
  schedule,
  isAllFinish,
}) => {
  const FIRST_INDEX = 0;
  const isProgressing = isProgressingSchedule(schedule);
  const isFinished = isFinishedSchedule(schedule);
  return (
    <>
      {index !== FIRST_INDEX && (
        <S.VerticalLine
          isBlue={isAllFinish ? false : isProgressing || isFinished}
        />
      )}
      <S.ProgressItemWrapper isAble={isProgressing}>
        <Link to={isProgressing ? Uri[schedule.id] : ''}>
          <S.ProgressTitle isBlue={isProgressing}>
            {Progress[schedule.id]}
          </S.ProgressTitle>
        </Link>
        <Link to={isProgressing ? Uri[schedule.id] : ''}>
          <S.StatusImage
            isFinish={isFinished}
            isProgressing={isProgressing}
            isAllFinish={isAllFinish}
          />
        </Link>
      </S.ProgressItemWrapper>
    </>
  );
};
