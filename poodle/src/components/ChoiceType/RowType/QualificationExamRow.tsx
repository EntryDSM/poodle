import React, { FC } from 'react';
import { TypeElementContent } from '../../../styles/ChoiceType';
import { Checkbox } from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';

interface Props {
    describe?: string,
    valueChangeHandler: (isQualificationExam:boolean) => void,
}

const QualificationExam: FC<Props> = ({ 
    describe, 
    valueChangeHandler,
}) => {
    return (
        <DefaultRow title="검정고시 지원 여부">
            <TypeElementContent>
                <div>
                    <Checkbox valueChangeHandler={valueChangeHandler}/>
                </div>
                <div>
                    <p>{describe}</p>
                </div>
            </TypeElementContent>
        </DefaultRow>
    )
}

export default QualificationExam;