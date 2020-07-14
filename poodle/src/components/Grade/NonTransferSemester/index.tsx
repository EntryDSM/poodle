import React, { FC } from 'react';
import {
  GradeTable,
  GradeSubTitle,
  SchoolYearRow,
  SemesterRow,
} from '../../../styles/Grade';
import { GradeColumn, SemesterColumn } from './column';
import {
  mapStateToProps,
  mapDispatchToProps,
} from '../../../container/Grade/ConnectionGrade';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const NonTransferSemester: FC<Props> = () => (
  <>
    <GradeSubTitle>미이수 학기 선택</GradeSubTitle>
    <GradeTable>
      <tbody>
        <SchoolYearRow>
          <GradeColumn>1학년</GradeColumn>
          <GradeColumn>2학년</GradeColumn>
          <GradeColumn>3학년</GradeColumn>
        </SchoolYearRow>
        <SemesterRow>
          <SemesterColumn grade={1} semester={1}>
            1학기
          </SemesterColumn>
          <SemesterColumn grade={1} semester={2}>
            2학기
          </SemesterColumn>
          <SemesterColumn grade={2} semester={1}>
            1학기
          </SemesterColumn>
          <SemesterColumn grade={2} semester={2}>
            2학기
          </SemesterColumn>

          <SemesterColumn grade={3} semester={1} isLast>
            1학기
          </SemesterColumn>
        </SemesterRow>
      </tbody>
    </GradeTable>
  </>
);

export default NonTransferSemester;
