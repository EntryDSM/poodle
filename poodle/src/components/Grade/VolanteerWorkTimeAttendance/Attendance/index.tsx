import React, { FC } from 'react';
import { AttendanceRowDiv } from '../../../../styles/Grade';
import {
  PerceptionColumn,
  LeaveLateColumn,
  CutClassColumn,
  AbsentColumn,
} from './column';

type dispatchFuncType = (value: string) => void;

interface Props {
    setAbsentDay: dispatchFuncType,
    setCutClassDay: dispatchFuncType,
    setLeaveLateDay: dispatchFuncType,
    setPerceptionDay: dispatchFuncType,
    absentDay: string,
    leaveLateDay: string,
    perceptionDay: string,
    cutClassDay: string,
    isError: boolean,
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
      <td
        className="header bottom"
        rowSpan={2}
      >
        <div>
          출석 정보
        </div>
      </td>
      <td className="element">
        <div>
          <AbsentColumn
            valueChangeHandler={setAbsentDay}
            value={absentDay}
            isError={isError}
          />
        </div>
      </td>
      <td className="element">
        <div>
          <LeaveLateColumn
            valueChangeHandler={setLeaveLateDay}
            value={leaveLateDay}
            isError={isError}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td className="element">
        <div>
          <PerceptionColumn
            valueChangeHandler={setPerceptionDay}
            value={perceptionDay}
            isError={isError}
          />
        </div>
      </td>
      <td className="element">
        <div>
          <CutClassColumn
            valueChangeHandler={setCutClassDay}
            value={cutClassDay}
            isError={isError}
          />
        </div>
      </td>
    </tr>
  </AttendanceRowDiv>
);

export default Attendance;
