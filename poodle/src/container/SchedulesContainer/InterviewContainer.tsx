import React, { FC } from 'react';
import { InterviewDetail } from '@/components/Schedules';
import { Schedule } from '@/core/redux/actions/Main';
import { useUserStatus } from '@/lib/utils/function';

interface Props {
  schedules: Schedule[];
}

const InterviewContainer: FC<Props> = ({ schedules }) => {
  const [
    userStatus,
    userStatusError,
    getUserStatus,
    isLoading,
  ] = useUserStatus();
  return (
    <InterviewDetail
      schedules={schedules}
      isPass={userStatus.passed_first_apply}
      userStatusError={userStatusError}
      getUserStatus={getUserStatus}
      isLoading={isLoading}
    />
  );
};

export default InterviewContainer;
