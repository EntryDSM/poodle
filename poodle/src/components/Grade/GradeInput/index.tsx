import React, { FC } from 'react';
import GradeScore from './Grade';
import SchoolYear from './SchoolYear';
import { 
    GradeTable,
    GradeSubTitle, 
} from '../../../styles/Grade';

const GradeInput: FC = () => {
    return (
        <>
            <GradeSubTitle>
                성적 입력
            </GradeSubTitle>
            <GradeTable>
                <tbody>
                    <SchoolYear/>
                    <GradeScore/>
                </tbody>
            </GradeTable>
        </>
    )
}

export default GradeInput;