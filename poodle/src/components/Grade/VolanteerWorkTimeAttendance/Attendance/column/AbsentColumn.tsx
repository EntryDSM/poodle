import React, {
  FC,
  useState,
  useEffect,
} from 'react';
import { Input } from '../../../../default/ApplicationFormDefault/Input';
import { isEmptyCheck } from '../../../../../lib/utils/function';

type dispatchFuncType = (value: string) => void

interface Props {
    valueChangeHandler: dispatchFuncType,
    value: string,
    isError: boolean,
}

const AbsentColumn: FC<Props> = ({
  valueChangeHandler,
  value,
  isError,
}) => {
  const [isEmpty, emptyChange] = useState<boolean>(false);
  useEffect(() => {
    if (isError && isEmptyCheck(value)) {
      emptyChange(true);
    } else {
      emptyChange(false);
    }
  }, [isError, value]);
  return (
    <div>
      전체 무단(미인정) 결석 일수
      <div>
        <Input
          width="76px"
          height="36px"
          valueChangeHandler={valueChangeHandler}
          value={value}
          isEmpty={isEmpty}
          isCenter
          type="number"
        />
        일
      </div>
    </div>
  );
};

export default AbsentColumn;
