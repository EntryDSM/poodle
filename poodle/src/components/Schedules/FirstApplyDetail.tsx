import React, { FC, useEffect } from 'react';
import ScheduleDetail from './ScheduleDetail';
import { Schedule, schedules } from '@/core/redux/actions/Main';
import {
  WAIT_INFO,
  PASS_INFO,
  FAIL_INFO,
} from '@/components/Schedules/SchedulesConstance';
import { isProgressingSchedule, getFullDateText } from '@/lib/utils/function';
import ErrorType from '@/lib/utils/type';

interface Props {
  schedules: Schedule[];
  isPass: boolean;
  userStatusError: ErrorType;
  getUserStatus: () => void;
  isLoading: boolean;
}

const FIRST_APPLY_INDEX = 1;
const INTERVIEW_INDEX = 2;

const FirstApplyDetail: FC<Props> = ({
  schedules,
  isPass,
  userStatusError,
  getUserStatus,
  isLoading,
}) => {
  const isProgressing = isProgressingSchedule(schedules[FIRST_APPLY_INDEX]);
  const wait = WAIT_INFO(
    getFullDateText(schedules[FIRST_APPLY_INDEX].start_date),
  );
  const pass = PASS_INFO(
    getFullDateText(schedules[INTERVIEW_INDEX].start_date),
  );
  const fail = FAIL_INFO;

  useEffect(() => {
    if (isProgressingSchedule(schedules[1])) {
      getUserStatus();
    }
  }, [schedules]);

  useEffect(() => {
    if (userStatusError.status) {
      alert(`Error code: ${userStatusError.status} 상태 불러오기 실패!`);
    }
  }, [userStatusError]);

  return (
    <>
      {isLoading ? (
        '합격 여부를 불러오는 중입니다...'
      ) : (
        <ScheduleDetail
          title={
            isProgressing ? (isPass ? pass.title : fail.title) : wait.title
          }
          explains={
            isProgressing
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
