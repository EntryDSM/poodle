import React, { FC } from 'react';
import { FirstApplyDetail } from '@/components/Schedules';
import { Schedule } from '@/core/redux/actions/Main';
import { useFirstPassStatus } from '@/lib/utils/function';

interface Props {
  schedules: Schedule[];
}

const FirstApplyContainer: FC<Props> = ({ schedules }) => {
  const [
    isPassedFirst,
    getFirstPassStatusError,
    getFirstPassStatus,
    isLoading,
  ] = useFirstPassStatus();

  return (
    <FirstApplyDetail
      schedules={schedules}
      isPass={isPassedFirst}
      getPassStatusError={getFirstPassStatusError}
      getPassStatus={getFirstPassStatus}
      isLoading={isLoading}
    />
  );
};

export default FirstApplyContainer;
