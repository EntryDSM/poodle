import React, { FC, useCallback, useEffect } from 'react';
import Main from '@/components/Main/Main';
import { useSchedules } from '@/lib/utils/function';
import { useDispatch } from 'react-redux';
import { modalOff, modalOn, NOTICE_MODAL } from '@/core/redux/actions/Modal';

const MainContainer: FC = () => {
  const [
    schedules,
    getSchedulesError,
    isLoading,
    getSchedules,
  ] = useSchedules();
  const dispatch = useDispatch();
  const noticeModalOn = useCallback(() => {
    dispatch(modalOn(NOTICE_MODAL));
  }, [dispatch]);
  const noticeModalOff = useCallback(() => {
    dispatch(modalOff(NOTICE_MODAL));
  }, [dispatch]);
  useEffect(() => {
    const isReadNotice = localStorage.getItem('isReadNotice');
    if (isReadNotice) return;
    noticeModalOn();
    return () => noticeModalOff();
  }, []);
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
