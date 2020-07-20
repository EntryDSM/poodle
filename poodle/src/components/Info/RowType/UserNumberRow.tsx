import React, { FC, useState, useEffect } from 'react';
import { DefaultRowWithPicture } from '..';
import { Input } from '@/components/default/ApplicationFormDefault';
import { InfoElementContent } from '@/styles/Info';
import { isEmptyCheck } from '@/lib/utils/function';

interface Props {
  valueChangeHandler: (value: string) => void;
  userNumber: string;
  isError: boolean;
}

const UserNumberRow: FC<Props> = ({
  valueChangeHandler,
  userNumber,
  isError,
}) => {
  const [grade, gradeChange] = useState<string>('');
  const [classNum, classChange] = useState<string>('');
  const [number, numberChange] = useState<string>('');
  const [isEmpty, emptyChange] = useState<boolean>(false);
  useEffect(() => {
    if (grade && classNum && number) {
      const value = `${grade}-${classNum}-${number}`;
      valueChangeHandler(value);
    } else {
      valueChangeHandler('');
    }
  }, [grade, classNum, number, valueChangeHandler]);
  useEffect(() => {
    if (isError && isEmptyCheck(userNumber)) {
      emptyChange(true);
    } else {
      emptyChange(false);
    }
  }, [isError, userNumber]);
  useEffect(() => {
    if (userNumber.length > 0) {
      const buf: string[] = userNumber.split('-');
      gradeChange(buf[0]);
      classChange(buf[1]);
      numberChange(buf[2]);
    }
  }, []);
  return (
    <DefaultRowWithPicture title='학번'>
      <InfoElementContent>
        <div>
          <Input
            width='60px'
            isCenter={true}
            type='number'
            valueChangeHandler={gradeChange}
            isEmpty={isEmpty}
            value={grade}
          />
          <span>학년</span>
          <Input
            width='60px'
            isCenter={true}
            type='number'
            valueChangeHandler={classChange}
            isEmpty={isEmpty}
            value={classNum}
          />
          <span>반</span>
          <Input
            width='60px'
            isCenter={true}
            type='number'
            valueChangeHandler={numberChange}
            isEmpty={isEmpty}
            value={number}
          />
          <span>번</span>
        </div>
      </InfoElementContent>
    </DefaultRowWithPicture>
  );
};

export default UserNumberRow;
