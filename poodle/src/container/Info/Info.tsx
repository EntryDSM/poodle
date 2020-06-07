import React, {
    FC, 
    useCallback,
    useState,
} from 'react';
import { 
    InfoDiv, 
    InfoBody,
} from '../../styles/Info';
import {
    withRouter,
    RouteComponentProps,
} from 'react-router-dom';
import { 
    Title,
    DefaultlNavigation,
} from '../../components/default/ApplicationFormDefault';
import { 
    UserNameRow,
    UserGenderRow,
    UserBirthDayRow,
    UserNumberRow,
    UserMiddleSchool,
    UserImg, 
    UserProtector,
    UserProtectorPhoneNumRow,
    UserSchoolPhoneNumRow,
    UserPhoneNumRow,
    UserAddressRow,
} from '../../components/Info';
import { 
    mapStateToProps,
    mapDispatchToProps,
} from './ConnectInfo';
import {
    Popup,
} from '../../components/default/Popup'

type Props = ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps> &
RouteComponentProps;

type MapStateToProps = 
    ReturnType<typeof mapStateToProps>;

const Info: FC<Props> = ({
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
    history,
}) => {
    const [isError, errorChange] = useState<boolean>(false);
    const [errorModal, errorModalChange] = useState<boolean>(false);
    const isTextAble = useCallback((
        text: string,
    ) => {
        if(text.length > 0){
            return true;
        }
        return false;
    },[]);
    const isFileAble = useCallback((file: File | null)=> {
        if(file){
            return true;
        } 
        return false;
    },[])
    const isStateAble = useCallback((
        {
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
        }: MapStateToProps
    ): boolean=> {
        return !(
            isTextAble(address) &&
            isTextAble(name) &&
            isTextAble(birthday) &&
            isTextAble(middleSchool) &&
            isTextAble(protectorName) &&
            isTextAble(schoolPhoneNum) &&
            isTextAble(protectorName) &&
            isTextAble(phoneNum) &&
            isTextAble(gender) &&
            isTextAble(protectorPhoneNum) &&
            isTextAble(number) &&
            isFileAble(picture)
        )
    },[
        isTextAble, isFileAble
    ])
    const errorModalStateChangeLater = 
    useCallback((state)=> {
        setTimeout(()=> {
            errorModalChange(state);
        },5000);
    },[])
    const goNextPage = useCallback((
        state: MapStateToProps
    ) => {
        const isError = isStateAble(state);
        if(isError){
            errorChange(isError);
            errorModalChange(isError);
            errorModalStateChangeLater(!isError)
        } else {
            history.push('/grade');
        }
    },[
        history,
        isStateAble,
        errorModalStateChangeLater,
    ])
    return (
        <InfoDiv>
            <Popup isError={errorModal}/>
            <InfoBody>
                <Title margin="80px">인적사항</Title>
                <li>
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
                        />
                    </div>
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
                    />
                </li>
                <DefaultlNavigation 
                    page="info"
                    currentPageClickHandler={()=> {
                        history.push('/Type')
                    }}
                    nextPageClickHandler={()=> {
                        goNextPage({
                            address,
                            name,
                            birthday,
                            gender,
                            middleSchool,
                            protectorName,
                            picture,
                            schoolPhoneNum,
                            protectorPhoneNum,
                            phoneNum,
                            number,
                        })
                    }}
                />
            </InfoBody>
        </InfoDiv>
    )
}

export default withRouter(Info);