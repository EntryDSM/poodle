import React, { FC } from 'react';
import GradeRow from './GradeRow';

interface Props {
  isGradeAllX: boolean;
  isGradeFirst: boolean;
}

const GradeScore: FC<Props> = ({ isGradeAllX, isGradeFirst }) => (
  <>
    <GradeRow
      subject='korean'
      isGradeAllX={isGradeAllX}
      isGradeFirst={isGradeFirst}
    >
      국어
    </GradeRow>
    <GradeRow
      subject='society'
      isGradeAllX={isGradeAllX}
      isGradeFirst={isGradeFirst}
    >
      사회
    </GradeRow>
    <GradeRow
      subject='history'
      isGradeAllX={isGradeAllX}
      isGradeFirst={isGradeFirst}
    >
      역사
    </GradeRow>
    <GradeRow
      subject='math'
      isGradeAllX={isGradeAllX}
      isGradeFirst={isGradeFirst}
    >
      수학
    </GradeRow>
    <GradeRow
      subject='science'
      isGradeAllX={isGradeAllX}
      isGradeFirst={isGradeFirst}
    >
      과학
    </GradeRow>
    <GradeRow
      subject='tech'
      isGradeAllX={isGradeAllX}
      isGradeFirst={isGradeFirst}
    >
      기술가정
    </GradeRow>
    <GradeRow
      subject='english'
      isGradeAllX={isGradeAllX}
      isGradeFirst={isGradeFirst}
    >
      영어
    </GradeRow>
  </>
);

export default GradeScore;
