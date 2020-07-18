import React, { useCallback } from 'react';
import * as S from '../../styles/Join';
import { InputAction } from './inputReducer';

type JoinInputProps = {
  maxSize?: boolean;
  middleSize?: boolean;
  isDisabled?: boolean;
  label: 'email' | 'code' | 'password' | 'passwordCheck';
  value: {
    email: string;
    code: string;
    password: string;
    passwordCheck: string;
  };
  setValue: Function;
  isFocused: {
    email: boolean;
    code: boolean;
    password: boolean;
    passwordCheck: boolean;
  };
  inputDispatch: React.Dispatch<InputAction>;
  inputFocused?: {
    password: boolean;
    passwordCheck: boolean;
  };
  setInputFocused?: Function;
};

function JoinInput({
  maxSize,
  middleSize,
  isDisabled,
  label,
  value,
  setValue,
  isFocused,
  inputDispatch,
  inputFocused,
  setInputFocused,
}: JoinInputProps) {
  const isPasswordType = label === 'password' || label === 'passwordCheck';
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isFocused[label]) return;
      inputDispatch(setValue(e.target.value));
    },
    [isFocused],
  );
  const onFocus = useCallback(() => {
    if (setInputFocused)
      setInputFocused({
        ...inputFocused,
        [label]: true,
      });
  }, [inputFocused]);
  const onBlur = useCallback(() => {
    if (setInputFocused)
      setInputFocused({
        ...inputFocused,
        [label]: false,
      });
  }, [inputFocused]);
  return (
    <S.StyledJoinInput
      type={isPasswordType ? 'password' : 'text'}
      maxLength={label === 'code' ? 5 : undefined}
      maxSize={maxSize}
      middleSize={middleSize}
      disabled={isDisabled}
      value={value[label]}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      isFocused={isPasswordType ? false : isFocused[label]}
    />
  );
}

export default JoinInput;
