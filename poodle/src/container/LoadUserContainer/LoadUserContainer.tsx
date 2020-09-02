import React, { FC, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  reset,
  getUser as createGetUserAction,
} from '@/core/redux/actions/Header';
import { RootState } from '@/core/redux/reducer';
import { useReGenerateTokenAndDoCallback } from '@/lib/utils/function';

interface Props {
  children: React.ReactElement;
}

const LoadUserContainer: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const { getUserError } = useSelector((state: RootState) => ({
    getUserError: state.Header.getUserError,
  }));

  const getUser = useCallback(() => {
    dispatch(createGetUserAction());
  }, [dispatch]);

  const reGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(getUser);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (accessToken && refreshToken) {
      getUser();
    } else {
      dispatch(reset());
    }
  }, []);

  useEffect(() => {
    if (getUserError.status === 403) {
      reGenerateTokenAndDoCallback();
    } else if (getUserError.status) {
      dispatch(reset());
    }
  }, [getUserError]);

  return children;
};

export default LoadUserContainer;
