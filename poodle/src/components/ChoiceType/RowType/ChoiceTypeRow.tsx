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
    valueChangeHandler: (value:string) => void,
    applyType: string,
}

const ChoiceTypeRow: FC<Props> = ({ 
    valueChangeHandler,
    applyType,
}) => {
    const [isAble, ableChange] = useState(false);
    const [nowDropdown, dropdownChange] = useState<any>("")
    // dropdown에 연결된 radio를 클릭했을 때, 값이 dropdown에 표시된 값으로 변경되어야 해서 추가된 state입니다.
    // merge시 주석 지우겠습니다.
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
                        value={applyType}
                    >
                            <Radio 
                                value="일반전형"
                            >일반전형</Radio>
                            <Radio  
                                value="마이스터 인재전형"
                            >마이스터 인재전형</Radio>
                            <DropdownRadio
                                value={nowDropdown}  
                                ableChange={ableRadioClickHandler}
                                options={typeConstance}
                            />
                    </RadioGroupProvider>
                    <Dropdown 
                        options={typeConstance}
                        width="180px"
                        onChange={valueChangeHandler}
                        isAble={isAble}
                        value={applyType}
                        dropdownChange={dropdownChange}
                    />
                </div>
            </TypeElementContent>
        </DefaultRow>
    )
}

export default ChoiceTypeRow;