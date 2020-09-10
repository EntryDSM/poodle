import React, { FC } from 'react';
import { FirstApplyDetail } from '@/components/Schedules';
import { Schedule } from '@/core/redux/actions/Main';
import { useUserStatus } from '@/lib/utils/function';

interface Props {
  schedules: Schedule[];
}

const FirstApplyContainer: FC<Props> = ({ schedules }) => {
  const [
    userStatus,
    userStatusError,
    getUserStatus,
    isLoading,
  ] = useUserStatus();
  return (
    <FirstApplyDetail
      schedules={schedules}
      isPass={userStatus.passed_first_apply}
      userStatusError={userStatusError}
      getUserStatus={getUserStatus}
      isLoading={isLoading}
    />
  );
};

export default FirstApplyContainer;
