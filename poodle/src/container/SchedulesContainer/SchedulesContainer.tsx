import React, { FC, useEffect } from 'react';
import Schedules from '@/components/Schedules/Schedules';
import { useSchedules } from '@/lib/utils/function';

const SchedulesContainer: FC = () => {
  const [
    schedules,
    getSchedulesError,
    isLoading,
    getSchedules,
  ] = useSchedules();
  
  
  useEffect(() => {
    getSchedules();
  }, [])

  return (
    <Schedules
      schedules={schedules}
      getSchedulesError={getSchedulesError}
      isLoading={isLoading}
      getSchedules={getSchedules}
    />
  );
};

export default SchedulesContainer;
