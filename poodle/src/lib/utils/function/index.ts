import { useHistory } from 'react-router-dom';
import { useCallback, useState, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reGenerateToken } from '@/core/redux/actions/Header';
import { RootState } from '@/core/redux/reducer';
import { Schedule } from '@/core/redux/actions/Main';
import { schedules as createSchedulesAction } from '@/core/redux/actions/Main';
import ErrorType from '../type';
import { userStatus as createUserStatusAction } from '@/core/redux/actions/Mypage';
import { UserStatus } from '@/lib/api/mypage';

export const allPhoneNumCheck = ({
  protectorPhoneNum,
  phoneNum,
  schoolPhoneNum,
  gradeType,
}: any) => {
  if (gradeType === 'GED') {
    return phoneNumCheck(protectorPhoneNum) && phoneNumCheck(phoneNum);
  } else {
    return (
      phoneNumCheck(protectorPhoneNum) &&
      phoneNumCheck(phoneNum) &&
      phoneNumCheck(schoolPhoneNum)
    );
  }
};

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
    token: { access_token, refresh_token },
    isLogin,
  } = useSelector((state: RootState) => state.Header);
  return {
    accessToken: access_token,
    refreshToken: refresh_token,
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
    user: {
      ...Header.user,
      isLogin: Header.isLogin,
    },
  }));

  return user;
};

export const TIME = '2020-11-28';

export const getDateObject = (date: string = TIME) =>
  date ? new Date(date) : new Date();

export const getTime = (date: string = TIME) => getDateObject(date).getTime();

export const getScheduleTimes = (schedule: Schedule) => {
  const startTime = getTime(schedule.start_date);
  const endTime = getTime(schedule.end_date);
  const nowTime = getTime();

  return [startTime, nowTime, endTime];
};

export const isNotStartedSchedule = (schedule: Schedule) => {
  const [startTime, nowTime] = getScheduleTimes(schedule);

  return nowTime < startTime;
};

export const isFinishedSchedule = (schedule: Schedule) => {
  const [, nowTime, endTime] = getScheduleTimes(schedule);

  return endTime < nowTime;
};

export const isProgressingSchedule = (schedule: Schedule) => {
  const [startTime, nowTime, endTime] = getScheduleTimes(schedule);

  return startTime <= nowTime && nowTime <= endTime;
};

export const getDate = (timeString: string) => {
  const time = new Date(timeString);
  const year = time.getFullYear().toString();
  const month = (time.getMonth() + 1).toString().padStart(2, '0');
  const date = time.getDate().toString().padStart(2, '0');
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');

  return [year, month, date, hours, minutes];
};

export const getDifferenceDate = (date1: Date, date2: Date) => {
  const date1Time = new Date(
    date1.getFullYear(),
    date1.getMonth(),
    date1.getDate(),
  ).getTime();
  const date2Time = new Date(
    date2.getFullYear(),
    date2.getMonth(),
    date2.getDate(),
  ).getTime();
  const difference = Math.abs(date2Time - date1Time);

  return Math.ceil(difference / (1000 * 3600 * 24));
};

export const useSchedules = (): [
  Schedule[],
  ErrorType,
  boolean,
  () => void,
] => {
  const dispatch = useDispatch();
  const { schedules, getSchedulesError, isLoading } = useSelector(
    ({ Main: main, Loading: loading }: RootState) => ({
      schedules: main.schedules,
      isLoading: loading['main/SCHEDULES'],
      getSchedulesError: main.error,
    }),
  );
  const getSchedules = () => {
    dispatch(createSchedulesAction());
  };

  return [schedules, getSchedulesError, isLoading, getSchedules];
};

export const getFullDateText = (time: string) => {
  const [year, month, date, hours, minutes] = getDate(time);

  return `${year}년 ${month}월 ${date}일 ${hours}:${minutes}`;
};

export const useUserStatus = (): [
  UserStatus,
  ErrorType,
  () => void,
  boolean,
] => {
  const dispatch = useDispatch();
  const { userStatus, userStatusError, isLoading } = useSelector(
    ({ Mypage: mypage, Loading: loading }: RootState) => ({
      userStatus: mypage.userStatus,
      userStatusError: mypage.userStatueError,
      isLoading: loading['mypage/USER_STATUS'],
    }),
  );

  const getUserStatus = () => {
    dispatch(createUserStatusAction());
  };

  return [userStatus, userStatusError, getUserStatus, isLoading];
};

export const getIsFinish = () => {
  const time = getTime();
  const finishTime = getTime('2020-11-30');

  return finishTime <= time;
};
