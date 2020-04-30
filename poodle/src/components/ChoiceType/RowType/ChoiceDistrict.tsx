import React, { FC } from 'react';
import { TypeElementContent } from '../../../styles/ChoiceType';
import { Radio } from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';

interface Props {
    valueChangeHandler: (value: string) => void
}

const ChoiceDistrict:FC<Props> = ({ 
    valueChangeHandler 
}) => {
    return (
        <DefaultRow title="지역 선택">
            <TypeElementContent>
                <div>
                    <Radio 
                        radioName="district"
                        value="대전"
                        valueChangeHandler={valueChangeHandler}
                    >대전</Radio>
                    <Radio
                        radioName="district"
                        value="전국"
                        valueChangeHandler={valueChangeHandler}
                    >전국</Radio>
                </div>
            </TypeElementContent>
        </DefaultRow>
    )
}

export default ChoiceDistrict;