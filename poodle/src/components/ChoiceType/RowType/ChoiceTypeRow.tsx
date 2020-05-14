import React, { 
    useState, 
    FC,
} from 'react';
import { TypeElementContent } from '../../../styles/ChoiceType';
import { 
    Radio, 
    Dropdown, 
    DropdownRadio,
    RadioGroupProvider,
} from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';
import typeConstance from './constance/TypeConstance';

interface Props {
    valueChangeHandler: (type:string) => void,
    applyType: string,
}

const ChoiceTypeRow: FC<Props> = ({ 
    valueChangeHandler,
    applyType,
}) => {
    const [isAble, ableChange] = useState(false);
    const ableRadioClickHandler = (isAble: boolean) => {
        ableChange(isAble);
    }
    const RadioClickHandler = (value: string) => {
        valueChangeHandler(value);
        ableChange(false);
    }
    return (
        <DefaultRow title="전형 선택">
            <TypeElementContent>
                <div>
                    <RadioGroupProvider 
                        onChange={RadioClickHandler}
                        name="type"
                    >
                            <Radio 
                                value="일반전형"
                            >일반전형</Radio>
                            <Radio  
                                value="마이스터 인재전형"
                            >마이스터 인재전형</Radio>
                            <DropdownRadio
                                value={applyType}  
                                ableChange={ableRadioClickHandler}
                            />
                    </RadioGroupProvider>
                    <div className="checkbox">
                        <Dropdown 
                            menuList={typeConstance}
                            width="180px"
                            onChange={valueChangeHandler}
                            isAble={isAble}
                            savedValue={applyType}
                        />
                    </div>
                </div>
            </TypeElementContent>
        </DefaultRow>
    )
}

export default ChoiceTypeRow;