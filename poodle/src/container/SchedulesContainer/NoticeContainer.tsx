import React, { FC } from 'react';
import { NoticeDetail } from '@/components/Schedules';
import { Schedule } from '@/core/redux/actions/Main';
import { useFinalPassStatus } from '@/lib/utils/function';

interface Props {
  schedules: Schedule[];
}

const NoticeContainer: FC<Props> = ({ schedules }) => {
  const [
    isPassedFinal,
    getFinalPassStatusError,
    getFinalPassStatus,
    isLoading,
  ] = useFinalPassStatus();

  return (
    <NoticeDetail
      schedules={schedules}
      isPass={isPassedFinal}
      getPassStatusError={getFinalPassStatusError}
      getPassStatus={getFinalPassStatus}
      isLoading={isLoading}
    />
  );
};

export default NoticeContainer;
