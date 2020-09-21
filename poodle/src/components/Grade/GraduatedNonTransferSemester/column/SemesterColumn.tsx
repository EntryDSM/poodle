import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from '../../../../core/redux/store';
import { Checkbox } from '../../../default/ApplicationFormDefault/Checkbox';
import { GradeType, setGrade } from '../../../../core/redux/actions/Grade';

interface Props {
  children: string;
  grade: number;
  semester: number;
  isLast?: boolean;
}

const GradeColumn: FC<Props> = ({ children, grade, semester, isLast }) => {
  const dispatch = useDispatch();
  const [isChecked, checkChange] = useState(false);
  const gradeState = useSelector(
    (state: ReducerType) => state.GradeState.grade,
  );
  const setScoreToX = (gradeList: GradeType[]): GradeType[] => {
    let buf = [];
    buf = gradeList.map(grade => {
      if (isSameScore(grade)) {
        grade.score = 'X';
        grade.isChecked = false;
      }
      return grade;
    });
    return buf;
  };
  const isScoreX = (grade: GradeType) => {
    if (isSameScore(grade) && grade.score !== 'X') {
      return false;
    }
    return true;
  };
  const isSameScore = (gradeObject: GradeType) =>
    gradeObject.grade === grade && gradeObject.semester === semester;
  const checkboxClickHandler = (gradeList: GradeType[]) => {
    const gradeListBuf = setScoreToX(gradeList);
    if (isChecked) {
      checkChange(false);
    } else {
      const action = setGrade({ grade: gradeListBuf });
      dispatch(action);
      checkChange(true);
    }
  };
  const isAllScoreX = (gradeList: GradeType[]) => {
    let flag = true;
    gradeList.map(grade => {
      if (flag) {
        flag = isScoreX(grade);
      }
    });
    return flag;
  };
  useEffect(() => {
    if (!isAllScoreX(gradeState)) {
      checkChange(false);
    }
  }, [gradeState]);
  return (
    <td className={isLast ? 'big semester' : 'semester'} colSpan={1}>
      <div>
        <Checkbox
          onChange={() => checkboxClickHandler(gradeState)}
          checked={isChecked}
        >
          {children}
        </Checkbox>
      </div>
    </td>
  );
};

export default GradeColumn;
