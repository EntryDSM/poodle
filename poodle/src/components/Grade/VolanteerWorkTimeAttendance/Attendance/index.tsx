import React, { FC } from 'react';
import { AttendanceRowDiv } from '../../../../styles/Grade';
import { 
    PerceptionColumn,
    LeaveLateColumn,
    CutClassColumn,
    AbsentColumn,
} from './column';


const Attendance: FC = () => {
    return (
        <AttendanceRowDiv>
            <tr>
                <td 
                    className="header bottom" 
                    rowSpan={2}
                >
                    <div>
                        출석 정보
                    </div>
                </td>
                <td className="element">
                    <div>
                        <AbsentColumn/>
                    </div>
                </td>
                <td className="element">
                    <div>
                        <LeaveLateColumn/>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="element">
                    <div>
                        <PerceptionColumn/>
                    </div>
                </td>
                <td className="element">
                    <div>
                        <CutClassColumn/>
                    </div>
                </td>
            </tr>
        </AttendanceRowDiv>
    )
}


export default Attendance;