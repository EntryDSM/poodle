import React, { FC } from 'react';
import { DefaultRow } from '..';
import { Input } from '@/components/default/ApplicationFormDefault';
import { InfoElementContent } from '@/styles/Info';

interface Props {
  valueChangeHandler: (value: string) => void;
  homeNumber: string;
  isError: boolean;
}

const UserProtectorPhoneNumRow: FC<Props> = ({
  valueChangeHandler,
  homeNumber,
}) => {
  return (
    <DefaultRow title='자택 연락처' isNonRequire={true}>
      <InfoElementContent>
        <Input
          valueChangeHandler={valueChangeHandler}
          width='250px'
          isEmpty={false}
          value={homeNumber}
        />
        <div></div>
      </InfoElementContent>
    </DefaultRow>
  );
};

export default UserProtectorPhoneNumRow;
