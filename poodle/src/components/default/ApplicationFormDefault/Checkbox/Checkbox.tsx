import React, { FC, useCallback } from 'react';
import { CheckboxDiv } from '../../../../styles/ApplicationFormDefault';

interface Props {
  children?: string;
  onChange: (value: boolean) => void;
  checked: boolean;
}

const Checkbox: FC<Props> = ({ children, onChange, checked }) => {
  const checkboxClickHandler = useCallback(
    (event: React.InputHTMLAttributes<HTMLInputElement>) => {
      onChange(!checked);
    },
    [onChange, checked],
  );
  return (
    <CheckboxDiv>
      <input
        type='checkbox'
        onChange={checkboxClickHandler}
        checked={checked}
      />
      <div />
      <p>{children}</p>
    </CheckboxDiv>
  );
};

export default Checkbox;
