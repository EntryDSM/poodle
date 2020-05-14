import React, { FC } from 'react';
import { TypeElementContent } from '../../../styles/ChoiceType';
import { Checkbox } from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';

interface Props {
    describe: string,
    nationalMeritChangeHandler: (value: boolean) => void,
    specialAdmissionChangeHandler: (value: boolean) => void,
    nationalMerit: boolean,
    specialAdmission: boolean,
}

const Specialty: FC<Props> = ({ 
    describe, 
    nationalMeritChangeHandler, 
    specialAdmissionChangeHandler,
    nationalMerit,
    specialAdmission,
}) => {
    return (
        <DefaultRow title="특기 사항">
            <TypeElementContent>
                <div>
                    <Checkbox
                        onChange={nationalMeritChangeHandler}
                        checked={nationalMerit}
                    >국가 유공자</Checkbox>
                    <Checkbox
                        onChange={specialAdmissionChangeHandler}
                        checked={specialAdmission}
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