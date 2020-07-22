import React, { FC } from 'react';
import {
  UserNameRow,
  UserGenderRow,
  UserBirthDayRow,
  UserNumberRow,
  UserMiddleSchool,
  UserImg,
} from '../RowType';

type dispatchFuncType = (value: string) => void;
type modalChangeFuncType = (value: boolean) => void;

interface Props {
  name: string;
  gender: string;
  number: string;
  middleSchool: string;
  birthday: string;
  picture: string;
  gradeNumber: string;
  classNumber: string;
  setName: dispatchFuncType;
  setBirthday: dispatchFuncType;
  setGender: dispatchFuncType;
  setMiddleSchool: dispatchFuncType;
  setNumber: dispatchFuncType;
  setPicture: dispatchFuncType;
  setGradeNumber: dispatchFuncType;
  setClassNumber: dispatchFuncType;
  isError: boolean;
}

const DefaultPictureRow: FC<Props> = ({
  name,
  gender,
  number,
  middleSchool,
  picture,
  setName,
  birthday,
  gradeNumber,
  classNumber,
  setBirthday,
  setGender,
  setMiddleSchool,
  setNumber,
  setPicture,
  isError,
  setGradeNumber,
  setClassNumber,
}) => (
  <div className='picture'>
    <div>
      <UserNameRow valueChangeHandler={setName} name={name} isError={isError} />
      <UserGenderRow valueChangeHandler={setGender} value={gender} />
      <UserBirthDayRow valueChangeHandler={setBirthday} birthday={birthday} />
      <UserNumberRow
        gradeNumber={gradeNumber}
        classNumber={classNumber}
        gradeNumberChange={setGradeNumber}
        classNumberChange={setClassNumber}
        numberChange={setNumber}
        userNumber={number}
        isError={isError}
      />
      <UserMiddleSchool
        valueChangeHandler={setMiddleSchool}
        middleSchool={middleSchool}
        isError={isError}
      />
    </div>
    <UserImg valueChangeHandler={setPicture} img={picture} />
  </div>
);

export default DefaultPictureRow;
