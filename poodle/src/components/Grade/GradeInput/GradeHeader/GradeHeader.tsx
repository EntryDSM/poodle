import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  setGrade,
  GradeType,
  SubjectType,
  ScoreType,
} from '../../../../core/redux/actions/Grade';
import { GradeSubTitle, GradeHeaderDiv } from '../../../../styles/Grade';
import { GradeSetAllScore } from '../GradeHeader';
import { GRADESEMESTERLIST } from '../../constance';

const scoreList: ScoreType[] = ['A', 'B', 'C', 'D', 'E', 'X'];
const subjectList: SubjectType[] = [
  'korean',
  'math',
  'history',
  'science',
  'society',
  'tech',
  'english',
];
const GradeHeader: FC = () => {
  const dispatch = useDispatch();
  const setAllScore = useCallback((score: ScoreType) => {
    const newGradeList = getGradeAllScoreChange(score);
    const action = setGrade({ grade: newGradeList });
    dispatch(action);
  }, []);
  const getGradeAllScoreChange = (score: ScoreType) => {
    const gradeList: GradeType[] = [];
    subjectList.map((subject: SubjectType) => {
      for (let i = 0; i < GRADESEMESTERLIST.length; i++) {
        const { grade, semester } = GRADESEMESTERLIST[i];
        const newGrade: GradeType = {
          subject,
          grade,
          semester,
          score,
        };
        gradeList.push(newGrade);
      }
    });
    return gradeList;
  };
  const setAllScoreComp = useCallback(
    (scoreList: ScoreType[]) =>
      scoreList.map(score => (
        <GradeSetAllScore onClick={() => setAllScore(score)}>
          {score}
        </GradeSetAllScore>
      )),
    [],
  );

  return (
    <GradeHeaderDiv>
      <GradeSubTitle>성적 입력</GradeSubTitle>
      <div>
        전체 성적 초기화
        {setAllScoreComp(scoreList)}
      </div>
    </GradeHeaderDiv>
  );
};

export default GradeHeader;
