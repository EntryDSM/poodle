import React, { FC } from 'react';
import { TypeElementContent } from '../../../styles/ChoiceType';
import { Checkbox } from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';

interface Props {
    description?: string,
    valueChangeHandler: (isQualificationExam:boolean) => void,
}

const QualificationExam: FC<Props> = ({ 
    description, 
    valueChangeHandler,
}) => {
    return (
        <DefaultRow title="검정고시 지원 여부">
            <TypeElementContent>
                <div>
                    <Checkbox onChange={valueChangeHandler}/>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </TypeElementContent>
        </DefaultRow>
    )
}

export default QualificationExam;