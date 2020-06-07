import React, {
    FC,
} from 'react';
import {
    withRouter,
    RouteComponentProps,
} from 'react-router-dom';
import { 
    DefaultAnotherRows,
    DefaultPictureRows,
} from '../Rows';
import { 
    mapStateToProps,
    mapDispatchToProps,
} from '../../../container/Info/ConnectInfo';


type MapStateToProps = 
    ReturnType<typeof mapStateToProps>;

interface DefaultProps {
    isError: boolean;
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
    setAddress,
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
}) => {

    return (
        <>
            <li>
                <DefaultPictureRows
                    name={name}
                    picture={picture}
                    gender={gender}
                    number={number}
                    middleSchool={middleSchool}
                    setName={setName}
                    setBirthday={setBirthday}
                    setGender={setGender}
                    setMiddleSchool={setMiddleSchool}
                    setNumber={setNumber}
                    setPicture={setPicture}
                    isError={isError}
                />
                <DefaultAnotherRows
                    protectorName={protectorName}
                    protectorPhoneNum={protectorPhoneNum}
                    schoolPhoneNum={schoolPhoneNum}
                    phoneNum={phoneNum}
                    address={address}
                    setAddress={setAddress}
                    setPhoneNum={setPhoneNum}
                    setProtectorName={setProtectorName}
                    setProtectorPhoneNum={setProtectorPhoneNum}
                    setSchoolPhoneNum={setSchoolPhoneNum}
                    isError={isError}
                />
            </li>
        </>
    )
}

export default withRouter(DefaultPage);