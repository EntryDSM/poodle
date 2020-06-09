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
type dispatchPicturFuncType = (value: File) => void;
type modalChangeFuncType = (value: boolean) => void;

interface Props {
    name: string,
    gender: string,
    number: string,
    middleSchool: string,
    birthday: string,
    picture: File | null,
    setName: dispatchFuncType,
    setBirthday: dispatchFuncType,
    setGender: dispatchFuncType,
    setMiddleSchool: dispatchFuncType,
    setNumber: dispatchFuncType,
    setPicture: dispatchPicturFuncType,
    isError: boolean,
    schoolSearchModalAbleChange: modalChangeFuncType,
}

const DefaultPictureRow: FC<Props> = ({
    name,
    gender,
    number,
    middleSchool,
    picture,
    setName,
    birthday,
    setBirthday,
    setGender,
    setMiddleSchool,
    setNumber,
    setPicture,
    isError,
    schoolSearchModalAbleChange,
}) => {
    return (
        <div className="picture">
            <div>
                <UserNameRow 
                    valueChangeHandler={setName}
                    name={name}
                    isError={isError}
                />
                <UserGenderRow 
                    valueChangeHandler={setGender}
                    value={gender}
                />   
                <UserBirthDayRow
                    valueChangeHandler={setBirthday}
                    birthday={birthday}
                /> 
                <UserNumberRow
                    valueChangeHandler={setNumber}
                    userNumber={number}
                    isError={isError}
                />
                <UserMiddleSchool
                    valueChangeHandler={setMiddleSchool}
                    middleSchool={middleSchool}
                    isError={isError}
                    schoolSearchModalAbleChange={schoolSearchModalAbleChange}
                />
            </div>
            <UserImg
                valueChangeHandler={setPicture}
                img={picture}
            />
        </div>
    )
}

export default DefaultPictureRow;