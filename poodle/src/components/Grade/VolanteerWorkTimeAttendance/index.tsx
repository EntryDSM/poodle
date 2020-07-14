import React, { FC } from 'react';
import { GradeTable, GradeSubTitle } from '../../../styles/Grade';
import VolanteerWorkTime from './VolanteerWorkTime';
import Attendance from './Attendance';
import {
  mapStateToProps,
  mapDispatchToProps,
} from '../../../container/Grade/ConnectionGrade';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  otherProps;

type otherProps = {
  isError: boolean;
};

const VolanteerWorkTimeAttendance: FC<Props> = ({
  setServiceTime,
  setAbsentDay,
  setCutClassDay,
  setLeaveLateDay,
  setPerceptionDay,
  serviceTime,
  absentDay,
  leaveLateDay,
  perceptionDay,
  cutClassDay,
  isError,
}) => (
  <>
    <GradeSubTitle>봉사 & 출석</GradeSubTitle>
    <GradeTable>
      <tbody>
        <VolanteerWorkTime
          serviceTimeChange={setServiceTime}
          serviceTime={serviceTime}
          isError={isError}
        />
        <Attendance
          setAbsentDay={setAbsentDay}
          setCutClassDay={setCutClassDay}
          setLeaveLateDay={setLeaveLateDay}
          setPerceptionDay={setPerceptionDay}
          absentDay={absentDay}
          leaveLateDay={leaveLateDay}
          perceptionDay={perceptionDay}
          cutClassDay={cutClassDay}
          isError={isError}
        />
      </tbody>
    </GradeTable>
  </>
);

export default VolanteerWorkTimeAttendance;
