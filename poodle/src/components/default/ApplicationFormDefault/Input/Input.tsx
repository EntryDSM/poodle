import React, { FC } from 'react';
import { DefaultInput } from '@/styles/ApplicationFormDefault';

interface Props {
  width: string;
  placeholder?: string;
  isCenter?: boolean;
  type?: string;
  valueChangeHandler?: Function;
  isEmpty: boolean;
  value?: string;
  height?: string;
  disable?: boolean;
  keyPressHandler?: Function;
  keyPressDownHandler?: Function;
}

const Input: FC<Props> = ({
  width,
  placeholder,
  isCenter,
  type,
  valueChangeHandler,
  isEmpty,
  height,
  value,
  disable,
  keyPressHandler,
  keyPressDownHandler,
}) => {
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!valueChangeHandler) return;
    valueChangeHandler(value);
  };
  const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!keyPressHandler) return;
    keyPressHandler(event);
  };
  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!keyPressDownHandler) return;
    keyPressDownHandler(event);
  };
  return (
    <DefaultInput
      width={width}
      isEmpty={isEmpty}
      placeholder={placeholder}
      isCenter={isCenter}
      type={type}
      onChange={inputChangeHandler}
      onKeyPress={onKeyPressHandler}
      onKeyDown={onKeyDownHandler}
      height={height}
      value={value}
      required
      readOnly={disable}
    />
  );
};

export default Input;
