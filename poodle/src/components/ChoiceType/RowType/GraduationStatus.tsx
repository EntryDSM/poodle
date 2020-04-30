import React, { FC } from 'react';
import { TypeElementContent } from '../../../styles/ChoiceType';
import { Radio } from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';

interface Props {
    valueChangeHandler: (value: string) => void 
}

const GraduationStatus: FC<Props> = ({ 
    valueChangeHandler 
}) => {
    return (
        <DefaultRow title="졸업 구분">
            <TypeElementContent>
                <div>
                    <Radio 
                        radioName="graduation"
                        value="졸업예정자"
                        valueChangeHandler={valueChangeHandler}    
                    >졸업예정자</Radio>
                    <Radio 
                        radioName="graduation"
                        value="졸업자"
                        valueChangeHandler={valueChangeHandler}   
                    >졸업자</Radio>
                </div>
            </TypeElementContent>
        </DefaultRow>
    )
}


export default GraduationStatus;