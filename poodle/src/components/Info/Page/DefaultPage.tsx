import React, { FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { DefaultAnotherRows, DefaultPictureRows } from '../Rows';
import {
  mapStateToProps,
  mapDispatchToProps,
} from '@/container/Info/ConnectInfo';

interface DefaultProps {
  isError: boolean;
  addressSearchModalAbleChange: (value: boolean) => void;
  schoolSearchModalAbleChange: (value: boolean) => void;
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps &
  DefaultProps;

const DefaultPage: FC<Props> = ({
  address,
  number,
  name,
  birthday,
  gender,
  middleSchool,
  protectorName,
  picture,
  schoolPhoneNum,
  protectorPhoneNum,
  phoneNum,
  postNum,
  detailAddress,
  setName,
  setBirthday,
  setGender,
  setMiddleSchool,
  setNumber,
  setProtectorName,
  setProtectorPhoneNum,
  setPhoneNum,
  setPicture,
  setSchoolPhoneNum,
  isError,
  addressSearchModalAbleChange,
  schoolSearchModalAbleChange,
  setDetailAddress,
}) => {
  return (
    <li>
      <DefaultPictureRows
        name={name}
        picture={picture}
        gender={gender}
        number={number}
        middleSchool={middleSchool}
        birthday={birthday}
        setName={setName}
        setBirthday={setBirthday}
        setGender={setGender}
        setMiddleSchool={setMiddleSchool}
        setNumber={setNumber}
        setPicture={setPicture}
        isError={isError}
        schoolSearchModalAbleChange={schoolSearchModalAbleChange}
      />
      <DefaultAnotherRows
        protectorName={protectorName}
        protectorPhoneNum={protectorPhoneNum}
        schoolPhoneNum={schoolPhoneNum}
        phoneNum={phoneNum}
        address={address}
        setAddress={setDetailAddress}
        setPhoneNum={setPhoneNum}
        setProtectorName={setProtectorName}
        setProtectorPhoneNum={setProtectorPhoneNum}
        setSchoolPhoneNum={setSchoolPhoneNum}
        isError={isError}
        postNum={postNum}
        detailAddress={detailAddress}
        addressSearchModalAbleChange={addressSearchModalAbleChange}
      />
    </li>
  );
};

export default withRouter(DefaultPage);
