import React, { FC, useCallback } from 'react';
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

const GradeColumn: FC<Props> = ({ subject, semester, grade }) => {
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
  const updateScoreList = useCallback((gradeList: GradeType[]) => {
    const copy = gradeList.map(grade => {
      if (isSameScore(grade)) {
        const buffer = { ...grade };
        buffer.isChecked = !grade.isChecked;
        return buffer;
      }
      return grade;
    });
    const action = setGrade({ grade: copy });
    dispatch(action);
  }, []);
  return (
    <td colSpan={1} className='grade'>
      <GradeButtonList>
        <label>
          <input
            type='checkbox'
            checked={getScoreList(gradeState)[0].isChecked}
            onChange={() => updateScoreList(gradeState)}
          />
          <li>{getScore(gradeState)}</li>
          <div>{setScoreList(scoreList)}</div>
        </label>
      </GradeButtonList>
    </td>
  );
};

export default GradeColumn;
