import React, { FC } from 'react';
import { 
    GradeTable,
    GradeSubTitle,
} from '../../../styles/Grade';
import VolanteerWorkTime from './VolanteerWorkTime';
import Attendance from './Attendance';

const VolanteerWorkTimeAttendance: FC = () => {
    return (
        <>
            <GradeSubTitle>
                봉사 & 출석
            </GradeSubTitle>
            <GradeTable>
                <tbody>
                    <VolanteerWorkTime/>
                    <Attendance/>
                </tbody>
            </GradeTable>
        </>
    )
}

export default VolanteerWorkTimeAttendance;