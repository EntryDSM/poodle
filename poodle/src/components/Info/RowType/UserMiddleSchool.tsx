import React, { FC, useState, useEffect } from 'react';
import { DefaultRowWithPicture } from '../';
import {
  Input,
  DefaultButton,
} from '@/components/default/ApplicationFormDefault';
import { InfoElementContent } from '@/styles/Info';
import { isEmptyCheck } from '@/lib/utils/function';

interface Props {
  valueChangeHandler: (value: string) => void;
  middleSchool: string;
  isError: boolean;
  schoolSearchModalAbleChange: (value: boolean) => void;
}

const UserMiddleSchool: FC<Props> = ({
  valueChangeHandler,
  middleSchool,
  isError,
  schoolSearchModalAbleChange,
}) => {
  const [isEmpty, emptyChange] = useState<boolean>(false);
  useEffect(() => {
    if (isError && isEmptyCheck(middleSchool)) {
      emptyChange(true);
    } else {
      emptyChange(false);
    }
  }, [isError, middleSchool]);
  return (
    <DefaultRowWithPicture title='중학교명'>
      <InfoElementContent>
        <div>
          <Input
            valueChangeHandler={valueChangeHandler}
            width='250px'
            isEmpty={isEmpty}
            value={middleSchool}
            disable={true}
          />
          <DefaultButton
            onClick={() => {
              schoolSearchModalAbleChange(true);
            }}
          >
            검색
          </DefaultButton>
        </div>
      </InfoElementContent>
    </DefaultRowWithPicture>
  );
};

export default UserMiddleSchool;
