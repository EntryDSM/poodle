import React, { FC, useEffect } from 'react';
import ScheduleDetail from './ScheduleDetail';
import { Schedule } from '@/core/redux/actions/Main';
import ErrorType from '@/lib/utils/type';
import {
  getFullDateText,
  isNotStartedSchedule,
  useReGenerateTokenAndDoCallback,
  useResetMyPageStatus,
} from '@/lib/utils/function';
import {
  FAIL_INFO,
  WAIT_INFO,
  INTERVIEW_PASS_INFO,
} from './SchedulesConstance';

interface Props {
  schedules: Schedule[];
  isPass: boolean;
  getPassStatusError: ErrorType;
  getPassStatus: () => void;
  isLoading: boolean;
}

const NOTICE_INDEX = 3;

const NoticeDetail: FC<Props> = ({
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
  const isStarted = !isNotStartedSchedule(schedules[NOTICE_INDEX]);
  const wait = WAIT_INFO(getFullDateText(schedules[NOTICE_INDEX].start_date));
  const notice = INTERVIEW_PASS_INFO(
    getFullDateText(schedules[NOTICE_INDEX].end_date),
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
          title={isPass ? (isStarted ? notice.title : wait.title) : fail.title}
          explains={
            isPass
              ? isStarted
                ? notice.explains
                : wait.explains
              : fail.explains
          }
        />
      )}
    </>
  );
};

export default NoticeDetail;
