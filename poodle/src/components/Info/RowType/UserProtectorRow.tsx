import React, { FC, useState, useEffect } from 'react';
import { DefaultRow } from '..';
import { Input } from '@/components/default/ApplicationFormDefault';
import { InfoElementContent } from '@/styles/Info';
import { isEmptyCheck } from '@/lib/utils/function';

interface Props {
  valueChangeHandler: (value: string) => void;
  protectorName: string;
  isError: boolean;
}

const UserProtectorRow: FC<Props> = ({
  valueChangeHandler,
  protectorName,
  isError,
}) => {
  const [isEmpty, emptyChange] = useState<boolean>(false);
  useEffect(() => {
    if (isError && isEmptyCheck(protectorName)) {
      emptyChange(true);
    } else {
      emptyChange(false);
    }
  }, [isError, protectorName]);
  return (
    <DefaultRow title='보호자 이름'>
      <InfoElementContent>
        <Input
          valueChangeHandler={valueChangeHandler}
          width='160px'
          isEmpty={isEmpty}
          value={protectorName}
        />
      </InfoElementContent>
    </DefaultRow>
  );
};

export default UserProtectorRow;
