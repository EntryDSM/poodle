import React, { FC, useState, useEffect, useCallback } from 'react';
import { DefaultRowWithPicture } from '..';
import { Dropdown } from '@/components/default/ApplicationFormDefault';
import { InfoElementContent } from '@/styles/Info';
import { getDAY, getMONTH, getYEAR } from './constance/UserBirthDayConstance';

interface options {
  VALUE: string;
  isChecked: boolean;
}

interface Props {
  valueChangeHandler: (value: string) => void;
  birthday: string;
}

const DAY = getDAY(1, 31);
const MONTH = getMONTH(1, 12);
const YEAR = getYEAR(2000, 2020);

const UserBirthDayRow: FC<Props> = ({ valueChangeHandler, birthday }) => {
  const [checkedDay, _checkedDayChange] = useState(DAY[0].VALUE);
  const [checkedMonth, _checkedMonthChange] = useState(MONTH[0].VALUE);
  const [checkedYear, _checkedYearChange] = useState(YEAR[0].VALUE);
  const getCheckedMenu = useCallback((options: options[]): options => {
    const checkedMenu = options.filter(menu => menu.isChecked);
    return checkedMenu[0];
  }, []);
  const checkedDayChange = useCallback((value: string) => {
    _checkedDayChange(value);
  }, []);
  const checkedMonthChange = useCallback((value: string) => {
    _checkedMonthChange(value);
  }, []);
  const checkedYearChange = useCallback((value: string) => {
    _checkedYearChange(value);
  }, []);
  const updateSavedData = useCallback((birthday: string) => {
    if (birthday.length > 0) {
      const buf = birthday.split('-');
      checkedDayChange(buf[2]);
      checkedMonthChange(buf[1]);
      checkedYearChange(buf[0]);
    }
  }, []);
  useEffect(() => {
    const birthdayText = `${checkedYear}-${checkedMonth}-${checkedDay}`;
    if (birthday === birthdayText) return;
    valueChangeHandler(birthdayText);
  }, [
    checkedYear,
    checkedMonth,
    checkedDay,
    valueChangeHandler,
    getCheckedMenu,
  ]);
  useEffect(() => {
    updateSavedData(birthday);
  }, [birthday]);
  return (
    <DefaultRowWithPicture title='생년월일'>
      <InfoElementContent>
        <div>
          <Dropdown
            onChange={checkedYearChange}
            options={YEAR}
            width='110px'
            value={checkedYear}
          />
          <span>년</span>
          <Dropdown
            onChange={checkedMonthChange}
            options={MONTH}
            width='80px'
            value={checkedMonth}
          />
          <span>월</span>
          <Dropdown
            onChange={checkedDayChange}
            options={DAY}
            width='80px'
            value={checkedDay}
          />
          <span>일</span>
        </div>
      </InfoElementContent>
    </DefaultRowWithPicture>
  );
};

export default UserBirthDayRow;
