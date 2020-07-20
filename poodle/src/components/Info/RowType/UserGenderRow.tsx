import React, { FC, useCallback } from 'react';
import { DefaultRowWithPicture } from '..';
import {
  Radio,
  RadioGroupProvider,
} from '@/components/default/ApplicationFormDefault';
import { InfoElementContent } from '@/styles/Info';

interface Props {
  valueChangeHandler: (value: string) => void;
  value: string;
}

const UserGenderRow: FC<Props> = ({ valueChangeHandler, value }) => {
  const radioClickHandler = useCallback(
    (value: string) => {
      valueChangeHandler(value);
    },
    [valueChangeHandler],
  );
  return (
    <DefaultRowWithPicture title='성별'>
      <InfoElementContent>
        <div>
          <RadioGroupProvider onChange={radioClickHandler} value={value}>
            <Radio value='male'>남자</Radio>
            <Radio value='female'>여자</Radio>
          </RadioGroupProvider>
        </div>
      </InfoElementContent>
    </DefaultRowWithPicture>
  );
};

export default UserGenderRow;
