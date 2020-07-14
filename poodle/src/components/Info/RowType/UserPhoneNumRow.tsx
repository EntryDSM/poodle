import React, { FC, useState, useEffect } from 'react';
import { DefaultRow } from '..';
import { Input } from '../../default/ApplicationFormDefault';
import { InfoElementContent } from '../../../styles/Info';
import { isEmptyCheck } from '../../../lib/utils/function';

interface Props {
  describe: string;
  valueChangeHandler: (value: string) => void;
  phoneNum: string;
  isError: boolean;
}

const UserPhoneNumRow: FC<Props> = ({
  describe,
  valueChangeHandler,
  phoneNum,
  isError,
}) => {
  const [isEmpty, emptyChange] = useState<boolean>(false);
  useEffect(() => {
    if (isError && isEmptyCheck(phoneNum)) {
      emptyChange(true);
    } else {
      emptyChange(false);
    }
  }, [isError, phoneNum]);
  return (
    <DefaultRow title='본인 연락처'>
      <InfoElementContent>
        <Input
          valueChangeHandler={valueChangeHandler}
          width='250px'
          isEmpty={isEmpty}
          type='number'
          value={phoneNum}
        />
        <div>
          <p>{describe}</p>
        </div>
      </InfoElementContent>
    </DefaultRow>
  );
};

export default UserPhoneNumRow;
