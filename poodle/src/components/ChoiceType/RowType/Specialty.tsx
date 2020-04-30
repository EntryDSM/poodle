import React, { FC } from 'react';
import { TypeElementContent } from '../../../styles/ChoiceType';
import { Checkbox } from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';

interface Props {
    describe: string,
    nationalMeritChangeHandler: (value: boolean) => void,
    specialAdmissionChangeHandler: (value: boolean) => void,
}

const Specialty: FC<Props> = ({ 
    describe, 
    nationalMeritChangeHandler, 
    specialAdmissionChangeHandler 
}) => {
    return (
        <DefaultRow title="특기 사항">
            <TypeElementContent>
                <div>
                    <Checkbox
                        valueChangeHandler={nationalMeritChangeHandler}
                    >국가 유공자</Checkbox>
                    <Checkbox
                        valueChangeHandler={specialAdmissionChangeHandler}
                    >특례 입학 대상자</Checkbox>
                </div>
                <div>
                    <p>{describe}</p>
                </div>
            </TypeElementContent>
        </DefaultRow>
    )
}

export default Specialty;