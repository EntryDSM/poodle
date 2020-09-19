import React, { FC, useState, useEffect } from 'react';
import { DefaultRow } from '..';
import { Input } from '@/components/default/ApplicationFormDefault';
import { InfoElementContent } from '@/styles/Info';
import { isEmptyCheck } from '@/lib/utils/function';

interface Props {
  describe: string;
  valueChangeHandler: (value: string) => void;
  protectorPhoneNum: string;
  isError: boolean;
}

const UserProtectorPhoneNumRow: FC<Props> = ({
  describe,
  valueChangeHandler,
  protectorPhoneNum,
  isError,
}) => {
  const [isEmpty, emptyChange] = useState<boolean>(false);
  useEffect(() => {
    if (isError && isEmptyCheck(protectorPhoneNum)) {
      emptyChange(true);
    } else {
      emptyChange(false);
    }
  }, [isError, protectorPhoneNum]);
  return (
    <DefaultRow title='보호자 연락처'>
      <InfoElementContent>
        <Input
          valueChangeHandler={valueChangeHandler}
          width='250px'
          isEmpty={isEmpty}
          value={protectorPhoneNum}
        />
        <div>
          <p>{describe}</p>
        </div>
      </InfoElementContent>
    </DefaultRow>
  );
};

export default UserProtectorPhoneNumRow;
