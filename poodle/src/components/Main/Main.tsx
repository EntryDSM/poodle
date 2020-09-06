import React, { FC, useEffect, useMemo } from 'react';
import * as S from '@/styles/Main';
import ContentHeader from '@/components/default/common/ContentHeader';
import ProgressBar from './ProgressBar/ProgressBar';
import { Schedule } from '@/core/redux/actions/Main';
import { Explain, AllFinishExplain } from './';
import {
  isNotStartedSchedule,
  isProgressingSchedule,
  isFinishedSchedule,
} from '@/lib/utils/function';
import ErrorType from '@/lib/utils/type';

interface Props {
  schedules: Schedule[];
  getSchedulesError: ErrorType;
  isLoading: boolean;
  getSchedules: () => void;
}

const Main: FC<Props> = ({
  schedules,
  getSchedulesError,
  isLoading,
  getSchedules,
}) => {
  const nextScheduleIndex = useMemo(() => {
    let index = -1;
    if (
      !schedules.some((schedule, i) => {
        if (isNotStartedSchedule(schedule)) {
          index = i;
          return true;
        }
      })
    ) {
      index = 4;
    }
    return index;
  }, [schedules]);

  useEffect(() => {
    getSchedules();
  }, []);

  useEffect(() => {
    if (getSchedulesError.status) {
      alert(`Error code: ${getSchedulesError.status} 일정 불러오기 실패!`);
    }
  }, [getSchedulesError]);

  return (
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
          {!!schedules.length ? (
            isNotStartedSchedule(schedules[0]) ? (
              <Explain schedule={schedules[0]} isProgressing={false} />
            ) : isFinishedSchedule(schedules[3]) ? (
              <AllFinishExplain />
            ) : isProgressingSchedule(schedules[nextScheduleIndex - 1]) ? (
              <Explain
                schedule={schedules[nextScheduleIndex - 1]}
                isProgressing={true}
              />
            ) : (
              <Explain
                schedule={schedules[nextScheduleIndex]}
                isProgressing={false}
              />
            )
          ) : (
            ''
          )}
        </S.ContentBlock>
        <ProgressBar schedules={schedules} isLoading={isLoading} />
      </S.MainContainer>
    </S.MainWrapper>
  );
};

export default Main;
