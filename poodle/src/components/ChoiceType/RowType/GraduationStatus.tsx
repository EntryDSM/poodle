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

const GraduationStatus: FC<Props> = ({ 
    valueChangeHandler 
}) => {
    return (
        <DefaultRow title="졸업 구분">
            <TypeElementContent>
                <div>
                    <RadioGroupProvider
                        onChange={valueChangeHandler}
                        name="graduation"
                    >
                        <Radio
                            value="졸업예정자"
                        >졸업예정자</Radio>
                        <Radio
                            value="졸업자"
                        >졸업자</Radio>
                    </RadioGroupProvider>
                </div>
            </TypeElementContent>
        </DefaultRow>
    )
}


export default GraduationStatus;