import React, { FC, useState, useEffect } from 'react';
import { DefaultRow } from '..';
import { Input } from '@/components/default/ApplicationFormDefault';
import { InfoElementContent } from '@/styles/Info';
import { isEmptyCheck } from '@/lib/utils/function';

interface Props {
  describe: string;
  valueChangeHandler: (value: string) => void;
  schoolPhoneNum: string;
  isError: boolean;
}

const UserSchoolPhoneNumRow: FC<Props> = ({
  describe,
  valueChangeHandler,
  schoolPhoneNum,
  isError,
}) => {
  const [isEmpty, emptyChange] = useState<boolean>(false);
  useEffect(() => {
    if (isError && isEmptyCheck(schoolPhoneNum)) {
      emptyChange(true);
    } else {
      emptyChange(false);
    }
  }, [isError, schoolPhoneNum]);
  return (
    <DefaultRow title='학교 연락처'>
      <InfoElementContent>
        <Input
          valueChangeHandler={valueChangeHandler}
          width='250px'
          isEmpty={isEmpty}
          type='number'
          value={schoolPhoneNum}
        />
        <div>
          <p>{describe}</p>
        </div>
      </InfoElementContent>
    </DefaultRow>
  );
};

export default UserSchoolPhoneNumRow;
