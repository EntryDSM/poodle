import { useHistory } from 'react-router-dom';
import { useCallback, useState, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reGenerateToken } from '@/core/redux/actions/Header';
import { RootState } from '@/core/redux/reducer';

export const useRedirect = () => {
  const history = useHistory();
  const redirectToLink = useCallback(
    (link: string) => {
      history.push(link);
    },
    [history],
  );
  return redirectToLink;
};
export const isEmptyCheck = (text: string) => {
  if (text.length > 0) {
    return false;
  }
  return true;
};

export const phoneNumCheck = (phoneNum: string) => {
  const rxg = /^\(?0[1-9]\d\)?[1-9]\d{2,3}\d{4}$/;
  const result = rxg.test(phoneNum);
  if (!result) return false;
  return true;
};

export const useAuth = () => {
  const {
    token: { access_token },
    isLogin,
  } = useSelector((state: RootState) => state.Header);
  return {
    accessToken: access_token,
    isLogin,
  };
};

export const getYEAR = (
  startYear: number,
  lastYear: number,
): { VALUE: string; LABEL: string }[] => {
  const buf = [];
  for (let YEAR = startYear; YEAR <= lastYear; YEAR++) {
    const stringedYEAR = YEAR.toString();
    buf.push({
      VALUE: stringedYEAR,
      LABEL: stringedYEAR,
    });
  }
  return buf;
};

export const getMONTH = (
  startMonth: number,
  lastMonth: number,
): { VALUE: string; LABEL: string }[] => {
  const buf = [];
  for (let MONTH = startMonth; MONTH <= lastMonth; MONTH++) {
    const stringedMONTH = MONTH.toString();
    const value = stringedMONTH.padStart(2, '0');
    buf.push({
      VALUE: value,
      LABEL: stringedMONTH,
    });
  }
  return buf;
};

export const getDAY = (
  startDay: number,
  lastDay: number,
): { VALUE: string; LABEL: string }[] => {
  const buf = [];
  for (let DAY = startDay; DAY <= lastDay; DAY++) {
    const stringedDAY = DAY.toString();
    const value = stringedDAY.padStart(2, '0');
    buf.push({
      VALUE: value,
      LABEL: stringedDAY,
    });
  }
  return buf;
};

export const lPad = (str: string, padLen: Number, padStr: string) => {
  while (str.length < padLen) str = padStr + str;
  return str;
};

export const useTimer = (): [
  React.MutableRefObject<number>,
  (validitySecond: number) => void,
  () => void,
  number,
  string,
] => {
  const timer = useRef<number>(0);
  const [remainedTime, setRemainedTime] = useState(0);
  const getFormatedTime = useMemo(() => {
    const ONE_MINUTE = 60;
    const minute = Math.floor(remainedTime / ONE_MINUTE) + '';
    const second = (remainedTime % ONE_MINUTE) + '';
    return `${lPad(minute, 2, '0')}:${lPad(second, 2, '0')}`;
  }, [remainedTime]);
  const startTimer = (validitySecond: number) => {
    if (!timer.current) {
      setRemainedTime(validitySecond);
      timer.current = setInterval(() => {
        if (!validitySecond) return resetTimer();
        setRemainedTime(--validitySecond);
      }, 1000);
    }
  };
  const resetTimer = useCallback(() => {
    clearInterval(timer.current);
    timer.current = 0;
    setRemainedTime(0);
  }, []);
  return [timer, startTimer, resetTimer, remainedTime, getFormatedTime];
};

export const useReGenerateTokenAndDoCallback = (
  callback: (params?: any) => void,
  callbackParams?: any,
) => {
  const dispatch = useDispatch();

  const reGenerateTokenAndDoCallback = useCallback(() => {
    dispatch(reGenerateToken({ callback, callbackParams }));
  }, [dispatch]);

  return reGenerateTokenAndDoCallback;
};

export const clearLocalStorageAboutToken = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export const useUser = () => {
  const { user } = useSelector(({ Header }: RootState) => ({
    user: Header.user,
  }));

  return user;
};
