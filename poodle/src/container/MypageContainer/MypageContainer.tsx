import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/core/redux/reducer';
import { Mypage } from '@/components';
import { process as createProcessAction } from '@/core/redux/actions/Mypage';

const MypageContainer: FC = () => {
  const dispatch = useDispatch();
  const { process } = useSelector(
    ({ Mypage: mypage, Loading: loading }: RootState) => ({
      process: {
        data: mypage.process,
        error: mypage.processError,
        loading: loading['mypage/PROCESS'],
      },
    }),
  );
  const getProcess = () => {
    dispatch(createProcessAction());
  };
  return <Mypage process={process} getProcess={getProcess} />;
};

export default MypageContainer;
