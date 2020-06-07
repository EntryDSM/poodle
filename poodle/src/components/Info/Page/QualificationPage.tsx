import React, {
    FC,
} from 'react';
import {
    withRouter,
    RouteComponentProps,
} from 'react-router-dom';
import { 
    QualificationAnotherRows,
    QualificationPictureRows,
} from '../Rows';
import { 
    mapStateToProps,
    mapDispatchToProps,
} from '../../../container/Info/ConnectInfo';

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
    setAddress,
    setName,
    setBirthday,
    setGender,
    setProtectorPhoneNum,
    setPhoneNum,
    setPicture,
    setProtectorName,
    isError,
}) => {

    return (
        <>
            <li>
                <QualificationPictureRows
                    name={name}
                    picture={picture}
                    gender={gender}
                    protectorName={protectorName}
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
                    setAddress={setAddress}
                    setPhoneNum={setPhoneNum}
                    setProtectorPhoneNum={setProtectorPhoneNum}
                    isError={isError}
                />
            </li>
        </>
    )
}

export default withRouter(QualificationPage);