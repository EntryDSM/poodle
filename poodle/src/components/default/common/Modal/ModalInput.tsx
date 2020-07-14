import React, { FC, useCallback } from 'react';
import * as S from '@/styles/common/Modal';

type ModalInputProps = {
  type: string;
  placeholder: string;
  textCenter: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  submit?: () => void;
};

const ModalInput: FC<ModalInputProps> = ({
  type,
  placeholder,
  value,
  setValue,
  textCenter,
  id,
  submit,
}) => {
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue],
  );
  const onKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && submit) submit();
    },
    [submit],
  );
  return (
    <S.ModalInputWrapper>
      <S.ModalInputBox>
        <S.StyledInput
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          textCenter={textCenter}
          onKeyPress={onKeyPress}
        />
      </S.ModalInputBox>
    </S.ModalInputWrapper>
  );
};

export default ModalInput;
