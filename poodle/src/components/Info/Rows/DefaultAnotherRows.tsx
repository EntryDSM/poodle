import React, { FC } from 'react';
import { 
    UserProtector,
    UserProtectorPhoneNumRow,
    UserSchoolPhoneNumRow,
    UserPhoneNumRow,
    UserAddressRow,
} from '../RowType';

type dispatchFuncType = (value: string) => void;
type modalChangeFuncType = (value: boolean) => void;

interface Props {
    protectorName: string,
    schoolPhoneNum: string,
    protectorPhoneNum: string,
    phoneNum: string,
    address: string,
    setAddress: dispatchFuncType,
    setProtectorName: dispatchFuncType,
    setSchoolPhoneNum: dispatchFuncType,
    setProtectorPhoneNum: dispatchFuncType,
    setPhoneNum: dispatchFuncType,
    isError: boolean,
    addressSearchModalAbleChange: modalChangeFuncType;
    detailAddress: string,
    postNum: string,
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
    addressSearchModalAbleChange,
}) => {
    return (
        <>
            <UserProtector
                valueChangeHandler={setProtectorName}
                protectorName={protectorName}
                isError={isError}
            />
            <UserSchoolPhoneNumRow 
                describe="*‘-’문자를 제외한 숫자만 입력해주세요."
                valueChangeHandler={setSchoolPhoneNum}
                schoolPhoneNum={schoolPhoneNum}
                isError={isError}
            />    
            <UserProtectorPhoneNumRow 
                describe="*‘-’문자를 제외한 숫자만 입력해주세요."
                valueChangeHandler={setProtectorPhoneNum}
                protectorPhoneNum={protectorPhoneNum}
                isError={isError}
            />
            <UserPhoneNumRow
                describe="*‘-’문자를 제외한 숫자만 입력해주세요."
                valueChangeHandler={setPhoneNum}
                phoneNum={phoneNum}
                isError={isError}
            />
            <UserAddressRow
                valueChangeHandler={setAddress}
                address={address}
                isError={isError}
                addressSearchModalAbleChange={addressSearchModalAbleChange}
                detailAddress={detailAddress}
                postNum={postNum}
            />
        </>
    )
}

export default DefaultAnotherRows;