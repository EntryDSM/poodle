import React, { FC, useState, useEffect, useCallback } from 'react';
import { DefaultRowWithPicture } from '..';
import { Input } from '../../default/ApplicationFormDefault';
import { InfoElementContent } from '../../../styles/Info';
import { isEmptyCheck } from '../../../lib/utils/function';

interface Props {
  numberChange: (value: string) => void;
  gradeNumberChange: (value: string) => void;
  classNumberChange: (value: string) => void;
  userNumber: string;
  gradeNumber: string;
  classNumber: string;
  isError: boolean;
}

const UserNumberRow: FC<Props> = ({
  numberChange,
  userNumber,
  isError,
  gradeNumber,
  classNumber,
  gradeNumberChange,
  classNumberChange,
}) => {
  const [isEmpty, emptyChange] = useState<boolean>(false);
  useEffect(() => {
    if (isError && isEmptyCheck(userNumber)) {
      emptyChange(true);
    } else {
      emptyChange(false);
    }
  }, [isError, userNumber]);
  return (
    <DefaultRowWithPicture title='학번'>
      <InfoElementContent>
        <div>
          <Input
            width='60px'
            isCenter
            type='number'
            valueChangeHandler={gradeNumberChange}
            isEmpty={isEmpty}
            value={gradeNumber}
          />
          <span>학년</span>
          <Input
            width='60px'
            isCenter
            type='number'
            valueChangeHandler={classNumberChange}
            isEmpty={isEmpty}
            value={classNumber}
          />
          <span>반</span>
          <Input
            width='60px'
            isCenter
            type='number'
            valueChangeHandler={numberChange}
            isEmpty={isEmpty}
            value={userNumber}
          />
          <span>번</span>
        </div>
      </InfoElementContent>
    </DefaultRowWithPicture>
  );
};

export default UserNumberRow;
