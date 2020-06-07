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

type Props = ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps> &
RouteComponentProps;

type MapStateToProps = 
    ReturnType<typeof mapStateToProps>;

const isQualificate = true;
// 서버 통신으로 대체될 예정

const Info: FC<Props> = (props) => {
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
            props.history.push('/grade');
        }
    },[
        isStateAble,
        errorModalStateChangeLater,
    ])
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
                    /> :
                    <DefaultPage
                        {...props}
                        isError={isError}
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
                        })
                    }}
                />
            </InfoBody>
        </InfoDiv>
    )
}

export default withRouter(Info);