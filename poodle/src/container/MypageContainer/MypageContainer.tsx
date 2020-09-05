import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/core/redux/reducer';
import { Mypage } from '@/components';
import {
  process as createProcessAction,
  userStatus as createUserStatusAction,
} from '@/core/redux/actions/Mypage';

const MypageContainer: FC = () => {
  const dispatch = useDispatch();
  const { process, userStatus, userStatusError } = useSelector(
    ({ Mypage: mypage, Loading: loading }: RootState) => ({
      process: {
        data: mypage.process,
        error: mypage.processError,
        loading: loading['mypage/PROCESS'],
      },
      userStatus: mypage.userStatus,
      userStatusError: mypage.userStatueError,
    }),
  );

  const getProcess = () => {
    dispatch(createProcessAction());
  };

  const getUserStatus = () => {
    dispatch(createUserStatusAction());
  };

  return (
    <Mypage
      process={process}
      getProcess={getProcess}
      getUserStatus={getUserStatus}
      userStatus={userStatus}
      userStatusError={userStatusError}
    />
  );
};

export default MypageContainer;
