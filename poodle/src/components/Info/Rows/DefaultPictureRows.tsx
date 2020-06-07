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

interface Props {
    name: string,
    gender: string,
    number: string,
    middleSchool: string,
    picture: File | null,
    setName: dispatchFuncType,
    setBirthday: dispatchFuncType,
    setGender: dispatchFuncType,
    setMiddleSchool: dispatchFuncType,
    setNumber: dispatchFuncType,
    setPicture: dispatchPicturFuncType,
    isError: boolean,
}

const DefaultPictureRow: FC<Props> = ({
    name,
    gender,
    number,
    middleSchool,
    picture,
    setName,
    setBirthday,
    setGender,
    setMiddleSchool,
    setNumber,
    setPicture,
    isError,
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