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
    mapStateToProps,
    mapDispatchToProps,
} from './ConnectInfo';
import {
    Popup,
} from '../../components/default/Popup'
import { 
    QualificationPage,
    DefaultPage,
} from '../../components/Info/Page';
import SchoolSearchModal from '../../components/default/common/Modal/SchoolSearchModal';
import AddressSearchModal from '../../components/default/common/Modal/AddressSearchModal';

type Props = ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps> &
RouteComponentProps;

type MapStateToProps = 
    ReturnType<typeof mapStateToProps>;

const isQualificate = false;

const Info: FC<Props> = (props) => {
    const [isError, errorChange] = useState<boolean>(false);
    const [errorModal, errorModalChange] = useState<boolean>(false);
    const [schoolSearchModalAble, schoolSearchModalAbleChange] = useState<boolean>(false);
    const [addressSearchModalAble, addressSearchModalAbleChange] = useState<boolean>(false);
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
            postNum,
            detailAddress,
        }: MapStateToProps
    ): boolean=> {
        if(isQualificate){
            return !(
                isTextAble(address) &&
                isTextAble(postNum) &&
                isTextAble(detailAddress)&&
                isTextAble(name) &&
                isTextAble(birthday) &&
                isTextAble(protectorName) &&
                isTextAble(protectorName) &&
                isTextAble(phoneNum) &&
                isTextAble(gender) &&
                isTextAble(protectorPhoneNum) &&
                isFileAble(picture)
            )
        }
        return !(
            isTextAble(postNum) &&
            isTextAble(detailAddress) &&
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
            props.history.push('/grade');
        }
    },[
        isStateAble,
        errorModalStateChangeLater,
        props.history
    ])

    const modalReturner = (
        addressSearchModalAble: boolean, 
        schoolSearchModalAble: boolean,
    ): React.ReactNode | null => {
        if(addressSearchModalAble){
            return <AddressSearchModal
                onModalChange={addressSearchModalAbleChange}
            />
        } else if(schoolSearchModalAble){
            return <SchoolSearchModal
                onModalChange={schoolSearchModalAbleChange}
            />
        } else {
            return null;
        }
    }
    return (
        <InfoDiv>
            <Popup isError={errorModal}/>
            <InfoBody>
                <Title margin="80px">인적사항</Title>
                {
                    isQualificate ?
                    <QualificationPage
                        {...props}
                        isError={isError}
                        addressSearchModalAbleChange={addressSearchModalAbleChange}
                    /> :
                    <DefaultPage
                        {...props}
                        isError={isError}
                        addressSearchModalAbleChange={addressSearchModalAbleChange}
                        schoolSearchModalAbleChange={schoolSearchModalAbleChange}
                    />
                }
                <DefaultlNavigation 
                    page="info"
                    currentPageClickHandler={()=> {
                        props.history.push('/Type')
                    }}
                    nextPageClickHandler={()=> {
                        const {
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
                            postNum,
                            detailAddress
                        } = props;
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
                            postNum,
                            detailAddress,
                        })
                    }}
                />
            </InfoBody>
            {
                modalReturner(addressSearchModalAble, schoolSearchModalAble)
            }
        </InfoDiv>
    )
}

export default withRouter(Info);