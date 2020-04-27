import React, { FC, useState } from 'react';
import { 
    IntroductionSubTitle, 
    IntroductionDescription, 
    IntroductionTextarea 
} from '../../styles/Introduction';

interface Props {
    title: string,
    describe: string,
    valueChangeHandler: (value: string) => void,
}

const IntroductionInputTemplete: FC<Props> = ({ 
    title, 
    describe, 
    valueChangeHandler 
}) => {
    const [textLenght,lengthChange] = useState(0);
    const textareaChangeHandler = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        lengthChange(value.length);
        valueChangeHandler(value);
    }
    return (
        <>
            <IntroductionSubTitle>{title}</IntroductionSubTitle>
            <IntroductionDescription>&nbsp;&nbsp;&nbsp;&nbsp;{describe}</IntroductionDescription>
            <IntroductionTextarea>
                <textarea onChange={textareaChangeHandler} maxLength={1600}/>
                <div>
                    <p>{textLenght}/1600</p>
                </div>
            </IntroductionTextarea>
        </>
    )
}

export default IntroductionInputTemplete;