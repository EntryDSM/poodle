import React, { useState, FC, useCallback, useEffect } from 'react';
import { TypeElementContent } from '@/styles/ChoiceType';
import {
  Radio,
  Dropdown,
  DropdownRadio,
  RadioGroupProvider,
} from '@/components/default/ApplicationFormDefault';
import { DefaultRow } from '..';
import typeConstance from './constance/TypeConstance';

interface Props {
  valueChangeHandler: (value: string) => void;
  applyType: string;
}

const ChoiceTypeRow: FC<Props> = ({ valueChangeHandler, applyType }) => {
  const [isDropdownAble, dropdownAbleChange] = useState<boolean>(false);
  const [nowDropdown, dropdownChange] = useState<string>('');
  const ableRadioClickHandler = useCallback((isDropdownAble: boolean) => {
    dropdownAbleChange(isDropdownAble);
  }, []);
  const RadioClickHandler = useCallback((value: string) => {
    valueChangeHandler(value);
    dropdownAbleChange(false);
  }, []);
  const setDropdownAble = useCallback((applyType: string) => {
    if (applyType === 'COMMON' || applyType === 'MEISTER' || applyType === '') {
      return false;
    }
    return true;
  }, []);
  useEffect(() => {
    const dropdownAble = setDropdownAble(applyType);
    dropdownAbleChange(dropdownAble);
  }, [applyType]);
  return (
    <DefaultRow title='전형 선택'>
      <TypeElementContent>
        <div>
          <RadioGroupProvider onChange={RadioClickHandler} value={applyType}>
            <Radio value='COMMON'>일반 전형</Radio>
            <Radio value='MEISTER'>마이스터 인재 전형</Radio>
            <DropdownRadio
              value={nowDropdown}
              dropdownAbleChange={ableRadioClickHandler}
              options={typeConstance}
            >
              사회 통합 전형
            </DropdownRadio>
          </RadioGroupProvider>
          <Dropdown
            options={typeConstance}
            width='180px'
            onChange={valueChangeHandler}
            isAble={isDropdownAble}
            value={applyType}
            dropdownChange={dropdownChange}
          />
        </div>
      </TypeElementContent>
    </DefaultRow>
  );
};

export default ChoiceTypeRow;
