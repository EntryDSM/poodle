import React, { FC } from 'react';
import * as S from '@/styles/Main/ProgressBar';
import { Link } from 'react-router-dom';
import { Schedule } from '@/core/redux/actions/Main';
import {
  isFinishedSchedule,
  isProgressingSchedule,
  getFirstApplyStatus,
} from '@/lib/utils/function';

export enum Progress {
  'application' = '원서 작성',
  'first_apply' = '1차 발표',
  'interview' = '면접',
  'notice' = '발표 및 등록',
}

enum Uri {
  'application' = '/type',
  'first_apply' = '/schedules?type=first_apply',
  'interview' = '/schedules?type=interview',
  'notice' = '/schedules?type=notice',
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
              schedules={schedules}
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
  schedules: Schedule[];
  isAllFinish: boolean;
}

const ProgressItem: FC<ProgressItemProps> = ({
  index,
  schedules,
  isAllFinish,
}) => {
  const schedule = schedules[index];
  const FIRST_INDEX = 0;
  const isApplication = schedule.id === 'application';
  const isFirstApply = schedule.id === 'first_apply';
  let isProgressing = isProgressingSchedule(schedule);
  isProgressing = isFirstApply
    ? getFirstApplyStatus(schedule).isApplying
    : isProgressing;
  const isFinished = isFinishedSchedule(schedule);
  return (
    <>
      {index !== FIRST_INDEX && (
        <S.VerticalLine
          isBlue={isAllFinish ? false : isProgressing || isFinished}
        />
      )}
      <S.ProgressItemWrapper
        isAble={
          isApplication
            ? isProgressing
            : isFirstApply &&
              isFinishedSchedule(schedules[0]) &&
              !getFirstApplyStatus(schedule).isFinished
            ? true
            : isFinishedSchedule(schedules[index - 1]) &&
              !isFinishedSchedule(schedules[index])
        }
      >
        <Link
          to={
            isApplication
              ? isProgressing
                ? '/type'
                : ''
              : isFirstApply &&
                isFinishedSchedule(schedules[0]) &&
                !getFirstApplyStatus(schedule).isFinished
              ? Uri['first_apply']
              : isFinishedSchedule(schedules[index - 1]) &&
                !isFinishedSchedule(schedules[index])
              ? Uri[schedule.id]
              : ''
          }
        >
          <S.ProgressTitle isBlue={isProgressing}>
            {Progress[schedule.id]}
          </S.ProgressTitle>
        </Link>
        <Link
          to={
            isApplication
              ? isProgressing
                ? '/type'
                : ''
              : isFirstApply &&
                isFinishedSchedule(schedules[0]) &&
                !getFirstApplyStatus(schedule).isFinished
              ? Uri['first_apply']
              : isFinishedSchedule(schedules[index - 1]) &&
                !isFinishedSchedule(schedules[index])
              ? Uri[schedule.id]
              : ''
          }
        >
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
