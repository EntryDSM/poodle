import React, { FC, useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SCHOOL_SEARCH_MODAL, modalOn } from '@/core/redux/actions/modal';
import { DefaultRowWithPicture } from '..';
import { Input, DefaultButton } from '../../default/ApplicationFormDefault';
import { InfoElementContent } from '../../../styles/Info';
import { isEmptyCheck } from '../../../lib/utils/function';

interface Props {
  valueChangeHandler: (value: string) => void;
  middleSchool: string;
  isError: boolean;
}

const UserMiddleSchool: FC<Props> = ({
  valueChangeHandler,
  middleSchool,
  isError,
}) => {
  const dispatch = useDispatch();
  const [isEmpty, emptyChange] = useState<boolean>(false);
  useEffect(() => {
    if (isError && isEmptyCheck(middleSchool)) {
      emptyChange(true);
    } else {
      emptyChange(false);
    }
  }, [isError, middleSchool]);
  const schoolSearchModalOn = useCallback(() => {
    dispatch(modalOn(SCHOOL_SEARCH_MODAL));
  }, []);
  return (
    <DefaultRowWithPicture title='중학교명'>
      <InfoElementContent>
        <div>
          <Input
            valueChangeHandler={valueChangeHandler}
            width='250px'
            isEmpty={isEmpty}
            value={middleSchool}
            disable
          />
          <DefaultButton onClick={schoolSearchModalOn}>검색</DefaultButton>
        </div>
      </InfoElementContent>
    </DefaultRowWithPicture>
  );
};

export default UserMiddleSchool;
