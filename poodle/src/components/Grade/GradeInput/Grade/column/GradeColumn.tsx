import React, {
  FC,
  useState,
  useCallback,
} from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import {
  GradeButtonList,
} from '@/styles/Grade';
import {
  ReducerType,
} from '../../../../../core/redux/store';
import {
  setGrade,
  GradeType,
  SubjectType,
  ScoreType,
} from '../../../../../core/redux/actions/Grade';

interface Props {
    subject: SubjectType,
    semester: number,
    grade: number,
}

const GradeColumn: FC<Props> = ({
  subject,
  semester,
  grade,
}) => {
  const dispatch = useDispatch();
  const gradeState = useSelector((state:ReducerType) => state.GradeState.grade);
  const scoreList:ScoreType[] = ['A', 'B', 'C', 'D', 'E', 'X'];
  const scoreClickChange = (score: ScoreType) => {
    setScore(score);
  };
  const setScore = (score: ScoreType) => {
    const copy: GradeType[] = copyGradeState(gradeState);
    const scoreIndex = getChangeIndex(copy);
    copy[scoreIndex].score = score;
    const action = setGrade({ grade: copy });
    dispatch(action);
  };
  const copyGradeState = useCallback((
    gradeList: GradeType[]
  ): GradeType[] => {
    const copy = [...gradeList];
    return copy;
  },[]);
  const getChangeIndex = useCallback((
    gradeList: GradeType[],
  ): number => gradeList.findIndex((score) => isSameScore(score))
  ,[]);
  const getScoreList = useCallback((
    gradeList: GradeType[]
  ): GradeType[] => gradeList.filter((grade) => isSameScore(grade))
  ,[]);
  const isSameScore = useCallback((
      gradeObject: GradeType
    ) => (
      gradeObject.grade === grade
        && gradeObject.semester === semester
        && gradeObject.subject === subject
  ),[])
  const getScore = useCallback((
    gradeList: GradeType[]
  ): ScoreType => {
    const buf = getScoreList(gradeList);
    if (buf[0]) {
      return buf[0].score;
    }
    return 'X';
  },[]);
  const setScoreList = useCallback((scoreList: ScoreType[]) => 
    scoreList.map((score) => (
      <li
        key={`${subject}-${grade}-${semester}-${score}`}
        onClick={() => scoreClickChange(score)}
      >
        {score}
      </li>
    )
  ),[])
  return (
    <td
      colSpan={1}
      className="grade"
    >
      <GradeButtonList>
        <label>
          <input type="checkbox" />
          <li>
            {
              getScore(gradeState)
            }
          </li>
          <div>
            {
              setScoreList(scoreList)
            }
          </div>
        </label>
      </GradeButtonList>
    </td>
  );
};

export default GradeColumn;
