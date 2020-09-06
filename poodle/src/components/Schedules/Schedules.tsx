import React, { FC, useEffect, useMemo } from 'react';
import * as S from '@/styles/Schedules';
import ContentHeader from '@/components/default/common/ContentHeader';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';
import { Schedule } from '@/core/redux/actions/Main';
import ErrorType from '@/lib/utils/type';
import {
  FirstApplyContainer,
  Interviewcontainer,
  NoticeContainer,
  FinalContainer,
} from '@/container/SchedulesContainer';
import { isFinishedSchedule } from '@/lib/utils/function';

interface Props {
  schedules: Schedule[];
  getSchedulesError: ErrorType;
  isLoading: boolean;
  getSchedules: () => void;
}

const Schedules: FC<Props> = ({
  schedules,
  getSchedulesError,
  isLoading,
  getSchedules,
}) => {
  const { type } = queryString.parse(window.location.search);
  useEffect(() => {
    getSchedules();
  }, []);

  useEffect(() => {
    if (getSchedulesError.status) {
      alert(`Error code: ${getSchedulesError.status} 일정 불러오기 실패!`);
    }
  }, [getSchedulesError]);

  return (
    <>
      <S.ApplyStatusWrapper>
        <S.SchedulesContainer>
          <ContentHeader
            padding='160px 0 78px'
            subTitle='대덕소프트웨어마이스터고등학교'
            title='2021 신입생 모집'
            underLineLength={315}
            titleFontSize={46}
          />
          {isLoading || !schedules.length
            ? '일정을 불러오는 중입니다...'
            : (type === 'first_apply' &&
                isFinishedSchedule(schedules[0]) &&
                !isFinishedSchedule(schedules[1]) && (
                  <FirstApplyContainer schedules={schedules} />
                )) ||
              (type === 'interview' &&
                isFinishedSchedule(schedules[1]) &&
                !isFinishedSchedule(schedules[2]) && (
                  <Interviewcontainer schedules={schedules} />
                )) ||
              (type === 'notice' &&
                isFinishedSchedule(schedules[2]) &&
                !isFinishedSchedule(schedules[3]) && (
                  <NoticeContainer schedules={schedules} />
                )) ||
              (type === 'final' && isFinishedSchedule(schedules[3]) && (
                <FinalContainer />
              )) || <Redirect to='/error' />}
        </S.SchedulesContainer>
      </S.ApplyStatusWrapper>
    </>
  );
};

export default Schedules;
