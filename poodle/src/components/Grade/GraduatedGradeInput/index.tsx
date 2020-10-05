import React, { FC } from 'react';
import GradeScore from './Grade';
import { GradeTable } from '@/styles/Grade';
import NonTransferSemester from '../GraduatedNonTransferSemester';
import {
  mapStateToProps,
  mapDispatchToProps,
} from '@/container/Grade/ConnectionGrade';
import GradeHeader from '../GradeInput/GradeHeader';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & { isGradeAllX: boolean };

const GraduatedGradeInput: FC<Props> = ({ isGradeAllX, isGradeFirst }) => {
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

export default GraduatedGradeInput;
