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
    addressSearchModalAbleChange: (value: boolean) => void;
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
    addressSearchModalAbleChange,
    postNum,
    detailAddress,
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
                addressSearchModalAbleChange={addressSearchModalAbleChange}
                postNum={postNum}
                detailAddress={detailAddress}
            />
        </li>
    )
}

export default withRouter(QualificationPage);