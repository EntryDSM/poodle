import React, { 
    FC, 
    useState, 
    useCallback, 
} from 'react';
import {
    withRouter,
    RouteComponentProps,
} from 'react-router-dom';
import { 
    Title,
    DefaultlNavigation,
} from '../../components/default/ApplicationFormDefault';
import { 
    TypeDiv, 
    TypeMain,
} from '../../styles/ChoiceType';
import {
    QualificationExam,
    ChoiceTypeRow,
    ChoiceDistrict,
    GraduationStatus,
    GraduationYear,
    Specialty,
} from '../../components/ChoiceType/RowType';
import { 
    mapStateToProps,
    mapDispatchToProps,
} from './ConnectChoiceType';
import {
    Popup
} from '../../components/default/Popup';

type Props = ReturnType<typeof mapStateToProps> & 
ReturnType<typeof mapDispatchToProps> &
RouteComponentProps;

type MapStateToProps = 
    ReturnType<typeof mapStateToProps>;

const ChoiceType: FC<Props> = ({
    qualifacationExam,
    applyType,
    district,
    graduationStatus,
    graduationYear,
    nationalMerit,
    specialAdmission,
    setQualifacationExam,
    setApplyType,
    setDistrict,
    setGraduationStatus,
    setGraduationYear,
    setNationalMerit,
    setSpecialAdmission,
    history
}) => {
    const [errorModal, errorModalChange] = useState<boolean>(false);
    const qualificationExamChangeHandler = useCallback((
        isQualifacationExam: boolean,
    ): void => {
        setQualifacationExam(isQualifacationExam);
        if(isQualifacationExam){
            setGraduationYear("");
            setGraduationStatus("");
        }
    },[
        setGraduationYear, 
        setGraduationStatus, 
        setQualifacationExam
    ])
    const isTextAble = useCallback((
        text: string,
    ) => {
        if(text.length > 0){
            return true;
        }
        return false;
    },[]);
    const isStateAble = useCallback((
        {
            qualifacationExam,
            applyType,
            district,
            graduationStatus,
            graduationYear,
            nationalMerit,
            specialAdmission,
        }: MapStateToProps
    ): boolean=> {
        return !(
            qualifacationExam &&
            nationalMerit &&
            specialAdmission &&
            isTextAble(graduationStatus) &&
            isTextAble(applyType) &&
            isTextAble(district) &&
            isTextAble(graduationYear)
        )
    },[isTextAble])
    const goNextPage = useCallback((
        state: MapStateToProps
    ) => {
        const isError = isStateAble(state);
        if(isError){    
            errorModalChange(isError);
            setTimeout(() => errorModalChange(false),5000);
        } else {
            history.push('/Info');
        }
    },[
        history,
        isStateAble
    ])
    return (
        <TypeDiv>
            <Popup isError={errorModal}/>
            <TypeMain>
                <Title margin="80px">전형 구분 선택</Title>
                <li>
                    <QualificationExam 
                        describe="*검정고시를 통하여 지원하실 경우 체크해주세요"
                        valueChangeHandler={qualificationExamChangeHandler}
                    />
                    <ChoiceTypeRow 
                        valueChangeHandler={setApplyType}
                    />
                    <ChoiceDistrict
                        valueChangeHandler={setDistrict}
                     />
                     {
                        qualifacationExam ?
                        "" : 
                        <>
                            <GraduationStatus 
                                valueChangeHandler={setGraduationStatus}

                            />
                            <GraduationYear 
                                describe="*졸업자의 경우 졸업연도를 선택해주세요"
                                valueChangeHandler={setGraduationYear}
                            />
                        </>
                     }
                    <Specialty 
                        describe="*해당하는 특기사항에 체크해주세요"
                        nationalMeritChangeHandler={setNationalMerit}
                        specialAdmissionChangeHandler={setSpecialAdmission}
                    />
                </li>
                <DefaultlNavigation 
                    page="choiceType"
                    currentPageClickHandler={
                        ()=> {history.push('/')}
                    }
                    nextPageClickHandler={
                        ()=> {
                            goNextPage({
                                qualifacationExam,
                                applyType,
                                district,
                                graduationStatus,
                                graduationYear,
                                nationalMerit,
                                specialAdmission,
                            })
                        }
                    }
                />
            </TypeMain>
        </TypeDiv>
    )
}

export default withRouter(ChoiceType);