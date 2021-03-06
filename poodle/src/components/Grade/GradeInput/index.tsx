import React, { FC, useEffect } from 'react';
import GradeScore from './Grade';
import SchoolYear from './SchoolYear';
import { GradeTable } from '@/styles/Grade';
import GradeHeader from './GradeHeader';
import NonTransferSemester from '../NonTransferSemester';
import {
  mapStateToProps,
  mapDispatchToProps,
} from '@/container/Grade/ConnectionGrade';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & { isGradeAllX: boolean };

const GradeInput: FC<Props> = ({ isGradeAllX, isGradeFirst }) => {
  return (
    <>
      <GradeHeader />
      <NonTransferSemester />
      <GradeTable>
        <tbody>
          <GradeScore isGradeAllX={isGradeAllX} isGradeFirst={isGradeFirst} />
        </tbody>
      </GradeTable>
    </>
  );
};

export default GradeInput;
