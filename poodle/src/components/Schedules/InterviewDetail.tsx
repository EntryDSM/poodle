import React, { FC, useEffect } from 'react';
import ScheduleDetail from './ScheduleDetail';
import { Schedule } from '@/core/redux/actions/Main';
import ErrorType from '@/lib/utils/type';
import {
  isProgressingSchedule,
  getFullDateText,
  useReGenerateTokenAndDoCallback,
  isNotStartedSchedule,
  useResetMyPageStatus,
} from '@/lib/utils/function';
import {
  INTERVIEW_INFO,
  INTERVIEWING_INFO,
  FAIL_INFO,
} from './SchedulesConstance';

interface Props {
  schedules: Schedule[];
  isPass: boolean;
  getPassStatusError: ErrorType;
  getPassStatus: () => void;
  isLoading: boolean;
}

const INTERVIEW_INDEX = 2;
const NOTICE_INDEX = 3;

const InterviewDetail: FC<Props> = ({
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
  const isProgressing = isProgressingSchedule(schedules[INTERVIEW_INDEX]);
  const interview = INTERVIEW_INFO(
    getFullDateText(schedules[INTERVIEW_INDEX].start_date),
  );
  const interviewing = INTERVIEWING_INFO(
    getFullDateText(schedules[NOTICE_INDEX].start_date),
  );
  const fail = FAIL_INFO;

  useEffect(() => {
    getPassStatus();

    return () => {
      resetMypageStatus();
    };
  }, []);

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
            isPass
              ? isProgressing
                ? interviewing.title
                : interview.title
              : fail.title
          }
          explains={
            isPass
              ? isProgressing
                ? interviewing.explains
                : interview.explains
              : fail.explains
          }
        />
      )}
    </>
  );
};

export default InterviewDetail;
