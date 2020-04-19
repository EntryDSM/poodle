import React, { FC } from 'react';
import { 
    Title,
    DefaultlNavigation,
} from '../../components/default/ApplicationFormDefault';
import { 
    IntroductionDiv,
    IntroductionMain, 
} from '../../styles/Introduction';
import { 
    IntroductionInputTemplete,
} from '../../components/Introduction';
import { 
    SELF_INTRODUCTION_DESCRIBE,
    STUDY_PLAN_DESCRIBE,
} from '../../components/Introduction/constance';
import {
    mapDispatchToProps,
    mapStateToProps,
} from './ConnectIntroduction'

type Props = ReturnType<typeof mapDispatchToProps> & 
ReturnType<typeof mapStateToProps>

const Introduction: FC<Props> = ({
    setSelfIntroduction,
    setStudyPlan,
}) => {
    return (
        <IntroductionDiv>
            <IntroductionMain>
                <Title margin="80px">자기소개서 & 학업계획서 작성</Title>
                <IntroductionInputTemplete 
                    title="자기소개서" 
                    describe={SELF_INTRODUCTION_DESCRIBE}
                    valueChangeHandler={setSelfIntroduction}
                />
                <IntroductionInputTemplete 
                    title="학업계획서" 
                    describe={STUDY_PLAN_DESCRIBE}
                    valueChangeHandler={setStudyPlan}
                />
                {/* <DefaultlNavigation page="introduction"/> */}
            </IntroductionMain>
        </IntroductionDiv>
    )
}

export default Introduction;