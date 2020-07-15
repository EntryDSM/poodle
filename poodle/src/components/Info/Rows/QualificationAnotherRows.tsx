import React, { FC } from 'react';
import {
  UserProtectorPhoneNumRow,
  UserPhoneNumRow,
  UserAddressRow,
} from '../RowType';

type dispatchFuncType = (value: string) => void;

interface Props {
  protectorPhoneNum: string;
  phoneNum: string;
  address: string;
  setAddress: dispatchFuncType;
  setProtectorPhoneNum: dispatchFuncType;
  setPhoneNum: dispatchFuncType;
  isError: boolean;
  detailAddress: string;
  postNum: string;
}

const QualificationAnotherRows: FC<Props> = ({
  protectorPhoneNum,
  address,
  phoneNum,
  setAddress,
  setProtectorPhoneNum,
  setPhoneNum,
  isError,
  postNum,
  detailAddress,
}) => (
  <>
    <UserProtectorPhoneNumRow
      describe='*‘-’문자를 제외한 숫자만 입력해주세요.'
      valueChangeHandler={setProtectorPhoneNum}
      protectorPhoneNum={protectorPhoneNum}
      isError={isError}
    />
    <UserPhoneNumRow
      describe='*‘-’문자를 제외한 숫자만 입력해주세요.'
      valueChangeHandler={setPhoneNum}
      phoneNum={phoneNum}
      isError={isError}
    />
    <UserAddressRow
      valueChangeHandler={setAddress}
      postNum={postNum}
      detailAddress={detailAddress}
      address={address}
      isError={isError}
    />
  </>
);

export default QualificationAnotherRows;
