import React from 'react';
import { RadioDiv } from '@/styles/ApplicationFormDefault';
import useRadioGroupContext from './RadioGroup';

interface Props<T> {
  children?: string;
  value: T;
}

interface ContextValue<T> {
  onChange: (value: T) => void;
  name: string;
  savedValue: T;
}

function Radio<T>({ children, value }: Props<T>) {
  const context = useRadioGroupContext<T>();
  const { onChange, name, savedValue }: ContextValue<T> = context;
  const radioChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(value);
  };
  const isChecked = (value: T, savedValue: T) => {
    if (value === savedValue) {
      return true;
    }
    return false;
  };
  return (
    <RadioDiv>
      <input
        type='radio'
        onChange={radioChangeHandler}
        name={name}
        checked={isChecked(value, savedValue)}
      />
      <div className='surfaceRadio' />
      {children}
    </RadioDiv>
  );
}

export default Radio;
