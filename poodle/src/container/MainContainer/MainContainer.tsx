import React, { FC, useCallback, useEffect } from 'react';
import Main from '@/components/Main/Main';
import { useSchedules } from '@/lib/utils/function';
import ModalContainer from '@/container/common/ModalContainer/ModalContainer';

const MainContainer: FC = () => {
  const [
    schedules,
    getSchedulesError,
    isLoading,
    getSchedules,
  ] = useSchedules();
  return (
    <>
      <ModalContainer onClick={() => {}} />
      <Main
        schedules={schedules}
        isLoading={isLoading}
        getSchedulesError={getSchedulesError}
        getSchedules={getSchedules}
      />
    </>
  );
};

export default MainContainer;
