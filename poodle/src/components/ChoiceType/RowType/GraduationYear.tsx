import React, { 
    FC, 
    useEffect,
} from 'react';
import { TypeElementContent } from '../../../styles/ChoiceType';
import { Dropdown } from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';
import graduationYearConstance from './constance/GraduationYearConstance';

interface Props {
    describe: string,
    valueChangeHandler: (value: string) => void,
    graduationYear: string,
}

const GraduationYear: FC<Props> = ({ 
    describe, 
    valueChangeHandler,
    graduationYear,
}) => {
    useEffect(()=> {
        valueChangeHandler("2020");
    },[])
    return (
        <DefaultRow title="졸업 연도">
            <TypeElementContent>
                <div> 
                    <Dropdown 
                        onChange={valueChangeHandler}
                        menuList={graduationYearConstance}
                        savedValue={graduationYear}
                    />
                </div>
                <div>
                    <p>{describe}</p>
                </div>
            </TypeElementContent>
        </DefaultRow>
    )
}

export default GraduationYear;