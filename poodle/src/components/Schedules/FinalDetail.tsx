import React, { FC, useEffect } from 'react';
import ScheduleDetail from './ScheduleDetail';
import { Schedule } from '@/core/redux/actions/Main';
import ErrorType from '@/lib/utils/type';
import { isProgressingSchedule, getFullDateText } from '@/lib/utils/function';
import {
  FAIL_INFO,
  WAIT_INFO,
  FINAL_PASS_INFO,
  FINAL_FAIL_INFO,
} from './SchedulesConstance';

interface Props {
  isPass: boolean;
  userStatusError: ErrorType;
  getUserStatus: () => void;
  isLoading: boolean;
}

const FinalDetail: FC<Props> = ({
  isPass,
  userStatusError,
  getUserStatus,
  isLoading,
}) => {
  const final = FINAL_PASS_INFO;
  const fail = FINAL_FAIL_INFO;

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
          title={isPass ? final.title : fail.title}
          explains={isPass ? final.explains : fail.explains}
        />
      )}
    </>
  );
};

export default FinalDetail;
