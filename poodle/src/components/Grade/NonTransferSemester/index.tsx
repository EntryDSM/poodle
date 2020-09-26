import React, { FC } from 'react';
import { GradeTable, SchoolYearRow, SemesterRow } from '@/styles/Grade';
import { GradeColumn, SemesterColumn } from './column';

const NonTransferSemester: FC = () => (
  <>
    <GradeTable margin='0px' borderBottom='0px'>
      <tbody>
        <SchoolYearRow>
          <td className='empty' rowSpan={2}>
            <div>자유학기(학년)제</div>
          </td>
          <GradeColumn>1학년</GradeColumn>
          <GradeColumn>2학년</GradeColumn>
          <GradeColumn colspan={1}>3학년</GradeColumn>
        </SchoolYearRow>
        <SemesterRow>
          <SemesterColumn grade={1} semester={1}>
            1학기
          </SemesterColumn>
          <SemesterColumn grade={1} semester={2}>
            2학기
          </SemesterColumn>
          <SemesterColumn grade={2} semester={1}>
            1학기
          </SemesterColumn>
          <SemesterColumn grade={2} semester={2}>
            2학기
          </SemesterColumn>

          <SemesterColumn grade={3} semester={1}>
            1학기
          </SemesterColumn>
        </SemesterRow>
      </tbody>
    </GradeTable>
  </>
);

export default NonTransferSemester;
