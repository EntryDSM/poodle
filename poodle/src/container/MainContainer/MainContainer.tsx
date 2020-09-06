import React, { FC } from 'react';
import Main from '@/components/Main/Main';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/core/redux/reducer';
import { schedules as createSchedulesAction } from '@/core/redux/actions/Main';

const MainContainer: FC = () => {
  const dispatch = useDispatch();
  const { schedules, isLoading } = useSelector(
    ({ Main: main, Loading: loading }: RootState) => ({
      schedules: main.schedules,
      isLoading: loading['main/SCHEDULES'],
    }),
  );
  const getScheduls = () => {
    dispatch(createSchedulesAction());
  };
  return (
    <Main
      schedules={schedules}
      isLoading={isLoading}
      getScheduls={getScheduls}
    />
  );
};

export default MainContainer;
