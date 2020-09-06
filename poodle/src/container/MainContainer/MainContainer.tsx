import React, { FC } from 'react';
import Main from '@/components/Main/Main';
import { useSchedules } from '@/lib/utils/function';

const MainContainer: FC = () => {
  const [
    schedules,
    getSchedulesError,
    isLoading,
    getSchedules,
  ] = useSchedules();
  return (
    <Main
      schedules={schedules}
      isLoading={isLoading}
      getSchedulesError={getSchedulesError}
      getSchedules={getSchedules}
    />
  );
};

export default MainContainer;
