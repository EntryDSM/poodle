import React, { FC, useState } from 'react';
import { TypeElementContent } from '../../../styles/ChoiceType';
import { Dropdown } from '../../default/ApplicationFormDefault';
import { DefaultRow } from '..';

interface Props {
    describe: string,
    valueChangeHandler: (value: string) => void,
}

const GraduationYear: FC<Props> = ({ 
    describe, 
    valueChangeHandler 
}) => {
    const [graduationYearList, setYearList] = useState([
        { VALUE: "2020", isChecked: true, },
        { VALUE: "2019", isChecked: false, },
        { VALUE: "2018", isChecked: false, },
        { VALUE: "2017", isChecked: false, },
        { VALUE: "2016", isChecked: false, },
    ]);
    return (
        <DefaultRow title="졸업 연도">
            <TypeElementContent>
                <div> 
                    <Dropdown 
                        valueChangeHandler={valueChangeHandler}
                        setList={setYearList} 
                        menuList={graduationYearList}
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