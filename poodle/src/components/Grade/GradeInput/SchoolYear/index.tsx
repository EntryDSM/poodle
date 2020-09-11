import React, { FC } from 'react';
import { GradeSemesterRow, GradeSchoolYearRow } from '@/styles/Grade';
import { SchoolYearColumn, SemesterColumn } from './column';

const SchoolYearRow: FC = () => (
  <>
    <GradeSchoolYearRow>
      <td className='header empty' />
      <SchoolYearColumn>1학년</SchoolYearColumn>
      <SchoolYearColumn>2학년</SchoolYearColumn>
      <SchoolYearColumn isHalf>3학년</SchoolYearColumn>
    </GradeSchoolYearRow>
    <GradeSemesterRow>
      <td className='header empty' />
      <SemesterColumn>1학기</SemesterColumn>
      <SemesterColumn>2학기</SemesterColumn>
      <SemesterColumn>1학기</SemesterColumn>
      <SemesterColumn>2학기</SemesterColumn>
      <SemesterColumn>1학기</SemesterColumn>
    </GradeSemesterRow>
  </>
);

export default SchoolYearRow;
