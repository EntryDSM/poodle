import React, { FC } from 'react';
import { SubjectType } from '@/core/redux/actions/Grade';
import { GradeColumn, SubjectColumn } from './column';
import { GraduatedGradeScoreRow } from '@/styles/Grade';

interface Props {
  subject: SubjectType;
}

const GradeRow: FC<Props> = ({ children, subject }) => (
  <GraduatedGradeScoreRow>
    <SubjectColumn>{children}</SubjectColumn>
    <GradeColumn subject={subject} semester={1} grade={1} />
    <GradeColumn subject={subject} semester={2} grade={1} />
    <GradeColumn subject={subject} semester={1} grade={2} />
    <GradeColumn subject={subject} semester={2} grade={2} />
    <GradeColumn subject={subject} semester={1} grade={3} />
    <GradeColumn subject={subject} semester={2} grade={3} />
  </GraduatedGradeScoreRow>
);

export default GradeRow;
