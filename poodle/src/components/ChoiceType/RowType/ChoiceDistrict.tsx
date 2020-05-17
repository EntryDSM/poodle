import React, { 
    FC,
} from 'react';
import { TypeElementContent } from '../../../styles/ChoiceType';
import { 
    Radio,
    RadioGroupProvider,
} from '../../default/ApplicationFormDefault';
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
                    <RadioGroupProvider 
                        onChange={valueChangeHandler}
                    >
                        <Radio 
                            value="대전"
                        >대전</Radio>
                        <Radio
                            value="전국"
                        >전국</Radio>
                    </RadioGroupProvider>
                </div>
            </TypeElementContent>
        </DefaultRow>
    )
}

export default ChoiceDistrict;