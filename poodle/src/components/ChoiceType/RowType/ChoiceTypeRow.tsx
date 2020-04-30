import React, { useState, FC } from 'react';
import { TypeElementContent } from '../../../styles/ChoiceType';
import { 
    Radio, 
    Dropdown, 
    DropdownRadio 
} from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';

interface Props {
    valueChangeHandler: (type:string) => void,
}

interface menuList {
    VALUE: string, 
    isChecked: boolean,
}

const ChoiceTypeRow: FC<Props> = ({ 
    valueChangeHandler,
}) => {
    const [isAble, ableChange] = useState(false);
    const [otherTypeList, setTypeList] = useState([
        { VALUE: "사회통합전형", isChecked: true, },
        { VALUE: "기초생활수급자", isChecked: false, },
        { VALUE: "한부모가족", isChecked: false, },
        { VALUE: "차상위계층", isChecked: false, },
        { VALUE: "소년소녀가장", isChecked: false, },
        { VALUE: "북한이탈주민", isChecked: false, },
        { VALUE: "다문화가정", isChecked: false, },
    ]);
    const getCheckedMenu = (menuList:menuList[]) => {
        const checkedMenu = menuList.filter(menu => menu.isChecked);
        return checkedMenu[0];
    }
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
                    <Radio 
                        valueChangeHandler={RadioClickHandler}
                        radioName="type" 
                        value="일반전형"
                    >일반전형</Radio>
                    <Radio 
                        valueChangeHandler={RadioClickHandler}
                        radioName="type" 
                        value="마이스터 인재전형"
                    >마이스터 인재전형</Radio>
                    <DropdownRadio 
                        valueChangeHandler={valueChangeHandler}
                        radioName="type" 
                        value={getCheckedMenu(otherTypeList).VALUE}  
                        ableChange={ableRadioClickHandler}
                    />
                    <div className="checkbox">
                        <Dropdown 
                            menuList={otherTypeList} 
                            setList={setTypeList} 
                            width="180px"
                            valueChangeHandler={valueChangeHandler}
                            isAble={isAble}
                        />
                    </div>
                </div>
            </TypeElementContent>
        </DefaultRow>
    )
}

export default ChoiceTypeRow;