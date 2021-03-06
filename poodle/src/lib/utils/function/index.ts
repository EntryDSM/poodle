import { useHistory } from 'react-router-dom';
import { useCallback, useState, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reGenerateToken } from '@/core/redux/actions/Header';
import { RootState } from '@/core/redux/reducer';
import { Schedule } from '@/core/redux/actions/Main';
import { schedules as createSchedulesAction } from '@/core/redux/actions/Main';
import ErrorType from '../type';
import {
  userStatus as createUserStatusAction,
  getFirstPassStatus as createGetFirstPassStatusAction,
  getFinalPassStatus as createGetFinalPassStatusAction,
  resetMypage as createResetMypage,
} from '@/core/redux/actions/Mypage';
import { UserStatus, FirstPassStatus, FinalPassStatus } from '@/lib/api/mypage';

export const allPhoneNumCheck = ({
  protectorPhoneNum,
  phoneNum,
  schoolPhoneNum,
  homePhoneNumber,
  gradeType,
}: any) => {
  if (gradeType === 'GED') {
    return (
      phoneNumCheck(protectorPhoneNum) &&
      phoneNumCheck(phoneNum) &&
      phoneNumCheckExceptLength(homePhoneNumber)
    );
  } else {
    return (
      phoneNumCheck(protectorPhoneNum) &&
      phoneNumCheck(phoneNum) &&
      phoneNumCheck(schoolPhoneNum) &&
      phoneNumCheckExceptLength(homePhoneNumber)
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

export const isScoreRangeAble = (score: number) => {
  if (score > 100 || score < 60) {
    return false;
  }
  return true;
};

export const phoneNumCheck = (phoneNum: string) => {
  if (phoneNum.length === 0) return false;
  const rxg = new RegExp(
    '(^\\+82[.-][1-9]\\d?[.-]|^\\(?0[0-9]\\d?\\)?[.-]?)?[0-9]\\d{2,3}[.-]\\d{4}$',
  );
  const result = rxg.test(phoneNum);
  if (!result) return false;
  return true;
};

export const phoneNumCheckExceptLength = (phoneNum: string) => {
  if (phoneNum.length === 0) return true;

  const rxg = new RegExp(
    '(^\\+82[.-][1-9]\\d?[.-]|^\\(?0[0-9]\\d?\\)?[.-]?)?[0-9]\\d{2,3}[.-]\\d{4}$',
  );
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
  orderBy?: 'desc' | 'asc',
): { VALUE: string; LABEL: string }[] => {
  const buf = [];
  for (
    let YEAR = setStart(startYear, lastYear, orderBy);
    setRule(YEAR, startYear, lastYear, orderBy);
    YEAR = setIncreaseOrDecrease(YEAR, orderBy)
  ) {
    const stringedYEAR = YEAR.toString();
    buf.push({
      VALUE: stringedYEAR,
      LABEL: stringedYEAR,
    });
  }
  return buf;
};

const setRule = (
  value: number,
  start: number,
  last: number,
  orderBy: 'desc' | 'asc' | undefined,
) => {
  return orderBy === 'desc' ? value >= start : value <= last;
};
const setStart = (
  start: number,
  last: number,
  orderBy: 'desc' | 'asc' | undefined,
) => {
  return orderBy === 'desc' ? last : start;
};
const setIncreaseOrDecrease = (
  value: number,
  orderBy: 'desc' | 'asc' | undefined,
) => {
  return orderBy === 'desc' ? value - 1 : value + 1;
};

export const getMONTH = (
  startMonth: number,
  lastMonth: number,
  orderBy?: 'desc' | 'asc',
): { VALUE: string; LABEL: string }[] => {
  const buf = [];
  for (
    let MONTH = setStart(startMonth, lastMonth, orderBy);
    setRule(MONTH, startMonth, lastMonth, orderBy);
    MONTH = setIncreaseOrDecrease(MONTH, orderBy)
  ) {
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
  year: number,
  month: number,
  orderBy?: 'desc' | 'asc',
): { VALUE: string; LABEL: string }[] => {
  const buf = [];
  let lastDay = getLastDayOfMonth(year, month);
  for (
    let DAY = setStart(startDay, lastDay, orderBy);
    setRule(DAY, startDay, lastDay, orderBy);
    DAY = setIncreaseOrDecrease(DAY, orderBy)
  ) {
    const stringedDAY = DAY.toString();
    const value = stringedDAY.padStart(2, '0');
    buf.push({
      VALUE: value,
      LABEL: stringedDAY,
    });
  }
  return buf;
};

export const getLastDayOfMonth = (year: number, month: number) => {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      return 31;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      return 30;
    }
    case 2:
      {
        if (year % 4 === 0) return 29;
      }
      return 28;
  }
  return 31;
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
  const timer = useRef<any>(0);
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

// export const TIME = '2020-10-22 17:01';
export const TIME = '';

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

export const getDate = (timeString: string = TIME) => {
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
  const finishTime = getTime('2020-11-15');

  return finishTime <= time;
};

export const getIsStarted = () => {
  const time = getTime();
  const startTime = getTime('2020-10-19 00:00');

  return startTime <= time;
};

export const isFinishApplicationApply = () => {
  const time = getTime();
  const endTime = getTime('2020-10-22 17:00');

  return endTime < time;
};

export const getFirstApplyStatus = (schedule: Schedule) => {
  const [year, month, date] = getDate(schedule.start_date);
  const startTime = getTime(schedule.start_date);
  const nowTime = getTime();
  const endTime = getTime(`${year}-${month}-${date} 23:59`);
  const isApplying = startTime <= nowTime && nowTime <= endTime;
  const isFinished = endTime < nowTime;

  return {
    isApplying,
    isFinished,
  };
};

export const phoneNumSetForm = (
  event: React.KeyboardEvent<HTMLInputElement>,
  phoneNum: string,
  valueChangeHandler: (value: string) => void,
) => {
  const parsedValue = getParsedFormPhoneNum(phoneNum);
  valueChangeHandler(parsedValue);
};

export const getParsedFormPhoneNum = (phoneNum: string) => {
  return phoneNum
    .replace(/[^0-9]/g, '')
    .replace(
      /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
      '$1-$2-$3',
    )
    .replace('--', '-');
};

export const isLastTextBar = (text: string) => {
  const secondLastText = text[text.length - 2];
  const lastText = text[text.length - 1];
  if (secondLastText === '-' || lastText === '-') return true;
  return false;
};

export const arrayToString = (array: any[]) => {
  let buffer = '';
  array.map(data => {
    buffer = buffer + data;
  });
  return buffer;
};

export const isAbleAccessToken = () => {
  const token = localStorage.getItem('accessToken');
  if (!token) return false;
  return true;
};

export const useFirstPassStatus = (): [
  boolean,
  ErrorType,
  () => void,
  boolean,
] => {
  const dispatch = useDispatch();
  const { isPassedFirst, getFirstPassStatusError, isLoading } = useSelector(
    ({ Mypage: mypage, Loading: loading }: RootState) => ({
      isPassedFirst: mypage.isPassedFirst,
      getFirstPassStatusError: mypage.getFirstPassStatusError,
      isLoading: loading['mypage/GET_FIRST_PASS_STATUS'],
    }),
  );

  const getFirstPassStatus = () => {
    dispatch(createGetFirstPassStatusAction());
  };

  return [
    isPassedFirst,
    getFirstPassStatusError,
    getFirstPassStatus,
    isLoading,
  ];
};

export const useFinalPassStatus = (): [
  boolean,
  ErrorType,
  () => void,
  boolean,
] => {
  const dispatch = useDispatch();
  const { isPassedFinal, getFinalPassStatusError, isLoading } = useSelector(
    ({ Mypage: mypage, Loading: loading }: RootState) => ({
      isPassedFinal: mypage.isPassedFirst,
      getFinalPassStatusError: mypage.getFinalPassStatusError,
      isLoading: loading['mypage/GET_FINAL_PASS_STATUS'],
    }),
  );

  const getFinalPassStatus = () => {
    dispatch(createGetFinalPassStatusAction());
  };

  return [
    isPassedFinal,
    getFinalPassStatusError,
    getFinalPassStatus,
    isLoading,
  ];
};

export const useResetMyPageStatus = (): [() => void] => {
  const dispatch = useDispatch();
  const resetMypage = () => {
    dispatch(createResetMypage());
  };

  return [resetMypage];
};
