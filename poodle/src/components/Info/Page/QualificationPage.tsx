import React, { FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { QualificationAnotherRows, QualificationPictureRows } from '../Rows';
import {
  mapStateToProps,
  mapDispatchToProps,
} from '@/container/Info/ConnectInfo';

interface DefaultProps {
  isError: boolean;
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps &
  DefaultProps;

const QualificationPage: FC<Props> = ({
  address,
  name,
  gender,
  picture,
  protectorPhoneNum,
  phoneNum,
  protectorName,
  birthday,
  setDetailAddress,
  setName,
  setBirthday,
  setGender,
  setProtectorPhoneNum,
  setPhoneNum,
  setPicture,
  setProtectorName,
  isError,
  postNum,
  detailAddress,
  setHomePhoneNumber,
  homePhoneNumber,
}) => {
  return (
    <li>
      <QualificationPictureRows
        name={name}
        picture={picture}
        gender={gender}
        protectorName={protectorName}
        birthday={birthday}
        setName={setName}
        setBirthday={setBirthday}
        setGender={setGender}
        setPicture={setPicture}
        setProtector={setProtectorName}
        isError={isError}
      />
      <QualificationAnotherRows
        protectorPhoneNum={protectorPhoneNum}
        phoneNum={phoneNum}
        address={address}
        setAddress={setDetailAddress}
        setPhoneNum={setPhoneNum}
        setProtectorPhoneNum={setProtectorPhoneNum}
        isError={isError}
        postNum={postNum}
        detailAddress={detailAddress}
        setHomePhoneNumber={setHomePhoneNumber}
        homePhoneNumber={homePhoneNumber}
      />
    </li>
  );
};

export default withRouter(QualificationPage);
