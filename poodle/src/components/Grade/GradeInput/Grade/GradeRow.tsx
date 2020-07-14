import React, { FC } from 'react';
import { SubjectType } from '@/core/redux/actions/Grade';
import { GradeColumn, SubjectColumn } from './column';
import { GradeScoreRow } from '../../../../styles/Grade';

interface Props {
  subject: SubjectType;
}

const GradeRow: FC<Props> = ({ children, subject }) => (
  <GradeScoreRow>
    <SubjectColumn>{children}</SubjectColumn>
    <GradeColumn subject={subject} semester={1} grade={1} />
    <GradeColumn subject={subject} semester={2} grade={1} />
    <GradeColumn subject={subject} semester={1} grade={2} />
    <GradeColumn subject={subject} semester={2} grade={2} />
    <GradeColumn subject={subject} semester={1} grade={3} />
  </GradeScoreRow>
);

export default GradeRow;
