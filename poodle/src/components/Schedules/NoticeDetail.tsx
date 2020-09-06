import React, { FC, useEffect } from 'react';
import ScheduleDetail from './ScheduleDetail';
import { Schedule } from '@/core/redux/actions/Main';
import ErrorType from '@/lib/utils/type';
import { isProgressingSchedule, getFullDateText } from '@/lib/utils/function';
import {
  FAIL_INFO,
  WAIT_INFO,
  FINAL_PASS_INFO,
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
  const isProgressing = isProgressingSchedule(schedules[NOTICE_INDEX]);
  const wait = WAIT_INFO(getFullDateText(schedules[NOTICE_INDEX].start_date));
  const notice = INTERVIEW_PASS_INFO(
    getFullDateText(schedules[NOTICE_INDEX].end_date),
  );
  const fail = FAIL_INFO;

  useEffect(() => {
    getUserStatus();
  }, []);

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
            isPass ? (isProgressing ? notice.title : wait.title) : fail.title
          }
          explains={
            isPass
              ? isProgressing
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
