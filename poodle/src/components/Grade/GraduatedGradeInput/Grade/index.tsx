import React, { FC } from 'react';
import GradeRow from './GradeRow';

interface Props {
  isGradeAllX: boolean;
}

const GradeScore: FC<Props> = ({ isGradeAllX }) => (
  <>
    <GradeRow subject='korean' isGradeAllX={isGradeAllX}>
      국어
    </GradeRow>
    <GradeRow subject='society' isGradeAllX={isGradeAllX}>
      사회
    </GradeRow>
    <GradeRow subject='history' isGradeAllX={isGradeAllX}>
      역사
    </GradeRow>
    <GradeRow subject='math' isGradeAllX={isGradeAllX}>
      수학
    </GradeRow>
    <GradeRow subject='science' isGradeAllX={isGradeAllX}>
      과학
    </GradeRow>
    <GradeRow subject='tech' isGradeAllX={isGradeAllX}>
      기술가정
    </GradeRow>
    <GradeRow subject='english' isGradeAllX={isGradeAllX}>
      영어
    </GradeRow>
  </>
);

export default GradeScore;
