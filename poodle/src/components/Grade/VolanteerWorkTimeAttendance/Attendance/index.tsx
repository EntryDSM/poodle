import React, { FC } from 'react';
import { AttendanceRowDiv } from '@/styles/Grade';
import AttendanceColumn from './column/AttendanceColumn';

type dispatchFuncType = (value: string) => void;

interface Props {
  setAbsentDay: dispatchFuncType;
  setCutClassDay: dispatchFuncType;
  setLeaveLateDay: dispatchFuncType;
  setPerceptionDay: dispatchFuncType;
  absentDay: string;
  leaveLateDay: string;
  perceptionDay: string;
  cutClassDay: string;
  isError: boolean;
}

const Attendance: FC<Props> = ({
  absentDay,
  leaveLateDay,
  perceptionDay,
  cutClassDay,
  setAbsentDay,
  setCutClassDay,
  setLeaveLateDay,
  setPerceptionDay,
  isError,
}) => (
  <AttendanceRowDiv>
    <tr>
      <td className='header bottom' rowSpan={2}>
        <div>출석 정보</div>
      </td>
      <AttendanceColumn
        valueChangeHandler={setAbsentDay}
        value={absentDay}
        isError={isError}
        describe='미인정(무단) 결석 일수의 합'
      />
      <AttendanceColumn
        valueChangeHandler={setPerceptionDay}
        value={perceptionDay}
        isError={isError}
        describe='전체 미인정(무단) 지각 회수'
      />
    </tr>
    <tr>
      <AttendanceColumn
        valueChangeHandler={setCutClassDay}
        value={cutClassDay}
        isError={isError}
        describe='전체 미인정(무단) 결과 회수'
      />
      <AttendanceColumn
        valueChangeHandler={setLeaveLateDay}
        value={leaveLateDay}
        isError={isError}
        describe='전체 미인정(무단) 조퇴 회수'
      />
    </tr>
  </AttendanceRowDiv>
);

export default Attendance;
