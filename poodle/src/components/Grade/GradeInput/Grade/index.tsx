import React, { FC } from 'react';
import GradeRow from './GradeRow';

const GradeScore: FC = () => {
    return (
        <>
            <GradeRow>국어</GradeRow>
            <GradeRow>사회</GradeRow>
            <GradeRow>역사</GradeRow>
            <GradeRow>수학</GradeRow>
            <GradeRow>과학</GradeRow>
            <GradeRow>기술가정</GradeRow>
            <GradeRow>영어</GradeRow>
        </>
    )
}

export default GradeScore;