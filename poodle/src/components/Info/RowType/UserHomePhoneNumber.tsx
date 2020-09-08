import React, { FC, useState, useEffect } from 'react';
import { DefaultRow } from '..';
import { Input } from '@/components/default/ApplicationFormDefault';
import { InfoElementContent } from '@/styles/Info';
import { isEmptyCheck } from '@/lib/utils/function';

interface Props {
  describe: string;
  valueChangeHandler: (value: string) => void;
  homeNumber: string;
  isError: boolean;
}

const UserProtectorPhoneNumRow: FC<Props> = ({
  describe,
  valueChangeHandler,
  homeNumber,
  isError,
}) => {
  const [isEmpty, emptyChange] = useState<boolean>(false);
  useEffect(() => {
    if (isError && isEmptyCheck(homeNumber)) {
      emptyChange(true);
    } else {
      emptyChange(false);
    }
  }, [isError, homeNumber]);
  return (
    <DefaultRow title='자택 연락처'>
      <InfoElementContent>
        <Input
          valueChangeHandler={valueChangeHandler}
          width='250px'
          isEmpty={isEmpty}
          value={homeNumber}
        />
        <div>
          <p>{describe}</p>
        </div>
      </InfoElementContent>
    </DefaultRow>
  );
};

export default UserProtectorPhoneNumRow;
