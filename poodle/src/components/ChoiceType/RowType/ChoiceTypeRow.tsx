import React, { useState, FC } from 'react';
import { TypeElementContent } from '@/styles/ChoiceType';
import {
  Radio,
  Dropdown,
  DropdownRadio,
  RadioGroupProvider,
} from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';
import typeConstance from './constance/TypeConstance';

interface Props {
  valueChangeHandler: (value: string) => void;
  applyType: string;
}

const ChoiceTypeRow: FC<Props> = ({ valueChangeHandler, applyType }) => {
  const [isDropdownAble, dropdownAbleChange] = useState(false);
  const [nowDropdown, dropdownChange] = useState<any>('');
  const ableRadioClickHandler = (isDropdownAble: boolean) => {
    dropdownAbleChange(isDropdownAble);
  };
  const RadioClickHandler = (value: string) => {
    valueChangeHandler(value);
    dropdownAbleChange(false);
  };
  return (
    <DefaultRow title='전형 선택'>
      <TypeElementContent>
        <div>
          <RadioGroupProvider onChange={RadioClickHandler} value={applyType}>
            <Radio value='일반전형'>일반전형</Radio>
            <Radio value='마이스터 인재전형'>마이스터 인재전형</Radio>
            <DropdownRadio
              value={nowDropdown}
              dropdownAbleChange={ableRadioClickHandler}
              options={typeConstance}
            />
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
