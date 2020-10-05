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
    return gradeList.map(grade => {
      if (isSameScore(grade)) {
        grade.score = 'X';
        grade.isChecked = false;
      }
      return grade;
    });
  };
  const setScoreToOpen = (gradeList: GradeType[]): GradeType[] => {
    return gradeList.map(grade => {
      if (isSameScore(grade)) {
        grade.isChecked = true;
      }
      return grade;
    });
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
    let gradeListBuf: GradeType[];
    if (isChecked) {
      checkChange(false);
      gradeListBuf = setScoreToOpen(gradeList);
    } else {
      checkChange(true);
      gradeListBuf = setScoreToX(gradeList);
    }
    const action = setGrade({ grade: gradeListBuf });
    dispatch(action);
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
