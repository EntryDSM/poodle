import React, { FC, useEffect } from 'react';
import { TypeElementContent } from '@/styles/ChoiceType';
import { Dropdown } from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';
import graduationYearConstance from './constance/GraduationYearConstance';
import { getMONTH } from '@/lib/utils/function';

interface Props {
  describe: string;
  graduationYearChange: (value: string) => void;
  graduationMonthChange: (value: string) => void;
  graduationYear: string;
  graduationMonth: string;
}

const GraduationYear: FC<Props> = ({
  describe,
  graduationYearChange,
  graduationMonthChange,
  graduationYear,
}) => {
  return (
    <DefaultRow title='졸업 연도'>
      <TypeElementContent>
        <div>
          <Dropdown
            onChange={graduationYearChange}
            options={graduationYearConstance}
            value={graduationYear}
            width='100px'
          />
          <span className='dropdownText'>년</span>
          <Dropdown
            onChange={graduationMonthChange}
            options={getMONTH(1, 12)}
            value={graduationYear}
            width='100px'
          />
          <span className='dropdownText'>월</span>
        </div>
        <div>
          <p>{describe}</p>
        </div>
      </TypeElementContent>
    </DefaultRow>
  );
};

export default GraduationYear;
