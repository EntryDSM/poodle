import React, { 
    FC,
    useState,
} from 'react';
import {
    GradeButtonList,
} from '@/styles/Grade';

type GradeType = "A" | "B" | "C" | "D" | "E" | "X";

interface Props {
    onChange: Function,
}

const GradeColumn: FC<Props> = ({
}) => {
    const gradeList:GradeType[] = ['A','B','C','D','E',"X"];
    const [grade, gradeChange] = useState<GradeType>('A');
    const gradeClickHandler = (grade: GradeType) => {
        console.log(grade);
        gradeChange(grade);
    }
    return (
        <td 
            colSpan={1}
            className="grade"
        >
            <GradeButtonList>
                <label>
                    <input type="checkbox"/>
                    <li>
                        {grade}
                    </li>
                    <div>
                        {
                            gradeList.map((grade)=> 
                                <li
                                    onClick={() => gradeClickHandler(grade)}
                                >
                                    {grade}
                                </li>
                            )    
                        }
                    </div>
                </label>
            </GradeButtonList>
        </td>
    )
}

export default GradeColumn;