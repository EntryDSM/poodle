import React, { FC } from 'react';
import { 
    UserNameRow,
    UserGenderRow,
    UserBirthDayRow,
    QualificationUserImg,
    UserProtector,
} from '../RowType';

type dispatchFuncType = (value: string) => void;
type dispatchPicturFuncType = (value: File) => void;

interface Props {
    name: string,
    gender: string,
    picture: File | null,
    birthday: string,
    protectorName: string
    setName: dispatchFuncType,
    setBirthday: dispatchFuncType,
    setGender: dispatchFuncType,
    setProtector: dispatchFuncType
    setPicture: dispatchPicturFuncType,
    isError: boolean,
}

const QuliificationPicture: FC<Props> = ({
    name,
    gender,
    picture,
    protectorName,
    birthday,
    setName,
    setBirthday,
    setGender,
    setPicture,
    setProtector,
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
                    birthday={birthday}
                />
                <UserProtector
                    valueChangeHandler={setProtector}
                    protectorName={protectorName}
                    isError={isError}
                />
            </div>
            <QualificationUserImg
                valueChangeHandler={setPicture}
                img={picture}
            />
        </div>
    )
}

export default QuliificationPicture;