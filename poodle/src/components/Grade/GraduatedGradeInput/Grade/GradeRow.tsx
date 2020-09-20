import React, { FC } from 'react';
import { SubjectType } from '@/core/redux/actions/Grade';
import { GradeColumn, SubjectColumn } from './column';
import { GraduatedGradeScoreRow } from '@/styles/Grade';

interface Props {
  subject: SubjectType;
  isGradeAllX: boolean;
  isGradeFirst: boolean;
}

const GradeRow: FC<Props> = ({
  children,
  subject,
  isGradeAllX,
  isGradeFirst,
}) => (
  <GraduatedGradeScoreRow>
    <SubjectColumn>{children}</SubjectColumn>
    <GradeColumn
      subject={subject}
      semester={1}
      grade={1}
      isGradeAllX={isGradeAllX}
      isGradeFirst={isGradeFirst}
    />
    <GradeColumn
      subject={subject}
      semester={2}
      grade={1}
      isGradeAllX={isGradeAllX}
      isGradeFirst={isGradeFirst}
    />
    <GradeColumn
      subject={subject}
      semester={1}
      grade={2}
      isGradeAllX={isGradeAllX}
      isGradeFirst={isGradeFirst}
    />
    <GradeColumn
      subject={subject}
      semester={2}
      grade={2}
      isGradeAllX={isGradeAllX}
      isGradeFirst={isGradeFirst}
    />
    <GradeColumn
      subject={subject}
      semester={1}
      grade={3}
      isGradeAllX={isGradeAllX}
      isGradeFirst={isGradeFirst}
    />
    <GradeColumn
      subject={subject}
      semester={2}
      grade={3}
      isGradeAllX={isGradeAllX}
      isGradeFirst={isGradeFirst}
    />
  </GraduatedGradeScoreRow>
);

export default GradeRow;
