import React, { FC, useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GradeButtonList } from '@/styles/Grade';
import { ReducerType } from '@/core/redux/store';
import {
  setGrade,
  GradeType,
  SubjectType,
  ScoreType,
} from '@/core/redux/actions/Grade';

interface Props {
  subject: SubjectType;
  semester: number;
  grade: number;
  isGradeAllX: boolean;
  isGradeFirst: boolean;
}

const GraduatedGradeColumn: FC<Props> = ({
  subject,
  semester,
  grade,
  isGradeAllX,
  isGradeFirst,
}) => {
  const [isChecked, isCheckedChange] = useState(false);
  const dispatch = useDispatch();
  const gradeState = useSelector(
    (state: ReducerType) => state.GradeState.grade,
  );
  const scoreList: ScoreType[] = ['A', 'B', 'C', 'D', 'E', 'X'];
  const scoreClickChange = useCallback(
    (score: ScoreType) => {
      setScore(score);
    },
    [gradeState],
  );
  const setScore = useCallback(
    (score: ScoreType) => {
      const copy: GradeType[] = copyGradeState(gradeState);
      const scoreIndex = getChangeIndex(copy);
      if (!copy[scoreIndex]) return;
      copy[scoreIndex].score = score;
      const action = setGrade({ grade: copy });
      dispatch(action);
    },
    [gradeState],
  );
  const copyGradeState = useCallback((gradeList: GradeType[]): GradeType[] => {
    const copy = [...gradeList];
    return copy;
  }, []);
  const getChangeIndex = useCallback(
    (gradeList: GradeType[]): number =>
      gradeList.findIndex(score => isSameScore(score)),
    [],
  );
  const getScoreList = useCallback(
    (gradeList: GradeType[]): GradeType[] =>
      gradeList.filter(grade => isSameScore(grade)),
    [],
  );
  const isSameScore = useCallback(
    (gradeObject: GradeType) =>
      gradeObject.grade === grade &&
      gradeObject.semester === semester &&
      gradeObject.subject === subject,
    [],
  );
  const getScore = useCallback((gradeList: GradeType[]): ScoreType => {
    const buf = getScoreList(gradeList);
    if (buf[0]) {
      return buf[0].score;
    }
    return 'X';
  }, []);
  const setScoreList = useCallback(
    (scoreList: ScoreType[]) =>
      scoreList.map(score => (
        <li
          key={`${subject}-${grade}-${semester}-${score}`}
          onClick={() => scoreClickChange(score)}
        >
          {score}
        </li>
      )),
    [gradeState],
  );
  useEffect(() => {
    if (isGradeAllX && isGradeFirst) isCheckedChange(true);
    if (!isGradeFirst) isCheckedChange(false);
  }, [isGradeAllX, isGradeFirst]);
  return (
    <td colSpan={1} className='grade'>
      <GradeButtonList>
        <label>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={() => isCheckedChange(!isChecked)}
          />
          <li>{getScore(gradeState)}</li>
          <div>{setScoreList(scoreList)}</div>
        </label>
      </GradeButtonList>
    </td>
  );
};

export default GraduatedGradeColumn;
