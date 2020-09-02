import React, { FC } from 'react';
import { TypeElementContent } from '@/styles/ChoiceType';

import {
  Radio,
  RadioGroupProvider,
} from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';

interface Props {
  valueChangeHandler: (value: string) => void;
  graduationStatus: string;
}

const GraduationStatus: FC<Props> = ({
  valueChangeHandler,
  graduationStatus,
}) => (
  <DefaultRow title='졸업 구분'>
    <TypeElementContent>
      <div>
        <RadioGroupProvider
          onChange={valueChangeHandler}
          value={graduationStatus}
        >
          <Radio value='UNGRADUATED'>졸업예정자</Radio>
          <Radio value='GRADUATED'>졸업자</Radio>
          <Radio value='GED'>검정고시</Radio>
        </RadioGroupProvider>
      </div>
    </TypeElementContent>
  </DefaultRow>
);

export default GraduationStatus;
