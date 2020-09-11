import React, { FC, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  reset,
  getUser as createGetUserAction,
  getStatus as createGetStatusAction,
} from '@/core/redux/actions/Header';
import { RootState } from '@/core/redux/reducer';
import { useReGenerateTokenAndDoCallback } from '@/lib/utils/function';

interface Props {
  children: React.ReactElement;
}

const LoadUserContainer: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const { getUserError, getStatusError } = useSelector((state: RootState) => ({
    getUserError: state.Header.getUserError,
    getStatusError: state.Header.getStatusError,
  }));

  const getUser = useCallback(() => {
    dispatch(createGetUserAction());
  }, [dispatch]);

  const getStatus = useCallback(() => {
    dispatch(createGetStatusAction());
  }, [dispatch]);

  const reGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(getUser);
  const getStatusGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(
    getStatus,
  );

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (accessToken && refreshToken) {
      getUser();
      getStatus();
    } else {
      dispatch(reset());
    }
  }, []);

  useEffect(() => {
    if (getUserError.status === 401) {
      reGenerateTokenAndDoCallback();
    } else if (getStatusError.status === 401) {
      getStatusGenerateTokenAndDoCallback();
    } else if (getUserError.status) {
      dispatch(reset());
    }
  }, [getUserError]);

  return children;
};

export default LoadUserContainer;
