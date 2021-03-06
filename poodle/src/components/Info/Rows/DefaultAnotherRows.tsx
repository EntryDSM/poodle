import React, { FC } from 'react';
import {
  UserProtector,
  UserProtectorPhoneNumRow,
  UserSchoolPhoneNumRow,
  UserPhoneNumRow,
  UserAddressRow,
  UserHomePhoneNumber,
} from '../RowType';

type dispatchFuncType = (value: string) => void;

interface Props {
  protectorName: string;
  schoolPhoneNum: string;
  protectorPhoneNum: string;
  phoneNum: string;
  address: string;
  setAddress: dispatchFuncType;
  setProtectorName: dispatchFuncType;
  setSchoolPhoneNum: dispatchFuncType;
  setProtectorPhoneNum: dispatchFuncType;
  setPhoneNum: dispatchFuncType;
  isError: boolean;
  detailAddress: string;
  postNum: string;
  setHomePhoneNumber: dispatchFuncType;
  homePhoneNumber: string;
}

const DefaultAnotherRows: FC<Props> = ({
  protectorName,
  protectorPhoneNum,
  schoolPhoneNum,
  address,
  phoneNum,
  detailAddress,
  postNum,
  setAddress,
  setProtectorName,
  setProtectorPhoneNum,
  setSchoolPhoneNum,
  setPhoneNum,
  isError,
  setHomePhoneNumber,
  homePhoneNumber,
}) => (
  <>
    <UserProtector
      valueChangeHandler={setProtectorName}
      protectorName={protectorName}
      isError={isError}
    />
    <UserSchoolPhoneNumRow
      describe='*전화번호 양식에 맞게 입력해주세요.'
      valueChangeHandler={setSchoolPhoneNum}
      schoolPhoneNum={schoolPhoneNum}
      isError={isError}
    />
    <UserProtectorPhoneNumRow
      describe='*전화번호 양식에 맞게 입력해주세요.'
      valueChangeHandler={setProtectorPhoneNum}
      protectorPhoneNum={protectorPhoneNum}
      isError={isError}
    />
    <UserPhoneNumRow
      describe='*전화번호 양식에 맞게 입력해주세요.'
      valueChangeHandler={setPhoneNum}
      phoneNum={phoneNum}
      isError={isError}
    />
    <UserHomePhoneNumber
      valueChangeHandler={setHomePhoneNumber}
      homeNumber={homePhoneNumber}
      isError={isError}
      describe='* 필수 입력칸이 아닙니다.'
    />
    <UserAddressRow
      valueChangeHandler={setAddress}
      address={address}
      isError={isError}
      detailAddress={detailAddress}
      postNum={postNum}
      describe='* 완벽한 도로명 주소로 입력해 주세요.'
    />
  </>
);

export default DefaultAnotherRows;
