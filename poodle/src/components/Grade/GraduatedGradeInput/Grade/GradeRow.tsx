import React, { FC } from 'react';
import { SubjectType } from '@/core/redux/actions/Grade';
import { GradeColumn, SubjectColumn } from './column';
import { GraduatedGradeScoreRow } from '@/styles/Grade';

interface Props {
  subject: SubjectType;
  isGradeAllX: boolean;
}

const GradeRow: FC<Props> = ({ children, subject, isGradeAllX }) => (
  <GraduatedGradeScoreRow>
    <SubjectColumn>{children}</SubjectColumn>
    <GradeColumn
      subject={subject}
      semester={1}
      grade={1}
      isGradeAllX={isGradeAllX}
    />
    <GradeColumn
      subject={subject}
      semester={2}
      grade={1}
      isGradeAllX={isGradeAllX}
    />
    <GradeColumn
      subject={subject}
      semester={1}
      grade={2}
      isGradeAllX={isGradeAllX}
    />
    <GradeColumn
      subject={subject}
      semester={2}
      grade={2}
      isGradeAllX={isGradeAllX}
    />
    <GradeColumn
      subject={subject}
      semester={1}
      grade={3}
      isGradeAllX={isGradeAllX}
    />
    <GradeColumn
      subject={subject}
      semester={2}
      grade={3}
      isGradeAllX={isGradeAllX}
    />
  </GraduatedGradeScoreRow>
);

export default GradeRow;
