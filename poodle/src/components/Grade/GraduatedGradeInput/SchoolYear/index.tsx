import React, { FC } from 'react';
import {
  GraduatedSemesterRow,
  GraduatedGradeSchoolYearRow,
} from '@/styles/Grade';
import { SchoolYearColumn, SemesterColumn } from './column';

const SchoolYearRow: FC = () => (
  <>
    <GraduatedGradeSchoolYearRow>
      <td className='header empty' />
      <SchoolYearColumn>1학년</SchoolYearColumn>
      <SchoolYearColumn>2학년</SchoolYearColumn>
      <SchoolYearColumn>3학년</SchoolYearColumn>
    </GraduatedGradeSchoolYearRow>
    <GraduatedSemesterRow>
      <td className='header empty' />
      <SemesterColumn>1학기</SemesterColumn>
      <SemesterColumn>2학기</SemesterColumn>
      <SemesterColumn>1학기</SemesterColumn>
      <SemesterColumn>2학기</SemesterColumn>
      <SemesterColumn>1학기</SemesterColumn>
      <SemesterColumn>2학기</SemesterColumn>
    </GraduatedSemesterRow>
  </>
);

export default SchoolYearRow;
