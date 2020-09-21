import React, { FC } from 'react';
import { NoticeDetail } from '@/components/Schedules';
import { Schedule } from '@/core/redux/actions/Main';
import { useUserStatus } from '@/lib/utils/function';

interface Props {
  schedules: Schedule[];
}

const NoticeContainer: FC<Props> = ({ schedules }) => {
  const [
    userStatus,
    userStatusError,
    getUserStatus,
    isLoading,
  ] = useUserStatus();
  return (
    <NoticeDetail
      schedules={schedules}
      isPass={userStatus.passed_interview}
      userStatusError={userStatusError}
      getUserStatus={getUserStatus}
      isLoading={isLoading}
    />
  );
};

export default NoticeContainer;
