import React, { FC } from 'react';
import { FinalDetail } from '@/components/Schedules';
import { Schedule } from '@/core/redux/actions/Main';
import { useUserStatus } from '@/lib/utils/function';

const FinalContainer: FC = () => {
  const [
    userStatus,
    userStatusError,
    getUserStatus,
    isLoading,
  ] = useUserStatus();
  return (
    <FinalDetail
      isPass={userStatus.printed_application_arrived}
      userStatusError={userStatusError}
      getUserStatus={getUserStatus}
      isLoading={isLoading}
    />
  );
};

export default FinalContainer;
