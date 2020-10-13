import React, { FC, useEffect } from 'react';
import ScheduleDetail from './ScheduleDetail';
import { Schedule, schedules } from '@/core/redux/actions/Main';
import {
  WAIT_INFO,
  PASS_INFO,
  FAIL_INFO,
} from '@/components/Schedules/SchedulesConstance';
import {
  getFullDateText,
  useReGenerateTokenAndDoCallback,
  isNotStartedSchedule,
  useResetMyPageStatus,
} from '@/lib/utils/function';
import ErrorType from '@/lib/utils/type';

interface Props {
  schedules: Schedule[];
  isPass: boolean;
  getPassStatusError: ErrorType;
  getPassStatus: () => void;
  isLoading: boolean;
}

const FIRST_APPLY_INDEX = 1;
const INTERVIEW_INDEX = 2;

const FirstApplyDetail: FC<Props> = ({
  schedules,
  isPass,
  getPassStatusError,
  getPassStatus,
  isLoading,
}) => {
  const [resetMypageStatus] = useResetMyPageStatus();
  const reGenerateTokenAndGetUserStatus = useReGenerateTokenAndDoCallback(
    getPassStatus,
  );
  const isNotStarted = isNotStartedSchedule(schedules[FIRST_APPLY_INDEX]);
  const wait = WAIT_INFO(
    getFullDateText(schedules[FIRST_APPLY_INDEX].start_date),
  );
  const pass = PASS_INFO(
    getFullDateText(schedules[INTERVIEW_INDEX].start_date),
  );
  const fail = FAIL_INFO;

  useEffect(() => {
    if (!isNotStarted) {
      getPassStatus();
    }

    return () => {
      resetMypageStatus();
    };
  }, [schedules]);

  useEffect(() => {
    if (getPassStatusError.status === 401) {
      reGenerateTokenAndGetUserStatus();
    } else if (getPassStatusError.status) {
      alert(
        `Error code: ${getPassStatusError.status} 합격 여부 불러오기 실패!`,
      );
    }
  }, [getPassStatusError]);

  return (
    <>
      {isLoading ? (
        '합격 여부를 불러오는 중입니다...'
      ) : getPassStatusError.status ? (
        <h1>합격 여부를 불러오지 못했습니다.</h1>
      ) : (
        <ScheduleDetail
          title={
            !isNotStarted ? (isPass ? pass.title : fail.title) : wait.title
          }
          explains={
            !isNotStarted
              ? isPass
                ? pass.explains
                : fail.explains
              : wait.explains
          }
        />
      )}
    </>
  );
};

export default FirstApplyDetail;
