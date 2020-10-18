import React, { FC, useEffect } from 'react';
import { TypeElementContent } from '@/styles/ChoiceType';
import { Dropdown } from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';
import { getMONTH, getYEAR } from '@/lib/utils/function';

interface Props {
  describe: string;
  graduationYearChange: (value: string) => void;
  graduationMonthChange: (value: string) => void;
  graduationYear: string;
  graduationMonth: string;
  isUngraduated: boolean;
}

const GraduationYear: FC<Props> = ({
  describe,
  graduationYearChange,
  graduationMonthChange,
  graduationYear,
  graduationMonth,
  isUngraduated,
}) => {
  return (
    <DefaultRow title='졸업 연월'>
      <TypeElementContent>
        <div>
          <Dropdown
            onChange={graduationYearChange}
            options={getYEAR(2010, isUngraduated ? 2020 : 2021, 'desc')}
            value={graduationYear}
            width='100px'
            isAble={isUngraduated}
          />
          <span className='dropdownText'>년</span>
          <Dropdown
            onChange={graduationMonthChange}
            options={getMONTH(1, 12, 'desc')}
            value={graduationMonth}
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
