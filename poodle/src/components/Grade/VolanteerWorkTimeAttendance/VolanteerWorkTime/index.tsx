import React, { FC, useEffect, useState } from 'react';
import { VolanteerWorkTimeRow } from '@/styles/Grade';
import { Input } from '@/components/default/ApplicationFormDefault/Input';
import { isEmptyCheck } from '@/lib/utils/function';

interface Props {
  serviceTime: string;
  serviceTimeChange: (serviceTime: string) => void;
  isError: boolean;
}

const VolanteerWorkTime: FC<Props> = ({
  serviceTime,
  serviceTimeChange,
  isError,
}) => {
  const [isEmpty, emptyChange] = useState<boolean>(false);
  useEffect(() => {
    if (isError && isEmptyCheck(serviceTime)) {
      emptyChange(true);
    } else {
      emptyChange(false);
    }
  }, [isError, serviceTime]);
  return (
    <VolanteerWorkTimeRow>
      <td className='header'>봉사시간</td>
      <td className='element'>
        <div>
          <Input
            width='76px'
            height='36px'
            valueChangeHandler={serviceTimeChange}
            isEmpty={isEmpty}
            isCenter
            type='number'
            value={serviceTime}
          />
          시간
        </div>
      </td>
      <td className='element' />
    </VolanteerWorkTimeRow>
  );
};

export default VolanteerWorkTime;
