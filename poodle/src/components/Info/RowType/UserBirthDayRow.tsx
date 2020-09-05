import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultRowWithPicture } from '..';
import { Dropdown } from '@/components/default/ApplicationFormDefault';
import { InfoElementContent } from '@/styles/Info';
import { getDAY, getMONTH, getYEAR } from '@/lib/utils/function';
import { setDay, setMonth, setYear } from '@/core/redux/actions/Info';
import { RootState } from '@/core/redux/reducer';

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

const UserBirthDayRow: FC<Props> = () => {
  const dispatch = useDispatch();
  const { day, month, year } = useSelector(
    (state: RootState) => state.InfoState,
  );
  const dayChange = (day: string) => dispatch(setDay({ day }));
  const monthChange = (month: string) => dispatch(setMonth({ month }));
  const yearChange = (year: string) => dispatch(setYear({ year }));
  return (
    <DefaultRowWithPicture title='생년월일'>
      <InfoElementContent>
        <div>
          <Dropdown
            onChange={yearChange}
            options={YEAR}
            width='110px'
            value={year}
          />
          <span>년</span>
          <Dropdown
            onChange={monthChange}
            options={MONTH}
            width='80px'
            value={month}
          />
          <span>월</span>
          <Dropdown
            onChange={dayChange}
            options={DAY}
            width='80px'
            value={day}
          />
          <span>일</span>
        </div>
      </InfoElementContent>
    </DefaultRowWithPicture>
  );
};

export default UserBirthDayRow;
