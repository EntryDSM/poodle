import React, { FC } from 'react';
import GradeRow from './GradeRow';

const GradeScore: FC = () => (
  <>
    <GradeRow subject='korean'>국어</GradeRow>
    <GradeRow subject='society'>사회</GradeRow>
    <GradeRow subject='history'>역사</GradeRow>
    <GradeRow subject='math'>수학</GradeRow>
    <GradeRow subject='science'>과학</GradeRow>
    <GradeRow subject='tech'>기술가정</GradeRow>
    <GradeRow subject='english'>영어</GradeRow>
  </>
);

export default GradeScore;
