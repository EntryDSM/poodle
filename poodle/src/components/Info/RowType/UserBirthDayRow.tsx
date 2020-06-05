import React, { 
    FC, 
    useState,
    useEffect,
    useCallback,
} from 'react';
import { DefaultRowWithPicture } from '../';
import { Dropdown } from '../../default/ApplicationFormDefault';
import { InfoElementContent } from '../../../styles/Info';
import { 
    DAY, 
    MONTH, 
    YEAR 
} from './constance/UserBirthDayConstance';

interface options {
    VALUE: string, 
    isChecked: boolean,
}

interface Props {
    valueChangeHandler:(value: string) => void,
}

const UserBirthDayRow: FC<Props> = ({
    valueChangeHandler,
}) => {
    const [checkedDay, _checkedDayChange] = useState(DAY[0].VALUE);
    const [checkedMonth, _checkedMonthChange] = useState(MONTH[0].VALUE);
    const [checkedYear, _checkedYearChange] = useState(YEAR[0].VALUE);
    const getCheckedMenu = useCallback((
        options:options[]
    ): options => {
        const checkedMenu = options.filter(menu => menu.isChecked);
        return checkedMenu[0];
    },[]);
    const checkedDayChange = useCallback((value: string)=> {
        _checkedDayChange(value);
    },[])
    const checkedMonthChange = useCallback((value: string)=> {
        _checkedMonthChange(value);
    },[])
    const checkedYearChange = useCallback((value: string)=> {
        _checkedYearChange(value);
    },[])
    useEffect(()=> {
        const birthdayText = `${checkedYear}-${checkedMonth}-${checkedDay}`;
        valueChangeHandler(birthdayText);
    },[
        checkedYear, 
        checkedMonth, 
        checkedDay, 
        valueChangeHandler,
        getCheckedMenu,
    ])
    return (
        <DefaultRowWithPicture title="생년월일">
            <InfoElementContent>
                <div>
                    <Dropdown 
                        onChange={checkedYearChange} 
                        options={YEAR}
                        width="110px"
                        value={checkedYear}
                    />
                    <span>년</span>
                    <Dropdown
                        onChange={checkedMonthChange} 
                        options={MONTH}
                        width="80px"
                        value={checkedMonth}
                    />
                    <span>월</span>
                    <Dropdown 
                        onChange={checkedDayChange} 
                        options={DAY}
                        width="80px"
                        value={checkedDay}
                    />
                    <span>일</span>
                </div>
            </InfoElementContent>
        </DefaultRowWithPicture>
    )
}

export default UserBirthDayRow;