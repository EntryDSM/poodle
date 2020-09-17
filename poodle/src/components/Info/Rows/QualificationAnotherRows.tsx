import React, { FC } from 'react';
import {
  UserProtectorPhoneNumRow,
  UserPhoneNumRow,
  UserAddressRow,
  UserHomePhoneNumber,
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
  setHomePhoneNumber: dispatchFuncType;
  homePhoneNumber: string;
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
  setHomePhoneNumber,
  homePhoneNumber,
}) => (
  <>
    <UserProtectorPhoneNumRow
      describe='*완벽히 입력되지 않으면 자동저장이 되지 않습니다.'
      valueChangeHandler={setProtectorPhoneNum}
      protectorPhoneNum={protectorPhoneNum}
      isError={isError}
    />
    <UserPhoneNumRow
      describe='*완벽히 입력되지 않으면 자동저장이 되지 않습니다.'
      valueChangeHandler={setPhoneNum}
      phoneNum={phoneNum}
      isError={isError}
    />
    <UserHomePhoneNumber
      valueChangeHandler={setHomePhoneNumber}
      homeNumber={homePhoneNumber}
      isError={isError}
    />
    <UserAddressRow
      valueChangeHandler={setAddress}
      postNum={postNum}
      detailAddress={detailAddress}
      address={address}
      isError={isError}
      describe='* 완벽한 도로명 주소로 입력해 주세요.'
    />
  </>
);

export default QualificationAnotherRows;
