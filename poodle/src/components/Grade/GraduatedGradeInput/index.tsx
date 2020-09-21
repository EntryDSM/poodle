import React, { FC } from 'react';
import GradeScore from './Grade';
import SchoolYear from './SchoolYear';
import { GradeTable } from '@/styles/Grade';
import GradeHeader from './GradeHeader';
import {
  mapStateToProps,
  mapDispatchToProps,
} from '@/container/Grade/ConnectionGrade';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & { isGradeAllX: boolean };

const GraduatedGradeInput: FC<Props> = ({ isGradeAllX, isGradeFirst }) => {
  return (
    <>
      <GradeHeader />
      <GradeTable>
        <tbody>
          <SchoolYear />
          <GradeScore isGradeAllX={isGradeAllX} isGradeFirst={isGradeFirst} />
        </tbody>
      </GradeTable>
    </>
  );
};

export default GraduatedGradeInput;
