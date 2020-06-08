import React, { FC } from 'react';
import { 
    GradeTable,
    GradeSubTitle,
    SchoolYearRow,
    SemesterRow,
} from '../../../styles/Grade';
import {
    GradeColumn,
    SemesterColumn,
} from './column';

const NonTransferSemester: FC = () => {
    return (
        <>
            <GradeSubTitle>
                미이수 학기 선택
            </GradeSubTitle>
            <GradeTable>
                <tbody>
                    <SchoolYearRow>
                        <GradeColumn>
                            1학년
                        </GradeColumn>
                        <GradeColumn>
                            2학년
                        </GradeColumn>
                        <GradeColumn>
                            3학년
                        </GradeColumn>
                    </SchoolYearRow>
                    <SemesterRow>
                        <SemesterColumn>
                            1학기
                        </SemesterColumn>
                        <SemesterColumn>
                            2학기
                        </SemesterColumn>

                        <SemesterColumn>
                            1학기
                        </SemesterColumn>
                        <SemesterColumn>
                            2학기
                        </SemesterColumn>
                            
                        <SemesterColumn>
                            1학기
                        </SemesterColumn>
                        <SemesterColumn>
                            2학기
                        </SemesterColumn>
                    </SemesterRow>
                </tbody>
            </GradeTable>
        </>
    )
}

export default NonTransferSemester;