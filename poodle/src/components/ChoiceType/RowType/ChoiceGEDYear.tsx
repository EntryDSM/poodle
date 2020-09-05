import React, { FC } from 'react';
import { TypeElementContent } from '@/styles/ChoiceType';
import { Dropdown } from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';
import { getMONTH, getDAY, getYEAR } from '@/lib/utils/function';

interface Props {
  describe: string;
  yearChangeHandler: (value: string) => void;
  monthChangeHandler: (value: string) => void;
  year: string;
  month: string;
}

const ChoiceGEDYear: FC<Props> = ({
  describe,
  yearChangeHandler,
  monthChangeHandler,
  year,
  month,
}) => {
  return (
    <DefaultRow title='졸업 연도'>
      <TypeElementContent>
        <div>
          <Dropdown
            onChange={yearChangeHandler}
            options={getYEAR(2000, 2020)}
            value={year}
            width='100px'
          />
          <span className='dropdownText'>년</span>
          <Dropdown
            onChange={monthChangeHandler}
            options={getMONTH(1, 12)}
            value={month}
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

export default ChoiceGEDYear;
