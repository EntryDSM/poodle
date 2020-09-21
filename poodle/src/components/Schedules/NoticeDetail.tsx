import React, { FC, useEffect } from 'react';
import ScheduleDetail from './ScheduleDetail';
import { Schedule } from '@/core/redux/actions/Main';
import ErrorType from '@/lib/utils/type';
import {
  getFullDateText,
  isNotStartedSchedule,
  useReGenerateTokenAndDoCallback,
} from '@/lib/utils/function';
import {
  FAIL_INFO,
  WAIT_INFO,
  INTERVIEW_PASS_INFO,
} from './SchedulesConstance';

interface Props {
  schedules: Schedule[];
  isPass: boolean;
  userStatusError: ErrorType;
  getUserStatus: () => void;
  isLoading: boolean;
}

const NOTICE_INDEX = 3;

const NoticeDetail: FC<Props> = ({
  schedules,
  isPass,
  userStatusError,
  getUserStatus,
  isLoading,
}) => {
  const reGenerateTokenAndGetUserStatus = useReGenerateTokenAndDoCallback(
    getUserStatus,
  );
  const isStarted = !isNotStartedSchedule(schedules[NOTICE_INDEX]);
  const wait = WAIT_INFO(getFullDateText(schedules[NOTICE_INDEX].start_date));
  const notice = INTERVIEW_PASS_INFO(
    getFullDateText(schedules[NOTICE_INDEX].end_date),
  );
  const fail = FAIL_INFO;

  useEffect(() => {
    getUserStatus();
  }, []);

  useEffect(() => {
    if (userStatusError.status === 401) {
      reGenerateTokenAndGetUserStatus();
    } else if (userStatusError.status) {
      alert(`Error code: ${userStatusError.status} 상태 불러오기 실패!`);
    }
  }, [userStatusError]);

  return (
    <>
      {isLoading ? (
        '합격 여부를 불러오는 중입니다...'
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
